const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "اقتراح",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("الرجاء تقديم الاقتراح")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("لا توجد قناة بالاسم - اقتراحات")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("اقتراح من: " 
    + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("تم أرسال اقتراحك إلى روم الاقتراحات")
    
  }
}