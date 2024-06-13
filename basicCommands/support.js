const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/b-b";
      const githubLink = "https://github.com/Q3nfQ/Bad-boys-";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1163577871265185865/1247388207402844261/standard_2.gif?ex=666c5e8b&is=666b0d0b&hm=8ac6dfdd1788dfb68a663e36ec98bd262b1147280045e03874f8e829b600623d&', 
              url: 'https://discord.gg/b-b'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=663956f7&is=66380577&hm=3b3c19a11adcb979517a133f2907f671305d23f1f5092cf7df043e6d5cab07bc&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by Bad boys!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                   ║
║                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
