const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');
    client.editStatus('test');


});

client.login(process.env.BOT_TOKEN);

