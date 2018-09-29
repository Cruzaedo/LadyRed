const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'v/help') {
    	message.reply('Commands sent via Dms.');
  	}
});

client.login(process.env.BOT_TOKEN);
