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

import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../classes/structures/SlashCommand";
import { getRandomFact, getCategoryEmoji, getDifficultyEmoji } from "../data/eeFacts";

export class EEQuizCommand extends SlashCommand {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('eequiz')
                .setDescription('Test your EE knowledge with an interactive quiz!')
        );
    }

    public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        const fact = getRandomFact();
        
        // Create multiple choice answers
        const correctAnswer = fact.title;
        const wrongAnswers = [
            "Ohm's Revolutionary Discovery",
            "Faraday's Electric Moment", 
            "Maxwell's Circuit Breakthrough",
            "Kirchhoff's Power Theory"
        ];
        
        // Mix correct answer with wrong ones
        const allAnswers = [correctAnswer, ...wrongAnswers.slice(0, 3)];
        const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
        const correctIndex = shuffledAnswers.indexOf(correctAnswer);

        // Create buttons for answers
        const buttons = shuffledAnswers.map((answer, index) => 
            new ButtonBuilder()
                .setCustomId(`quiz_${index}_${correctIndex}_${fact.id}`)
                .setLabel(`${String.fromCharCode(65 + index)}. ${answer}`)
                .setStyle(ButtonStyle.Primary)
        );

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);

        await this.Reply(interaction, {
            title: `⚡ EE Quiz Challenge!`,
            description: `**${getCategoryEmoji(fact.category)} Category:** ${fact.category.charAt(0).toUpperCase() + fact.category.slice(1)}\n**${getDifficultyEmoji(fact.difficulty)} Difficulty:** ${fact.difficulty.charAt(0).toUpperCase() + fact.difficulty.slice(1)}\n\n**Question:** What is the title of this EE fact?\n\n*"${fact.fact}"*\n\nChoose the correct answer:`,
            components: [row],
            fields: [
                {
                    name: '🎯 How to Play',
                    value: 'Click one of the buttons below to select your answer!',
                    inline: false
                }
            ]
        });
    }
}