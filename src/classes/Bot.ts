import { Client, ClientOptions } from "discord.js";

import { informativeLogging, developmentMode } from "../config.json";

export class Bot extends Client {
    public readonly InformativeLogging: boolean;
    public readonly DeveloperMode: boolean;

    constructor(clientOptions: ClientOptions) {
        super(clientOptions)

        this.InformativeLogging = informativeLogging;
        this.DeveloperMode = developmentMode;
    }
}