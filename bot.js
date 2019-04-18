var Discord = require ( 'discord.io' );
 
var botToken =  'NTY4NTQ0NTUzMTg4MTk2MzY4.XLjo7Q.V5t0Yy1aaDJA-eZyoLPgn6hQkkE' ;
 
var bot =  new Discord.Client ({
    token : botToken
});
 
bot.on ( "ready" , function () {
    console.log ( 'Zalogowany jako% s -% s' , bot.username, bot.id);
});
bot.connect ();
