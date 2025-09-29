# Wattson ⚡ - The EE Facts Discord Bot

Wattson is an educational Discord bot that shares fascinating facts about Electrical Engineering! Perfect for EE students, professionals, and anyone curious about the world of electrical engineering.

## Features 🎯

- **📚 Rich EE Facts Database**: 20+ curated facts across 8 categories
- **🎮 Interactive Quiz System**: Test your EE knowledge with multiple choice questions
- **📊 Statistics & Analytics**: View database statistics and fact distributions
- **🎨 Beautiful Discord Embeds**: Rich formatting with emojis and organized information
- **🔍 Smart Filtering**: Filter facts by category and difficulty level
- **⚡ Modern Slash Commands**: Full Discord slash command integration

## Available Commands 📋

### `/eefact [category] [difficulty]`
Get a random electrical engineering fact with optional filtering:
- **Categories**: history, components, circuits, power, signals, fun, careers, theory
- **Difficulty**: beginner, intermediate, advanced

### `/eestats`
View comprehensive statistics about the EE facts database including:
- Total fact count
- Distribution across categories
- Difficulty level breakdown

### `/eequiz`
Start an interactive multiple-choice quiz to test your EE knowledge:
- Random facts converted to quiz questions
- Immediate feedback with explanations
- Learn while having fun!

## Fact Categories 📚

- **📜 History** - Famous EE pioneers and historical milestones
- **🔌 Components** - Resistors, capacitors, transistors, and electronic components
- **🔄 Circuits** - Circuit theory, analysis, and design principles
- **⚡ Power** - Power systems, generation, and distribution
- **📡 Signals** - Signal processing and communications
- **🎉 Fun** - Interesting and surprising EE trivia
- **💼 Careers** - EE career paths and opportunities
- **🧮 Theory** - Fundamental EE theories and mathematical concepts

## Setup Instructions 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Discord application with bot token

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/damger9/Wattson.git
   cd Wattson
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Discord credentials:
   ```env
   DISCORD_BOT_TOKEN=your_bot_token_here
   DISCORD_CLIENT_ID=your_client_id_here
   ```

4. **Build and run**
   ```bash
   npm run build
   npm start
   ```

   For development:
   ```bash
   npm run start:dev
   ```

### Getting Discord Bot Credentials

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" section and click "Reset Token" to get your bot token
4. Copy your Application ID from the "General Information" section (this is your Client ID)
5. Add both values to your `.env` file

### Inviting the Bot

1. In Discord Developer Portal, go to OAuth2 > URL Generator
2. Select scopes: `bot` and `applications.commands`
3. Select permissions: `Send Messages`, `Use Slash Commands`, `Read Message History`
4. Use the generated URL to invite your bot to your server

## Project Structure 📁

```
src/
├── classes/
│   ├── Bot.ts                    # Main bot class with command handling
│   └── structures/
│       └── SlashCommand.ts       # Abstract base class for slash commands
├── commands/
│   ├── EEFactCommand.ts          # /eefact command implementation
│   ├── EEStatsCommand.ts         # /eestats command implementation
│   └── EEQuizCommand.ts          # /eequiz command implementation
├── data/
│   └── eeFacts.ts                # EE facts database and utilities
├── config.json                   # Bot configuration
└── index.ts                      # Entry point and bot initialization
```

## Adding New Content 📝

### Adding New EE Facts

Edit `src/data/eeFacts.ts` and add new facts to the `EE_FACTS` array:

```typescript
{
    id: 21,
    category: 'theory',
    title: 'Your Fact Title',
    fact: 'Your interesting EE fact here!',
    explanation: 'Optional detailed explanation',
    difficulty: 'intermediate'
}
```

### Creating New Commands

1. Create a new file in `src/commands/`
2. Extend the `SlashCommand` class
3. Implement the `execute` method
4. Register the command in `src/index.ts`

## Example Usage 💡

```
/eefact
→ Get a random EE fact

/eefact category:power
→ Get a random fact about power systems

/eefact difficulty:beginner
→ Get a beginner-level fact

/eestats
→ View database statistics

/eequiz
→ Start an interactive quiz
```

## Contributing 🤝

Contributions are welcome! You can help by:
- Adding more EE facts across different categories
- Creating new interactive commands
- Improving the user interface and experience
- Fixing bugs or optimizing performance
- Adding new educational features

## License 📄

This project is licensed under the GNU Affero General Public License v3.0 - see the LICENSE file for details.

---

Made with ⚡ for the Electrical Engineering community!

*"Wattson helps you discover the electrifying world of EE, one fact at a time!"*
Source code for Wattson, The (Electrical) Engineering Bot.
