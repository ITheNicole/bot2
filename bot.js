const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');


});

client.login(process.env.BOT_TOKEN);

bot.user.setPresence({ game: { name: 'with depression', type: "streaming", url: "https://www.twitch.tv/monstercat"}}); 

