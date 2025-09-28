import { GatewayIntentBits } from "discord.js";
import { Bot } from "./classes/Bot";

const bot = new Bot({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessagePolls
    ]
})