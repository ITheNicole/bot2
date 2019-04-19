const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'www.evolutioncheats.xyz',
            type: "STREAMING",
            url: "https://www.evolutioncheats.xyz"
        }
    });
});

client.login(process.env.BOT_TOKEN);



