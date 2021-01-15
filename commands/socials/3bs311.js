const Discord = require('discord.js');

module.exports = {
    name: "3bs311",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**3BS311 CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/798120895738544129/799222795279138826/unnamed.jpg')
        .setImage('https://cdn.discordapp.com/attachments/798120895738544129/799222795279138826/unnamed.jpg')
        .setFooter('3BS311', 'https://cdn.discordapp.com/attachments/798120895738544129/799222795279138826/unnamed.jpg')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCfI5XRwoymFtdkpEmbcCHXw', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/3bs911'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}
