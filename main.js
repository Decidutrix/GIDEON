const Discord = require('discord.js');
const client = new Discord.Client();



// This will notify when the bot is up

client.once('ready', () => {
    console.log('Hello my name is GIDEON')
});



// Never put token in code
client.login('token goes here');