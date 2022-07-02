module.exports.config = {
	name: "sendnoti",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Gửi tin nhắn tới các nhóm!",
  hide: true,
	commandCategory: "Hệ Thống",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi tin nhắn đến %1 nhóm",
		"sendFail": "Không thể gửi thông báo t��i %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}

module.exports.run = async ({ api, event, args, getText,Users }) => {
 const { threadID, senderID } = event;
const fs = global.nodemodule["fs-extra"];
  var name = (await Users.getData(senderID)).name;
if (!args[0]) return api.sendMessage("Bạn chưa nhập nội dung cần gửi",event.threadID,event.messageID);
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')

var getURL = await request.get(event.messageReply.attachments[0].url);

        var pathname = getURL.uri.pathname;

        var ext = pathname.substring(pathname.lastIndexOf(".") + 1);

        var path = __dirname + `/cache/snoti`+`.${ext}`;



var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];

	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body:`ㅤ »🌸 𝑨𝑫𝑴𝑰𝑵 𝑩𝑶𝑻 🌸«\n\n『 ${args.join(` `)} 』\n\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}`,attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage(`ㅤ »🌸 𝑨𝑫𝑴𝑰𝑵 𝑩𝑶𝑻 🌸«\n\n『 ${args.join(` `)} 』\n\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}`, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
}
