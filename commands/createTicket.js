module.exports.run = (bot, message, args, Discord) => {
let num = Math.floor(Math.random() * 9999);
//RNG
let em = new Discord.RichEmbed()
.setTitle("Ticket Created!")
.setDescription("Staff will anwser as soon as they can!")
.addField("Your ticket number is:", num)

 message.guild.createChannel(`ticket-${num}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Staff");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
 });
message.channel.send({embed: em})
  
}
module.exports.help = {
"name": "new"
}
