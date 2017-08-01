const http = require('http');
const Discord = require("discord.js");
const commands = require("./commands");


http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.send("The service is running\n");
}).listen(5000);

const client = new Discord.Client();


client.login('MzA3MjMxNzg4MzM2NDE0NzIw.DGBJeg.I52veNQPG3bkRw2JGWmS7LHR_2A');

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	commands(client, message);
});

