const fs = require("fs");
module.exports.config = {
	name: "sieunhancp",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "sieunhancp",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("siêu nhân cuồng phong")==0 || (event.body.indexOf("Siêu nhân cuồng phong")==0)) {
		var msg = {
				body: "Tèn ten ten",
				attachment: fs.createReadStream(__dirname + `/noprefix/sncp.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}