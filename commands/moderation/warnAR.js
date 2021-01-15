const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "تحذير",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("!يجب أن يكون لديك صلاحيات المسؤول لاستخدام هذا الأمر")
    }
    
  //Fsto8
    //AR.version
    //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 
    //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 
    //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 
    //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 //FsTo8 
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("الرجاء عمل منشن الشخص للتحزير  - تحذير @mention <السبب>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("لا يمكن تحذير البوتات")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("لا يمكنك تحذير نفسك")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("لا يمكنك تحذير صاحب السيرفر")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("الرجاء كتابة السبب - تحذير @mention <السبب>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} لقد وصل بالفعل إلى الحد المسموح به مع 3 تحذيرات و هذا يعني ان سيتم منحه رتبه المخالفة`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`تم تحذير **${message.mentions.users.first().username}** من ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`لقد تم تحذيرك من قبل ادارة **${message.guild.name}** 
      **السبب** : ${reason}`)
      await message.channel.send(`تم تحذير **${message.mentions.users.first().username}**  بنجاح
       السبب : ${reason}`)
    }
    
  
  } 
}