require('dotenv').config();
const p = require('phin')
const {
    Command
} = require('discord.js-commando');
module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gen',
            group: 'user',
            memberName: 'gen',
            description: 'Claim account.'
        });
    }

    run(message) {
        async function gen() {
            const res = await p({
                'url': 'https://alts.pizza/ajax/discord-gen/gen?discord_id=' + message.author.id + '&secret=' + process.env.GEN_SECRET,
                'parse': 'json'
            })
            if (!res.body.success) {
                return message.reply(res.body.msg);
            }

            //give account
            message.reply('Check your dm for the information.');

            await message.author.send({embed: {
                    "title": "Account information",
                    "color": 1127848,
                    "fields": [
                        {
                            "name": "U",
                            "value": res.body.user
                        },
                        {
                            "name": "P",
                            "value": res.body.pass
                        }
                    ]
                }
            })

            return ;
        }

        gen();
    }
};