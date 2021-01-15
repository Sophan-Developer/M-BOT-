const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("يجب أن يكون لديك صلاحيات المسؤول لاستخدام هذا الأمر")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("يرجى منشن الشخص الذي تريد إعادة تعيين تحذيره")
    }
    if(message.mentions.users.first().bot) {
      return message.channel.send("لا يسمح للبوت بتلقي تحذيرات")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("لا يسمح لك بإعادة ضبط تحذيراتك")
    }
    
    let warnings = db.get(`تحذيرات_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} ليس لديك أي تحذيرات`)
    }
    
    db.delete(`تحذيرات_${message.guild.id}_${user.id}`)
    user.send(`تم إعادة تعيين جميع التحذيرات الخاصة بك بواسطة ادارة سيرفر ${message.guild.name}`)
    await message.channel.send(`أعد تعيين كافة تحذيرات ${message.mentions.users.first().username}`)
    
  
    
}
}