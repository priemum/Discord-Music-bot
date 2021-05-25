const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: (message, args) => {
    const data = [];
    const { commands } = message.client;
    if (!args.length) {
      
      
          const helpEmbed = new MessageEmbed()
          .setColor('RANDOM')
          .setAuthor(` | HELP MENU`, message.author.displayAvatarURL({ dynamic: true }))
          .addField(`** ❯ MUSIC [8]**`,"`play`,`pause`,`resume`,`stop`,`queue`,`np`,`skip`,`volume`")
          .addField(`** ❯ FILTERS [3]**`,"`bb`,`repeat`,`seek`")
          .addField(`** ❯ MISC [3]**`,"`invite`,`uptime`,`ping`")
         
        
          
      return message.channel.send(helpEmbed)
         ;
}}};
