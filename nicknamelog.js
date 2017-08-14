const Discord = require('discord.js');
var arry = [];

function nicknamelog(oldMember, newMember){

	console.log(`UserID: "${oldMember.id}" \n Previous Nickname: "${oldMember.nickname}" \n New Nickname: "${newMember.nickname}"`);

	
	arry.push(["${oldMember.id}","${newMember.nickname}"])
}
module.exports = nicknamelog;