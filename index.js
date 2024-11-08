require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const qiitaNotifier = require('./modules/qiitaNotifier');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`${client.user.tag} is Online!`);
  qiitaNotifier.start(client);
});

client.login(process.env.DISCORD_TOKEN);
