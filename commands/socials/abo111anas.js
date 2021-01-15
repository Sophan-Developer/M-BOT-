const Discord = require('discord.js');

module.exports = {
    name: "abo111anas",
    category: "socials",
    description: "**ABO111ANAS",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**ABO111ANAS CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/avatars/230739254513238017/689c852acd1e557b19a31bea92e092ca.png?size=1024')
        .setImage('https://cdn.discordapp.com/avatars/230739254513238017/689c852acd1e557b19a31bea92e092ca.png?size=1024')
        .setFooter('ABO111ANAS', 'https://cdn.discordapp.com/avatars/230739254513238017/689c852acd1e557b19a31bea92e092ca.png?size=1024')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/user/abo111ans', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/abo111anas'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}
