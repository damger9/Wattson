import 'dotenv/config';
import { GatewayIntentBits } from "discord.js";
import { Bot as BotClass } from "./classes/Bot";
import { EEFactCommand } from "./commands/EEFactCommand";
import { EEStatsCommand } from "./commands/EEStatsCommand";
import { EEQuizCommand } from "./commands/EEQuizCommand";

export const Bot = new BotClass({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessagePolls
    ]
});

// Register commands
Bot.registerCommand(new EEFactCommand());
Bot.registerCommand(new EEStatsCommand());
Bot.registerCommand(new EEQuizCommand());

// Start the bot
async function startBot() {
    try {
        const token = process.env.DISCORD_BOT_TOKEN;
        const clientId = process.env.DISCORD_CLIENT_ID;
        
        if (!token) {
            console.error('❌ DISCORD_BOT_TOKEN environment variable is required!');
            console.log('💡 Create a .env file with: DISCORD_BOT_TOKEN=your_bot_token_here');
            process.exit(1);
        }
        
        if (!clientId) {
            console.error('❌ DISCORD_CLIENT_ID environment variable is required!');
            console.log('💡 Add to .env file: DISCORD_CLIENT_ID=your_client_id_here');
            process.exit(1);
        }

        // Login to Discord
        await Bot.login(token);
        
        // Deploy commands
        await Bot.deployCommands(token, clientId);
        
        console.log('🚀 Wattson started successfully!');
        console.log('💡 Use /eefact, /eestats, or /eequiz in Discord!');
        
    } catch (error) {
        console.error('❌ Failed to start bot:', error);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🔄 Shutting down Wattson...');
    Bot.destroy();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🔄 Shutting down Wattson...');
    Bot.destroy();
    process.exit(0);
});

// Start the bot
startBot();