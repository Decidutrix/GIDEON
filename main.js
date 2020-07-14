const Discord = require('discord.js');
const client = new Discord.Client();

// Command Prefix
const prefix = '!';

// This will notify when the bot is up

client.once('ready', () => {
    console.log('Hello my name is GIDEON');
});




// Command Line

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
        
    const args = message.content.slice(prefix.legnth).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
})















// Never put token in code
client.login('token');