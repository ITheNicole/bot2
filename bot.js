var Discord = require ( 'discord.io' );
 
var botToken =  'NTY4MDE4NDg2NDAwMzg1MDI1.XLcsdw.xoH_UWTA6zRT3PZkdsDawgJcVQI' ;
 
var bot =  new Discord.Client ({
    token : botToken
});
 
bot.on ( "ready" , function () {
    console.log ( 'Zalogowany jako% s -% s' , bot.username, bot.id);
});
bot.connect ();