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

export interface EEFact {
    id: number;
    category: 'history' | 'components' | 'circuits' | 'power' | 'signals' | 'fun' | 'careers' | 'theory';
    title: string;
    fact: string;
    explanation?: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const EE_FACTS: EEFact[] = [
    // History Facts
    {
        id: 1,
        category: 'history',
        title: 'Edison\'s Education',
        fact: 'Thomas Edison, often called the first electrical engineer, had only 3 months of formal education!',
        explanation: 'Edison was largely self-taught through experimentation. His teacher even told his mother he was "too dumb to learn anything."',
        difficulty: 'beginner'
    },
    {
        id: 2,
        category: 'history',
        title: 'Tesla\'s Genius',
        fact: 'Nikola Tesla held over 300 patents and could speak 8 languages fluently.',
        explanation: 'Tesla invented the AC motor, wireless technology foundations, and had an eidetic memory that allowed him to build entire machines in his mind.',
        difficulty: 'beginner'
    },
    {
        id: 3,
        category: 'history',
        title: 'First Computer Bug',
        fact: 'The first computer "bug" was an actual moth trapped in Harvard\'s Mark II computer in 1947!',
        explanation: 'Grace Hopper found the moth and taped it to her logbook with the note "First actual case of bug being found." The term stuck!',
        difficulty: 'beginner'
    },

    // Component Facts
    {
        id: 4,
        category: 'components',
        title: 'Transistor Density',
        fact: 'A single modern CPU contains over 50 billion transistors - more than stars in our galaxy!',
        explanation: 'The latest processors like Apple\'s M2 Ultra have around 134 billion transistors in a chip smaller than a credit card.',
        difficulty: 'intermediate'
    },
    {
        id: 5,
        category: 'components',
        title: 'Capacitor Danger',
        fact: 'Old CRT TV capacitors can store lethal voltages for years, even when unplugged!',
        explanation: 'High voltage capacitors discharge extremely slowly and can maintain 25kV+ for months or years. Always discharge safely!',
        difficulty: 'intermediate'
    },
    {
        id: 6,
        category: 'components',
        title: 'LED Reverse Function',
        fact: 'LEDs can work in reverse as light sensors and even generate small amounts of electricity!',
        explanation: 'This is due to the photovoltaic effect - the same principle behind solar panels. Some circuits use LEDs as both light sources and sensors.',
        difficulty: 'intermediate'
    },

    // Circuit Theory
    {
        id: 7,
        category: 'circuits',
        title: 'Kirchhoff\'s Timeless Laws',
        fact: 'Kirchhoff\'s circuit laws from 1845 still work perfectly for modern RF and microwave circuits!',
        explanation: 'KVL and KCL are fundamental laws that apply to all circuits, from DC to gigahertz frequencies, proving their mathematical elegance.',
        difficulty: 'beginner'
    },
    {
        id: 8,
        category: 'circuits',
        title: 'Short Circuit Myth',
        fact: 'A "short circuit" doesn\'t have to be physically short - it\'s about electrical path resistance!',
        explanation: 'The term means bypassing the intended circuit path with a low-resistance connection, regardless of physical wire length.',
        difficulty: 'beginner'
    },

    // Power Systems
    {
        id: 9,
        category: 'power',
        title: 'Lightning Power',
        fact: 'A lightning bolt contains 1-5 billion joules but lasts only 200 microseconds!',
        explanation: 'That\'s equivalent to about 38 gallons of gasoline worth of energy, delivered in less than a millisecond. Peak power can exceed 1 terawatt!',
        difficulty: 'intermediate'
    },
    {
        id: 10,
        category: 'power',
        title: 'Grid Synchronization',
        fact: 'The electrical grid must maintain perfect 60Hz synchronization across thousands of miles!',
        explanation: 'All generators must be phase-synchronized to within microseconds, making the power grid humanity\'s largest synchronized machine.',
        difficulty: 'advanced'
    },

    // Signal Processing
    {
        id: 11,
        category: 'signals',
        title: 'Fourier Transform Legacy',
        fact: 'The Fourier Transform from 1807 powers every digital device you use today!',
        explanation: 'From MP3 compression to WiFi, cellular networks, and image processing - Fourier analysis is the mathematical foundation of modern technology.',
        difficulty: 'intermediate'
    },
    {
        id: 12,
        category: 'signals',
        title: 'Smartphone Processing Power',
        fact: 'Your smartphone processes more data per second than entire 1990s computer centers!',
        explanation: 'Modern mobile processors can execute trillions of operations per second, with dedicated signal processing units for audio, video, and AI.',
        difficulty: 'beginner'
    },

    // Theory
    {
        id: 13,
        category: 'theory',
        title: 'Maxwell\'s Prediction',
        fact: 'Maxwell\'s equations predicted radio waves 20 years before Hertz proved they existed!',
        explanation: 'James Clerk Maxwell\'s 1865 equations showed electromagnetic waves must exist and travel at light speed - pure mathematical prediction!',
        difficulty: 'advanced'
    },
    {
        id: 14,
        category: 'theory',
        title: 'Shannon\'s Information',
        fact: 'Claude Shannon\'s 1948 information theory paper created the mathematical foundation for all digital communication!',
        explanation: 'Shannon defined the "bit" and proved fundamental limits on data compression and transmission that still govern internet and cellular networks.',
        difficulty: 'advanced'
    },

    // Fun Facts
    {
        id: 15,
        category: 'fun',
        title: 'Brain Power',
        fact: 'Your brain uses about 20 watts of power - the same as a dim light bulb!',
        explanation: 'Despite being only 2% of body weight, the brain consumes 20% of your daily energy, running incredibly efficient neural networks.',
        difficulty: 'beginner'
    },
    {
        id: 16,
        category: 'fun',
        title: 'Static Shock Voltage',
        fact: 'Walking across carpet can generate 25,000+ volts of static electricity!',
        explanation: 'That\'s higher than power transmission lines! But extremely low current makes it mostly harmless - though it can damage electronics.',
        difficulty: 'beginner'
    },
    {
        id: 17,
        category: 'fun',
        title: 'Car Wiring Length',
        fact: 'Modern cars contain over 1 mile of electrical wiring and 100+ computers!',
        explanation: 'Luxury vehicles can have 150+ ECUs (Electronic Control Units) managing everything from engine timing to seat memory.',
        difficulty: 'beginner'
    },

    // Career Facts
    {
        id: 18,
        category: 'careers',
        title: 'EE Versatility',
        fact: 'Electrical engineers work in every industry - from Hollywood special effects to Mars rovers!',
        explanation: 'EE skills are needed in entertainment, aerospace, medical devices, renewable energy, autonomous vehicles, and virtually all modern technology.',
        difficulty: 'beginner'
    },
    {
        id: 19,
        category: 'careers',
        title: 'Silicon Valley Origins',
        fact: 'Most major tech companies were founded by electrical engineers, including Intel, AMD, and NVIDIA!',
        explanation: 'Understanding both hardware and software gives EEs unique advantages in creating breakthrough technologies and successful startups.',
        difficulty: 'beginner'
    },
    {
        id: 20,
        category: 'careers',
        title: 'EE Salary Potential',
        fact: 'Specialized EE roles like RF design and chip architecture can earn $300k+ annually!',
        explanation: 'The complexity of modern semiconductors and wireless systems creates high demand for experts in these cutting-edge fields.',
        difficulty: 'intermediate'
    }
];

// Utility functions
export function getRandomFact(): EEFact {
    return EE_FACTS[Math.floor(Math.random() * EE_FACTS.length)];
}

export function getFactsByCategory(category: EEFact['category']): EEFact[] {
    return EE_FACTS.filter(fact => fact.category === category);
}

export function getFactsByDifficulty(difficulty: EEFact['difficulty']): EEFact[] {
    return EE_FACTS.filter(fact => fact.difficulty === difficulty);
}

export function getFactById(id: number): EEFact | undefined {
    return EE_FACTS.find(fact => fact.id === id);
}

export function getCategories(): string[] {
    return ['history', 'components', 'circuits', 'power', 'signals', 'fun', 'careers', 'theory'];
}

export function getCategoryEmoji(category: EEFact['category']): string {
    const emojiMap = {
        'history': '📜',
        'components': '🔌',
        'circuits': '🔄',
        'power': '⚡',
        'signals': '📡',
        'fun': '🎉',
        'careers': '💼',
        'theory': '🧮'
    };
    return emojiMap[category] || '📚';
}

export function getDifficultyEmoji(difficulty: EEFact['difficulty']): string {
    const emojiMap = {
        'beginner': '🟢',
        'intermediate': '🟡',
        'advanced': '🔴'
    };
    return emojiMap[difficulty] || '⚪';
}