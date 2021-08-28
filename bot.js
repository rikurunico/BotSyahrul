const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

if(process.env.NODE_ENVIRONMENT!='production'){
    require('dotenv').config()
}

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }

  if (msg.content === 'syahrul') {
    msg.channel.send('Ketua Kelas Idaman');
  }

});

client.login(process.env.token);