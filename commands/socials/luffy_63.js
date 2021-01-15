const Discord = require('discord.js');

module.exports = {
    name: "luffy",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**LUFFY_63 CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/avatars/499204745995616276/0516a6ec722e173698377cdce8de3081.gif?size=1024')
        .setImage('https://cdn.discordapp.com/avatars/499204745995616276/0516a6ec722e173698377cdce8de3081.gif?size=1024')
        .setFooter('LUFFY_63', 'https://cdn.discordapp.com/avatars/499204745995616276/0516a6ec722e173698377cdce8de3081.gif?size=1024')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCcXM5AVExu1xIuEv3sMyWdg', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/luffy_63'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}