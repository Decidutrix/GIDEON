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

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'twitter'){
        message.channel.send('https://twitter.com/CodingGengar');
    } else if (command == 'meep'){
        message.channel.send('MEEP MY BOIZ MMMMMMEEEEEEEEEPPPPPPP')
    } else if (command == 'gideon'){
        message.channel.send('Hello, I am GIDEON the main bot in this server please use -!help to see what I can do');
    }
})















// Never put token in code
client.login('token');