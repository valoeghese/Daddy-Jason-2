import "dotenv/config.js"
import "./model/database/database.js"
import * as Discord from "./discord/discord.js"
import app from "./website.js"

Discord.startDiscord({
	token: process.env["discord.token"],
	prefix: process.env["discord.prefix"]
});

startWebsite(
	process.env["website.location"],
	process.env["website.port"]
);

function startWebsite(location?: string, port?: string): void {
	// ensure both location and port are specified
	let missing = [];
	
	if (location === undefined) {
		missing.push("location");
	}

	if (port === undefined) {
		missing.push("port");
	}

	if (missing.length > 0) {
		return console.log(`Skipping Website: missing ${missing.join(", ")}.`);
	}

	// ensure port is int
	let portNum = parseInt(port);

	if (Number.isNaN(portNum)) {
		return console.error(`Port "${port}" is not an integer.`)
	}

	app.listen(portNum, () => {
		console.log(`Started server at ${location}:${portNum}`);
	});
}