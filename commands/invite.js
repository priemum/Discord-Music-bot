const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../config.json").prefix;

module.exports = {
  name: "invite",
  aliases : ['invite','inv'],
  description: "invite link",
  run: (message, args) => {
    const data = [];
    const { commands } = message.client;
    if (!args.length) {
      
      
          const inviteEmbed = new MessageEmbed()
          .setColor('RANDOM')
          
          .setDescription(`[**INVITE ME**](https://discord.gg/gzamkgseKH)`,true)

      return message.channel.send(inviteEmbed)
         ;
}}};
