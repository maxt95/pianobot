const Discord = require('discord.js');

function commands(client, message) {

	let prefix = ",";
	if (message.author !== client.user) return;

	if(!message.content.startsWith(prefix)) return;

	const params = message.content.split(" ").slice(1); //chops off the starting command

	const introductions = client.channels.get("280313739235033088").toString();
	const assignRoles = client.channels.get("289902600701345792").toString();

	let mentionedUser = "Newby";
	mentionedUser.username = "unknown";

	if(message.mentions.users.first()) {
		mentionedUser = message.mentions.users.first();
	}

	function welcome() {

		message.delete();

		message.channel.send(`Hey ${mentionedUser}, welcome! Once you are done reading the rules feel free to post an intro in ${introductions} to tell us about yourself!`);
		console.log(`User "${mentionedUser.username}" was welcomed.`);
	}

	function reset() {
        message.delete();

        // Posts the channel reset message in the channel the message was found in
        message.channel.send(`\`\`\`The previous roleplay is finished, or has expired (6+ hours). This post marks the beginning of a new one.\nThe first post after this gets to set the foundation. Anyone who wishes to join in should read through the ongoing roleplay before doing so.\`\`\``);
        console.log(`Channel "${message.channel.name}" was reset.`);
    }

    function approve() {
    	message.delete();

    	message.channel.send(`You've been approved ${mentionedUser}! Feel free to head on over to ${assignRoles} and learn more about the channels and assign those you want to see!`)
    }


    if(message.content.startsWith(prefix + "w")) {
    	welcome();
    }
    else if(message.content.startsWith(prefix + "r")) {
    	reset();
    }
    else if(message.content.startsWith(prefix + "a")) {
    	approve();
    }
    else{
    	message.delete();

    }

    
}
module.exports = commands;