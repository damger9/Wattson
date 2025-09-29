import { Client, ClientOptions, EmbedBuilder, Interaction, APIEmbedField, ActionRowBuilder, MessageActionRowComponentBuilder, ColorResolvable, ChatInputCommandInteraction, ButtonInteraction, Events, Collection, REST, Routes, AutocompleteInteraction, MessageFlags } from "discord.js";

import { informativeLogging, developmentMode } from "../config.json";
import { SlashCommand } from "./structures/SlashCommand";
import { getFooterText } from "../utils/version";

export class Bot extends Client {
    public readonly InformativeLogging: boolean;
    public readonly DeveloperMode: boolean;
    public commands: Collection<string, SlashCommand> = new Collection();

    constructor(clientOptions: ClientOptions) {
        super(clientOptions)

        this.InformativeLogging = informativeLogging;
        this.DeveloperMode = developmentMode;
        
        this.setupEventListeners();
    }

    public async ReplyEmbed(
        interaction: Interaction, 
        data: {
            content?: string;
            title?: string;
            url?: string;
            description: string;
            fields?: APIEmbedField[];
            components?: ActionRowBuilder<MessageActionRowComponentBuilder>[];
            thumbnail?: string;
            author?: { name: string; iconURL?: string; url?: string };
            unixTime?: string;
            flags?: MessageFlags[];
            color?: ColorResolvable;
        }
    ) {
        const embed = new EmbedBuilder()
            .setDescription(data.description)
            .setColor(data.color || 'Blue')
            .setTimestamp()
            .setFooter({ text: getFooterText() });

        // Add optional properties
        if (data.title) embed.setTitle(data.title);
        if (data.url) embed.setURL(data.url);
        if (data.thumbnail) embed.setThumbnail(data.thumbnail);
        if (data.author) embed.setAuthor(data.author);
        if (data.fields) embed.addFields(data.fields);

        // Prepare response options
        const replyOptions: any = {
            embeds: [embed]
        };
        
        // Add flags if provided
        if (data.flags && data.flags.length > 0) {
            replyOptions.flags = data.flags;
        }

        if (data.content) replyOptions.content = data.content;
        if (data.components) replyOptions.components = data.components;

        // Handle different interaction types
        if (interaction.isChatInputCommand() || interaction.isButton()) {
            const cmdInteraction = interaction as ChatInputCommandInteraction | ButtonInteraction;
            
            if (cmdInteraction.replied || cmdInteraction.deferred) {
                return await cmdInteraction.editReply(replyOptions);
            } else {
                return await cmdInteraction.reply(replyOptions);
            }
        }

        // Fallback for other interaction types
        throw new Error('Unsupported interaction type for ReplyEmbed');
    }

    private setupEventListeners(): void {
        this.once(Events.ClientReady, () => {
            if (this.InformativeLogging) {
                console.log(`🤖 Wattson is online! Logged in as ${this.user?.tag}`);
                console.log(`📊 Serving ${this.guilds.cache.size} guild(s)`);
                console.log(`⚡ Loaded ${this.commands.size} command(s)`);
            }
        });

        this.on(Events.InteractionCreate, async (interaction) => {
            if (interaction.isChatInputCommand()) {
                const command = this.commands.get(interaction.commandName);
                if (!command) return;

                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(`❌ Error executing command ${interaction.commandName}:`, error);
                    
                    const errorReply = {
                        title: '⚠️ Command Error',
                        description: 'Sorry, there was an error executing that command.',
                        flags: [MessageFlags.Ephemeral]
                    };

                    if (interaction.replied || interaction.deferred) {
                        await interaction.editReply({ embeds: [new EmbedBuilder().setTitle(errorReply.title).setDescription(errorReply.description).setColor('Red').setFooter({ text: getFooterText() })] });
                    } else {
                        await interaction.reply({ embeds: [new EmbedBuilder().setTitle(errorReply.title).setDescription(errorReply.description).setColor('Red').setFooter({ text: getFooterText() })], flags: [MessageFlags.Ephemeral] });
                    }
                }
            } else if (interaction.isAutocomplete()) {
                const command = this.commands.get(interaction.commandName);
                if (!command || !command.autocomplete) return;

                try {
                    await command.autocomplete(interaction);
                } catch (error) {
                    console.error(`❌ Error in autocomplete for ${interaction.commandName}:`, error);
                }
            } else if (interaction.isButton()) {
                // Handle quiz button interactions
                if (interaction.customId.startsWith('quiz_')) {
                    await this.handleQuizButton(interaction);
                }
            }
        });

        this.on(Events.Error, (error) => {
            console.error('🔥 Discord client error:', error);
        });
    }

    public registerCommand(command: SlashCommand): void {
        this.commands.set(command.data.name, command);
        if (this.InformativeLogging) {
            console.log(`📝 Registered command: ${command.data.name}`);
        }
    }

    public async deployCommands(token: string, clientId: string): Promise<void> {
        const commands = Array.from(this.commands.values()).map(cmd => cmd.data);
        
        const rest = new REST().setToken(token);
        
        try {
            if (this.InformativeLogging) {
                console.log(`🚀 Started refreshing ${commands.length} application (/) commands.`);
            }

            await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands }
            );

            if (this.InformativeLogging) {
                console.log(`✅ Successfully reloaded ${commands.length} application (/) commands.`);
            }
        } catch (error) {
            console.error('❌ Error deploying commands:', error);
        }
    }

    private async handleQuizButton(interaction: ButtonInteraction): Promise<void> {
        const [, selectedIndex, correctIndex, factId] = interaction.customId.split('_');
        const isCorrect = selectedIndex === correctIndex;
        
        const { getFactById } = await import('../data/eeFacts');
        const fact = getFactById(parseInt(factId));
        
        if (!fact) {
            await interaction.reply({ 
                content: '❌ Quiz data not found!', 
                flags: [MessageFlags.Ephemeral] 
            });
            return;
        }

        const resultEmbed = new EmbedBuilder()
            .setTitle(isCorrect ? '✅ Correct!' : '❌ Incorrect!')
            .setColor(isCorrect ? 'Green' : 'Red')
            .setDescription(`**Correct Answer:** ${fact.title}\n\n**Fact:** ${fact.fact}`)
            .setTimestamp()
            .setFooter({ text: getFooterText() });

        if (fact.explanation) {
            resultEmbed.addFields([
                {
                    name: '💡 Learn More',
                    value: fact.explanation,
                    inline: false
                }
            ]);
        }

        resultEmbed.addFields([
            {
                name: '🎯 Try Another Quiz',
                value: 'Use `/eequiz` to test your knowledge again!',
                inline: false
            }
        ]);

        await interaction.update({ embeds: [resultEmbed], components: [] });
    }
}