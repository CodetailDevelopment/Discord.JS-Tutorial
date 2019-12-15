//The underneath code is needed so we can use .env instead of JSON.
require("dotenv").config();

//Calling the Discord.JS package with some options.
const { Collection, Client } = require("discord.js");

//Creating the client with the option that disables everyone tagging.
const client = new Client({
    disableEveryone: true
});

//An event which emits whenever the bot becomes online/logs in.
client.on("ready", async () => {
    console.log("[LOG] I've become online on " + client.guilds.size + " servers!");
    client.user.setActivity("my code.", {type: "WATCHING"});
});

//An event which emits whenever it crashes.
client.on("disconnect", async () => {
    console.log("[LOG] I've disconnected from discord!");
});

//An event which emits whenever the bot tries to log back in/tries to reconnect.
client.on("reconnecting", async () => {
    console.log("[LOG] Reconnecting to discord...");
});

//In here the bot tries to login using it's token.
client.login(process.env.TOKEN);
