import { GatewayIntentBits } from "discord.js";
import { Bot as BotClass } from "./classes/Bot";

export const Bot = new BotClass({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessagePolls
    ]
})