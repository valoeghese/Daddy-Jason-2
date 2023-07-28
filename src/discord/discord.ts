import {Client, Events, GatewayIntentBits, TextChannel, PrivateThreadChannel} from "discord.js"

interface Props {
	token?: string;
	prefix?: string;
}

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
let prefix = "DJ";

export function startDiscord(props: Props): void {
	if (!props.token) {
		return console.log("Discord Skipped (missing discord.token)");
	}

	prefix = props.prefix ?? prefix;
	client.on(Events.MessageCreate, e => {
		if (e.author.bot) return;

		
	});
	client.once(Events.ClientReady, c => console.log(`Logged in as ${client.user.tag}\n\t> Command Prefix: ${prefix}`));
	client.login(props.token);
}