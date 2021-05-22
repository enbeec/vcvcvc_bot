#!/usr/bin/env node
import { atlasInit, atlasHelp, atlasAbout, atlasShow } 

const prefix = "_";


const messageHandler = (message) => {
	// don't even read bot messages
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();

	if (command === "atlas" || command === "a") {
		if (args.length === 0) {
			message.reply(atlasHelp());
			return;
		} else if (args.length === 1) {
			if (args[0] === "help" || args[0] === "h")
			message.reply(atlasShow(args[0]));
			return;
		}
	}
};

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}.`);
	atlasInit();
});

client.on("message", messageHandler);

client.login(process.env.DISCORD_TOKEN);
