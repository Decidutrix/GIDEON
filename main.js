const Discord = require('discord.js');
const client = new Discord.Client();

// Command Prefix
const prefix = '!';


// This will notify when the bot is up

client.once('ready', () => {
    console.log('Hello my name is GIDEON');
});



// Command Line

client.on('message' , message => {
    if (msg.content === '!meep') {
        msg.reply('MEEP MY BOIZ MMMMMMMEEEEEEEEEPPPPPP!!!');
    }
})
















// Never put token in code
client.login('token here');