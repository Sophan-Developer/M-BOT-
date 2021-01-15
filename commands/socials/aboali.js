const Discord = require('discord.js');

module.exports = {
    name: "aboali",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**A_B_O_A_L_I CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/avatars/170371713781989376/186afa6cfdd251b428215a72b5179298.png?size=1024')
        .setImage('https://cdn.discordapp.com/avatars/170371713781989376/186afa6cfdd251b428215a72b5179298.png?size=1024')
        .setFooter('A_B_O_A_L_I', 'https://cdn.discordapp.com/avatars/170371713781989376/186afa6cfdd251b428215a72b5179298.png?size=1024')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCdWNl8QjStENZr8-yZvDVpA', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/a_b_o_a_l_i'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}