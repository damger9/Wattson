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

import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../classes/structures/SlashCommand";
import { EE_FACTS, getCategories, getCategoryEmoji } from "../data/eeFacts";

export class EEStatsCommand extends SlashCommand {
    constructor() {
        super(
            new SlashCommandBuilder()
                .setName('eestats')
                .setDescription('View statistics about the EE facts database')
        );
    }

    public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        const categories = getCategories();
        const totalFacts = EE_FACTS.length;
        
        // Count facts by category
        const categoryStats = categories.map((category: string) => {
            const count = EE_FACTS.filter(fact => fact.category === category).length;
            return {
                category,
                count,
                emoji: getCategoryEmoji(category as any)
            };
        }).filter(stat => stat.count > 0);

        // Count facts by difficulty
        const difficultyStats = {
            beginner: EE_FACTS.filter(fact => fact.difficulty === 'beginner').length,
            intermediate: EE_FACTS.filter(fact => fact.difficulty === 'intermediate').length,
            advanced: EE_FACTS.filter(fact => fact.difficulty === 'advanced').length
        };

        const fields = [
            {
                name: '📊 Total Facts',
                value: `**${totalFacts}** electrical engineering facts`,
                inline: false
            },
            {
                name: '📚 Categories',
                value: categoryStats.map(stat => 
                    `${stat.emoji} **${stat.category.charAt(0).toUpperCase() + stat.category.slice(1)}**: ${stat.count} facts`
                ).join('\n'),
                inline: false
            },
            {
                name: '🎯 Difficulty Levels',
                value: `🟢 **Beginner**: ${difficultyStats.beginner} facts\n🟡 **Intermediate**: ${difficultyStats.intermediate} facts\n🔴 **Advanced**: ${difficultyStats.advanced} facts`,
                inline: false
            },
            {
                name: '🚀 Usage',
                value: 'Use `/eefact` to get random facts!\nAdd `category` or `difficulty` filters for specific topics.',
                inline: false
            }
        ];

        await this.Reply(interaction, {
            title: '⚡ Wattson\'s EE Knowledge Base',
            description: 'Comprehensive statistics about our electrical engineering facts database.',
            fields
        });
    }
}