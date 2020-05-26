const {ADMIN_PREFIX} = require("../utils");
module.exports = {
    name: 'help',
    description: 'provides example usage given a command',
    parameters: ["command"],
    help: 'Example use: `'+ADMIN_PREFIX+'help addcommand`',
    permittedRoles: ["stuff", "Server admin", "developer"],
    execute: async (bot, message, params) => {
        const command = params.args[1];
        if(params.args.length < 2 || !bot.adminCommands.has(command)) {
            message.channel.send(module.exports.help);
            return
        }
        await message.channel.send(bot.adminCommands.get(command).help).catch(e => {
            console.error(e);
        });
    }
};