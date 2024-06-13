const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");

module.exports = {
	name: 'avatar',
    aliases: ['profilepic', 'pfp', 'av'],
	description: 'sends user avatar',
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 });
		
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(`${user.username}'s Avatar`)
            .setImage(avatar);

		
		
		
		message.reply({ embeds: [embed] });
	},
};

/*



╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by BAD boys                                              ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                   ║
║                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
