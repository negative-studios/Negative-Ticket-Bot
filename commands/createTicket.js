module.exports.run = (bot, message, args, Discord) => {
let num = Math.floor(Math.random() * 9999);
let tr = args.join(" ")
//RNG
let em = new Discord.RichEmbed()
.setTitle("Ticket Created!")
.setDescription("Staff will anwser as soon as they can!")
.addField("Your ticket number is:", num)
.setColor("GREEN")
.setFooter(`Requested by: ${message.author.username}`)

let emb = new Discord.RichEmbed()
.setTitle("Hello! Our staff will be with you shortly!")
.setDescription("If this is a order feel free to ping Negative or Geek Squad :D")
.addField("The reason for this ticket is: ", tr)
.setColor("GREEN")
.setFooter(`Requested by: ${message.author.username}`)

 message.guild.createChannel(`ticket-${num}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Ticket Access");
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
    c.send({embed:emb})
 });
message.channel.send({embed: em})
}
module.exports.help = {
"name": "new"
}
