/*
Wattson - A Discord EE bot by Not_H3
Copyright (C) 2025  Not_H3

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { AutocompleteInteraction, ChatInputCommandInteraction, SlashCommandBuilder, MessageFlags } from "discord.js";
import { SlashCommand } from "../classes/structures/SlashCommand";
import { getRandomFact, getFactsByCategory, getCategories, getCategoryEmoji, getDifficultyEmoji, getFactsByDifficulty, EEFact } from "../data/eeFacts";

export class EEFactCommand extends SlashCommand {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('eefact')
                .setDescription('Get a random electrical engineering fact!')
                .addStringOption(option =>
                    option.setName('category')
                        .setDescription('Filter facts by category')
                        .setRequired(false)
                        .setAutocomplete(true)
                )
                .addStringOption(option =>
                    option.setName('difficulty')
                        .setDescription('Filter facts by difficulty level')
                        .setRequired(false)
                        .addChoices(
                            { name: '🟢 Beginner', value: 'beginner' },
                            { name: '🟡 Intermediate', value: 'intermediate' },
                            { name: '🔴 Advanced', value: 'advanced' }
                        )
                )
        );
    }

    public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        const categoryFilter = interaction.options.getString('category');
        const difficultyFilter = interaction.options.getString('difficulty') as EEFact['difficulty'] | null;

        let fact: EEFact;
        let filterText = '';

        // Get fact based on filters
        if (categoryFilter) {
            const categoryFacts = getFactsByCategory(categoryFilter as EEFact['category']);
            if (categoryFacts.length === 0) {
                await this.Reply(interaction, {
                    title: '❌ Invalid Category',
                    description: `No facts found for category: **${categoryFilter}**\n\nAvailable categories: ${getCategories().map((cat: string) => `\`${cat}\``).join(', ')}`,
                    flags: [MessageFlags.Ephemeral]
                });
                return;
            }
            
            if (difficultyFilter) {
                const filteredFacts = categoryFacts.filter((f: EEFact) => f.difficulty === difficultyFilter);
                fact = filteredFacts.length > 0 ? 
                    filteredFacts[Math.floor(Math.random() * filteredFacts.length)] : 
                    categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
            } else {
                fact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
            }
            filterText = `Category: ${categoryFilter}`;
        } else if (difficultyFilter) {
            const difficultyFacts = getFactsByDifficulty(difficultyFilter);
            fact = difficultyFacts[Math.floor(Math.random() * difficultyFacts.length)];
            filterText = `Difficulty: ${difficultyFilter}`;
        } else {
            fact = getRandomFact();
        }

        // Create embed response
        const embedData = {
            title: `${getCategoryEmoji(fact.category)} ${fact.title}`,
            description: fact.fact,
            fields: [
                {
                    name: '📋 Category',
                    value: `${getCategoryEmoji(fact.category)} ${fact.category.charAt(0).toUpperCase() + fact.category.slice(1)}`,
                    inline: true
                },
                {
                    name: '📊 Difficulty',
                    value: `${getDifficultyEmoji(fact.difficulty)} ${fact.difficulty.charAt(0).toUpperCase() + fact.difficulty.slice(1)}`,
                    inline: true
                },
                {
                    name: '🔢 Fact ID',
                    value: `#${fact.id}`,
                    inline: true
                }
            ]
        };

        if (fact.explanation) {
            embedData.fields!.push({
                name: '💡 More Information',
                value: fact.explanation,
                inline: false
            });
        }

        if (filterText) {
            embedData.fields!.push({
                name: '🔍 Filter Applied',
                value: filterText,
                inline: false
            });
        }

        await this.Reply(interaction, embedData);
    }

    public async autocomplete(interaction: AutocompleteInteraction): Promise<void> {
        const focusedOption = interaction.options.getFocused(true);

        if (focusedOption.name === 'category') {
            const categories = getCategories();
            const filtered = categories.filter((category: string) =>
                category.toLowerCase().includes(focusedOption.value.toLowerCase())
            );

            await interaction.respond(
                filtered.slice(0, 25).map((category: string) => ({
                    name: `${getCategoryEmoji(category as EEFact['category'])} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
                    value: category
                }))
            );
        }
    }
}