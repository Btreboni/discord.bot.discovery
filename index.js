const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE4OTY5MzQwOTcyMzY3ODky.XXBaUw.7MYYVkP6UTm_XSdfU2Qju0uuocc';

const mood = [
    "A bit cranky right now.",
    "Happy, hit a 10 banger earlier",
    "Sad : (",
    "Really tired.",
    "Ready to party!",
];


//console ready
bot.on('ready', () => {
    console.log("Ready to roll sir.");
});

bot.on('message', msg => {
    if(msg.content === "$Hello"){
        msg.reply("Hello!");
    }
    if(msg.content === "$Mood"){
        let randomItem = mood[Math.floor(Math.random() * mood.length)];
        msg.reply(randomItem);
    }
});

bot.login(token);