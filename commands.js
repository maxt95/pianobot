const Discord = require('discord.js');

function commands(client, message, guilds) {

    

	let prefix = ",";
	//if (message.author !== client.user) return;

	if(!message.content.startsWith(prefix)) {


        // Variables to check the message
        const w = "WWW";
        const com = "COM";
        const http = "HTTP";
        const https = "HTTPS";

        //split the message up based on a space and put into an array
        const msgArray = message.content.split(" ");

        //check the channel first
        if(message.channel.id == ("CHANNEL CODE CHANGE ME")) {
            for(i = 0; i < msgArray.length; i++) {                                      // loop through the array
                var index = msgArray[i].toUpperCase();                                  // convert the strings to uppercase
                if(index.indexOf(w+".") !== -1  && index.indexOf("."+com) !== -1) {     // checks to see if the word contains www. and .com

                    message.delete();
                }
                if(index.indexOf(http) !== -1 || index.indexOf(https) !== -1){          // checks to see if word contains http or https
                    if(index.indexOf(w+".") || index.indexOf("."+com)){                 // checks to see if it contains www. or .com
                        message.delete();
                    }
                }
                //console.log(msgArray[i] + "\n");
            }
        }
        


        const tmp = "";
        const testChannel = client.channels.get("322096102796951552").toString();
        if(message.channel.id != ("322096102796951552")){
            //message.delete();
            //tmp = message.content.toString();
            //console.log(tmp);
           

            const picture = message.attachments;
            const logChannel = client.channels.get("342436735147311105");

            message.attachments.forEach(function(col, msg) {
                console.log(col.url);
                logChannel.send("User: " + col.client.user + "\n" + "Message: " + message.content + "\n" + "Channel: " + message.channel + "\n" + col.url);
            })
            //logChannel.send(picture);
            //console.log(picture);
            //if(picture != null){
                //console.log("picture!");
                //logChannel.send(message.attachments);
            //}
            //console.log(message.content); undo this
        }
        else {

        }

    }
    else {
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

    function nick() {
        message.delete();



    }
    function bans() {

       guilds.forEach(function(g) {
        if(g.id == "279584314856046592"){
            const banlist = g.fetchBans().then(function(bannedUsers) {
                bannedUsers.forEach(function(bannedUser) {
                    //console.log(bannedUser);
                });
            });

            const logs = g.fetchAuditLogs({ type: 22 /* MEMBER_BAN_ADD */ }).then(logs => {
                // GuildAuditLogsEntry for this user and type
                console.log(logs.entries.find('target', client));
            });


        }
        
       })
        
        
        
        
        message.delete();
    }

    var dict = new Array();

    

    function words() {
        guilds.forEach(function(g) {
            if(g.id == "279584314856046592") { //322096102796951552
                const channels = g.channels;
                //console.log(g.channels.messages);

                channels.forEach(function(c) {
                    if(c.id == "279584314856046592") { //322096102796951552
                        wordHelper(c);
                        
                        //console.log(msgArray.messages);
                        
                        //console.log(c.messages);
                    }
                    //console.log(dict["test"]);
                });

                
            }
        });
        
        message.delete();
    }
    

    var chId;
    var totalArray = [];
    var freqMap = {};
    var keysSorted = [];
    function wordHelper(c) {
            //chId = c.lastMessageID;
            c.fetchMessages({limit: 100, before: chId}).then(messages => {
                //console.log(".");
                messages.forEach(function(msga) {

                    //console.log(msga.content);
                    const wds = msga.content.replace(/[.]|[,]|["]|[:]|[*]/g,'').split(/\s/);

                    //console.log(tmpword);
                    wds.forEach(function(count) {
                        if( !freqMap[count]) {
                            freqMap[count] = 0;
                        }
                        freqMap[count] += 1;
                    });
                    
                    chId = msga.id;
                });
                if(messages.size != 0) {
                    wordHelper(c);
                   
                }
                else {
                    for(var word in freqMap) {
                keysSorted.push([word, freqMap[word]]);
            }

            keysSorted.sort(function(a, b) {
                return b[1] - a[1];
            });

            console.log(keysSorted);
                    
                    
                }
                
            }).catch(console.error);


            //keysSorted = Object.keys(freqMap).sort(function(a,b){return freqMap[a] - freqMap[b]})
            //console.log(keysSorted);
    }
    







    if(message.content.startsWith(prefix + "welcome")) {
       welcome();
    }
    else if(message.content.startsWith(prefix + "r")) {
        reset();
    }
    else if(message.content.startsWith(prefix + "a")) {
        approve();
    }
    else if(message.content.startsWith(prefix + "nick")) {
        nick();
    }
    else if(message.content.startsWith(prefix + "guilds")) {
        bans();
    }
    else if(message.content.startsWith(prefix + "words")) {
        words();
    }
    else{
        message.delete();

    }
    }

	

    
}
module.exports = commands;