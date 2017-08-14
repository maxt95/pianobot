const http = require('http');
const Discord = require("discord.js");
const commands = require("./commands");
const nicknamelog = require("./nicknamelog");

http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.send("The service is running\n");
}).listen(process.env.PORT || 5000);

const client = new Discord.Client();
const guild = client.guilds

client.login('MzA3MjMxNzg4MzM2NDE0NzIw.DGBJeg.I52veNQPG3bkRw2JGWmS7LHR_2A');

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	commands(client, message, guild);
});

client.on('guildMemberUpdate', (oldmember, newmember) => {
	console.log(`User: "${oldmember.nickname}" has changed their username to "${newmember.nickname}" and userid: "${oldmember.id}"`);
	nicknamelog(oldmember, newmember);
});

