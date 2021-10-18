console.log ("CODED BY MSV")

const { Client, Collection, DiscordAPIError, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { Manager } = require("erela.js");              
const config = require('./config.json');
const Spotify  = require("erela.js-spotify");

const client = new Client();
client.commands = new Collection();

const clientID = config.clientID; 
const clientSecret = config.clientSecret;
const token = config.token;
const prefix = config.prefix;

const files = readdirSync(`./commands/`)
  .filter(file => file.endsWith(".js"));

for (const file of files) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.manager = new Manager({
	plugins: [
		
		new Spotify({
		  clientID,
		  clientSecret
		})
	  ],
  nodes: [{
    host: config.host,
	port: config.port,
	password: config.password,
    retryDelay: 5000,
  }],
  autoPlay: true,
  send: (id, payload) => {
    const guild = client.guilds.cache.get(id);
    if (guild) guild.shard.send(payload);
  }
})
  .on("nodeConnect", node => console.log(`Node "${node.options.identifier}" has connected.`))
  .on("nodeError", (node, error) => console.log(
    `Node "${node.options.identifier}" encountered an error: ${error.message}.`
  ))
  .on("trackStart", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(` | NOW PLAYING`, client.user.displayAvatarURL({
      dynamic: true
    }))
    .setDescription(`[${track.title}](${track.uri})`)
    .addField(`Requested By : `,`${track.requester}` , true)
  
    channel.send(embed);
  })
  .on("trackStuck", (player, track) => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Track Stuck:`, client.user.displayAvatarURL({
      dynamic: true
    }))
    .setDescription(`${track.title}`)
   
    channel.send(embed);
  })
  .on("queueEnd", player => {
    const channel = client.channels.cache.get(player.textChannel);
    const embed2 = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`Queue has ended`, client.user.displayAvatarURL({
      dynamic: true
    }))
 
    channel.send(embed2);
    player.destroy();
  });

client.once("ready", () => {
  client.manager.init(client.user.id);
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('MSV 😁', { type: 'WATCHING' });
});

client.on("raw", d => client.manager.updateVoiceState(d));

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || !message.guild || message.author.bot) return;
  const [name, ...args] = message.content.slice(1).split(/\s+/g);

  const command = client.commands.get(name) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));
  if (!command) return;

  try {
    command.run(message, args);
  } catch (err) {
    message.reply(`an error occurred while running the command: ${err.message}`);
  }
});
const express = require("express");
const app = express();

const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/dreams", (request, response) => {
  response.json(dreams);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


client.login(token);
