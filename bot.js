import { atlasInit, atlasDump } from "./atlas/data.js";
import { atlasHelp, atlasAbout } from "./atlas/help.js";
import { atlasShow } from "./atlas/show.js";
import { atlasSearch } from "./atlas/search.js";
import dotenv from "dotenv";
import Discord from "discord.js";

const prefix = "_";

const messageHandler = (message) => {
	// don't even read bot messages
	if (message.author.bot) return;
	// don't read messages without our prefix
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(" ");
	const command = args.shift().toLowerCase();
	if (process.env.VCBOT_DEBUG) console.log("command is: " + command);
	console.log("args: " + args);

	if (command === "atlas" || command === "a") {
		if (args.length === 0) message.reply(atlasAbout());
		switch (args.shift()) {
			case "help":
				message.reply(atlasHelp(args));
				break;
			case "show":
				message.reply(atlasShow(args));
				break;
			case "search":
				message.reply("atlas search causes a lot of crashes so check on it later okii?");
				//message.reply(atlasSearch(args));
				break;
			case "add":
				message.reply("atlas add not yet implemented");
				break;
			case "del"
				message.reply("atlas del not yet implemented");
				break;
			case "dump":
				message.reply(atlasDump());
				break;
		}
	}
};

dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}.`);
	atlasInit(process.env.ATLAS_JSON_URL).then(() => {
		client.on("message", messageHandler);
		console.log("atlas is ready");
	});
});

client.login(process.env.DISCORD_TOKEN);
