require('dotenv').config();


const { Client, MessageReaction } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});

client.on('ready', () => {
    console.log(`${client.user.username} has logged in to the server!`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.author.id !== 'enter your id') return;
    if (message.content === "-addranks"){
        message.channel.send('What Rank Are You?\nenter reaction Silver Ranks\nenter reaction Gold Nova Ranks\nenter reaction Master Guardian Ranks\nenter reaction Legendary Eagle Ranks\nenter reaction Supreme Ranks\nenter reaction Global Ranks\nReact below!').then(function(message) {
            message.react('enter reaction');
            message.react('enter reaction');
            message.react('enter reaction');
            message.react('enter reaction');
            message.react('enter reaction');
            message.react('enter reaction');

            client.on('messageReactionAdd', (reaction, user) => {
                if (user.bot) return;
                const { name } = reaction.emoji;
                const member = reaction.message.guild.members.cache.get(user.id);
                if(member.roles.cache.has('enter reaction') || member.roles.cache.has('enter reaction') || member.roles.cache.has('enter reaction') || member.roles.cache.has('enter reaction')
                || member.roles.cache.has('enter reaction') || member.roles.cache.has('enter reaction')
                ){
                    message.channel.send(`${user.username} already has a rank!`).then(msg => {
                        msg.delete({ timeout: 10000 });
                    });
                }
                else {
                    switch (name) {
                    case 'Silver':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Silver role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Gold':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Gold Nova role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Guardian':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Master Guardian role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'LegendaryEagle':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Legendary Eagle role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Supreme':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Supreme role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Global':
                        member.roles.add('Enter Roll');
                        message.channel.send(`${user.username} has been put into Global role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    }
                }
            });


            client.on('messageReactionRemove', (reaction, user) => {
                if (user.bot) return;
                const { name } = reaction.emoji;
                const member = reaction.message.guild.members.cache.get(user.id);
                    switch (name) {
                    case 'Silver':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Silver role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Gold':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Gold Nova role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Guardian':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Master Guardian role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'LegendaryEagle':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Legeendary Eagle role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    case 'Supreme':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Supreme role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    
                    case 'Global':
                        member.roles.remove('Enter Roll');
                        message.channel.send(`${user.username} has been removed from Global role`).then(msg => {
                            msg.delete({ timeout: 10000 });
                        });
                        break;
                    }
            });
        });
    }
});





client.login(process.env.DISCORDJS_BOT_TOKEN);