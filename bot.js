const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');
    client.user.setActivity("Game"); 


});

client.login(process.env.BOT_TOKEN);

