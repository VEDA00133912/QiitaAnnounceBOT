const { ChannelType } = require('discord.js');
const Parser = require('rss-parser');
const parser = new Parser();
require('dotenv').config();

let lastItemDate = null; /

async function fetchQiitaPosts() {
  const feed = await parser.parseURL(process.env.URL);
  return feed.items;
}

async function sendNewPosts(client) {
  const channel = await client.channels.fetch(process.env.CHANNEL_ID);

  if (!channel || channel.type !== ChannelType.GuildText) {
    console.error('指定したチャンネルが見つからないか、テキストチャンネルではありません');
    return;
  }

  const items = await fetchQiitaPosts();
  for (const item of items.reverse()) {
    const itemDate = new Date(item.pubDate);
    
    if (!lastItemDate || itemDate > lastItemDate) {
      lastItemDate = itemDate;

      const message = `🆕 **${item.title}**\n${item.link}`;
      await channel.send(message);
    }
  }
}

function start(client) {
  sendNewPosts(client); 
  setInterval(() => sendNewPosts(client), 10 * 60 * 1000); 
}

module.exports = { start };
