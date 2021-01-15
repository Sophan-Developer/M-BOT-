const Discord = require('discord.js');

module.exports = {
    name: "redfox",
    category: "socials",
    description: "",
    usage: "?embed",
    accessableby: "Members",
    aliases: []
}

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('**REDFOX CHANNELS**')
        .setDescription('')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/798120895738544129/799224398120878140/8f1ee3a2-c654-4ede-aeae-8f32c79c10ba-profile_image-70x70.png')
        .setImage('https://cdn.discordapp.com/attachments/798120895738544129/799224398120878140/8f1ee3a2-c654-4ede-aeae-8f32c79c10ba-profile_image-70x70.png')
        .setFooter('REDFOX', 'https://cdn.discordapp.com/attachments/798120895738544129/799224398120878140/8f1ee3a2-c654-4ede-aeae-8f32c79c10ba-profile_image-70x70.png')
        
        .addFields(
            { name: 'YouTube', value: 'https://www.youtube.com/channel/UCD6jBcNMaUyFElnitPNxe8Q', inline: true},
            { name: 'Twitch', value: 'https://www.twitch.tv/iiiredfox'},
            { name: 'Twitter', value: 'https://twitter.com/iiRedFox'},
            
        )
            
        .setTimestamp()


    message.channel.send(embed);
}