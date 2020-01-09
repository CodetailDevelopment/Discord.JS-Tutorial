// Our envirnmental file is safer to store our config settings
require("dotenv").config();

// We need to require some properies from the discord.js library
const { Client, Collection } = require("discord.js");

// Initialise a new client and disable mention everyone
const client = new Client({
    disableEveryone: true
});

// An event which emits whenever the bot logs into Discord
client.on("ready", () => {
    const plural = client.guilds.size == 1 ? "guild" : "guilds";
    console.log(`[LOG] Logged in as ${client.user.username}!`)
    console.log(`[LOG] I have connected to ${client.guilds.size} ${plural}!`);
    client.user.setActivity("some code!", { type: "WATCHING "});
});

// A

//An event which emits whenever the bot disconnects from the websocket
client.on("disconnect", () => {
    console.error("[LOG] Disconnected from the websocket!");
});

// An event which emits whenever the bot tries reconnect to the websocket
client.on("reconnecting", () => {
    console.log("[LOG] Attempting to reconnect...");
});

// A method called that logs in the bot
client.login(process.env.TOKEN).catch(console.error);
