const Discord = require('discord.js');

module.exports = {
    name: "alilion",
    category: "socials",
    description: "**ALILION",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**ALI🦁LION CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/798120895738544129/799202575676080157/ee13bd148ebb645cfdb089401294e876_1.png')
        .setImage('https://cdn.discordapp.com/attachments/798120895738544129/799202575676080157/ee13bd148ebb645cfdb089401294e876_1.png')
        .setFooter('ALI LION', 'https://cdn.discordapp.com/attachments/798120895738544129/799202575676080157/ee13bd148ebb645cfdb089401294e876_1.png')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/user/Ali711lion', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/ali_lion'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}
