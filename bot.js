const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
                               [ "https://discord.gg/9h88pY7" ] 
الدعووة خاصة لك ي قلبي ... [ ${دارين}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
                               [ رابط السيرفر ] 
الدعووة خاصة لك ي قلبي ... [ ${دارين}  ]
**`) 
}).catch(console.error)
})
client.login('NTE1NDE1MTU1ODExODExMzMx.DtkyPw.af7ct_wnPoOVAhUhpYW3Oq0iRe8');