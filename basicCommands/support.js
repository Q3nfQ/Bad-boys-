const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/b-b";
      const githubLink = "https://github.com/bad-boys-";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1163577871265185865/1247388207402844261/standard_2.gif?ex=666c5e8b&is=666b0d0b&hm=8ac6dfdd1788dfb68a663e36ec98bd262b1147280045e03874f8e829b600623d&', 
              url: 'https://discord.gg/xQF9f9yUEM'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1163577871265185865/1247388207402844261/standard_2.gif?ex=666c5e8b&is=666b0d0b&hm=8ac6dfdd1788dfb68a663e36ec98bd262b1147280045e03874f8e829b600623d&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
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
