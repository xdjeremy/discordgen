require('dotenv').config();
const {
    CommandoClient
} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '.',
    owner: '744786024538046545'
});

client.registry
    // .registerDefaultTypes()
    .registerGroups([
        ['user', 'User Commands'],
    ])
    // .registerDefaultGroups()
    // .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Pizza');
});

client.on('error', console.error);

client.login(process.env.DISCORD_TOKEN);