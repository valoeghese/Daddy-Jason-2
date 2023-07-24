import {Client, Events, GatewayIntentBits} from "discord.js"

interface Props {
	token: string;
	prefix?: string;
}

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
let prefix = "DJ";

export function startDiscord(props: Props) {
	prefix = props.prefix ?? prefix;
	client.once(Events.ClientReady, c => console.log(`Logged in as ${client.user.tag}`));
	client.login(props.token);
}