const { Client, Events, GatewayIntentBits } = require("discord.js");
const mongoose = require("mongoose");
const config = require("./config.json");


// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short ID for " + url,
    });
  }

  message.reply({
    content: "Hi from Bot",
  });
});
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong !!!");
});

client.login(config.token);