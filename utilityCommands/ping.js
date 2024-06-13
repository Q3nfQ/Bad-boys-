const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check the bot\'s ping',
    execute(message, args) {
        const ping = message.client.ws.ping;
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Bot Latency')
            .setDescription(`📊 The bot's ping is ${ping}ms.`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

   MADE BY bad boys!! FEEL FREE TO USE ANY PART OF CODE
     

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/b-b

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/B-B ]
*/
