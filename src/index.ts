import "dotenv/config.js"

// assert all required properties exist before continuing.
if (!process.env.token) {
	console.error("No token provided.");
	process.exit();
}

import "./model/database.js"
import * as Discord from "./discord/discord.js"

Discord.startDiscord({
	token: process.env.token,
	prefix: process.env.prefix
});
