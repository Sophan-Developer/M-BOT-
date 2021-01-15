const Discord = require('discord.js');

module.exports = {
    name: "mrgim",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**MR_GIM CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/avatars/541676485946376209/2deb4da0147dce52d7f4056db5284e0e.png?size=1024')
        .setImage('https://cdn.discordapp.com/avatars/541676485946376209/2deb4da0147dce52d7f4056db5284e0e.png?size=1024')
        .setFooter('MR-GIM', 'https://cdn.discordapp.com/avatars/541676485946376209/2deb4da0147dce52d7f4056db5284e0e.png?size=1024')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCpf7agRVpntAUjraXf4HBYg?view_as', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/mr_gim71'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}