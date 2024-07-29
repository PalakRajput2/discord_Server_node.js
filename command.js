const { REST, Routes } = require("discord.js");
const config = require("./config.json");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Creates a new user",
  },
];
const rest = new REST({ version: "10" }).setToken(config.token);

(async ()=>{
    try {
        console.log("Started refreshing application (/) commands.");
      
        await rest.put(Routes.applicationCommands("1267379569510322220"), { body: commands });
      
        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
      
}) ();
