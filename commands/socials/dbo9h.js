const Discord = require('discord.js');

module.exports = {
    name: "dbo9h",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**DBO9H CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/avatars/537320927378014211/ef83224ebe7533364e8773cad207d0bf.png?size=1024')
        .setImage('https://cdn.discordapp.com/avatars/537320927378014211/ef83224ebe7533364e8773cad207d0bf.png?size=1024')
        .setFooter('DBO9H', 'https://cdn.discordapp.com/avatars/537320927378014211/ef83224ebe7533364e8773cad207d0bf.png?size=1024')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCqlz1AJlDNsj82z2TsnKiqw', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/dbo9h'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}