const Discord = require('discord.js');
const client = new Discord.Client();

// Command Prefix
const prefix = '!';

// This will notify when the bot is up

client.once('ready', () => {
    console.log('GIDEON is now online! :)');
});




// Command Line

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'gideon'){
        message.channel.send('Hello, I am **GIDEON**! Im the main bot in this server. These are the commands I can do: \n'  
        + '`!twitter`  |  `!meep`  |  `!gideon` \n\n'
        + '`!twitch`');
    } else if (command == 'twitter'){
        message.channel.send('[Twitter](https://twitter.com/CodingGengar)');
    } else if (command == 'meep'){
        message.channel.send('MEEP MY BOIZ MMMMMMEEEEEEEEEPPPPPPP')
    } else if (command == 'twitch'){
        message.channel.send('[Twitch](https://www.twitch.tv/parzavltv)');
    } else if (command == 'thiccgod'){
        message.channel.send('I AM THICC GOD!!! PRAISE ME!!!!');
    } else if (command == 'rank'){
        message.channel.send('here are the ranks for @Parzavl: \n'
        +'| **Valorant**  -  | *Bronze 2* | \n' 
        +'| **Overwatch**  -  | *TANK - 1916* | | *DPS - NR* | | *SUPPORT - NR* |  \n' 
        +'| **League of Legends**  -  | *Bronze 2* | \n' 
        +'| **Dead by Daylight**  -  | *Surviver - 12* | | *Killer - 13* | |')
    }
})


// Added the Twitch API notif through IFTTT
//(Twitch API GOES HERE)













// Make sure token doesn't regenerate
// Never put token in code
client.login('DISCORD BOT TOKEN HERE');