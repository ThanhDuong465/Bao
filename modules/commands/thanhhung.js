const fs = require("fs");
module.exports.config = {
	name: "ttyca",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "ttyca",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("thay tôi yêu cô ấy")==0 || (event.body.indexOf("Thay tôi yêu cô ấy")==0)) {
		var msg = {
				body: "Nhạc đây",
				attachment: fs.createReadStream(__dirname + `/noprefix/ttyca.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}