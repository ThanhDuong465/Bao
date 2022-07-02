module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT Của Jack Gaming " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂
⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷
𝑩𝒐𝒕 𝒃𝒚 Jack Gaming
●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●
▷ 𝑅𝑈𝐿𝐸 𝐵𝑜𝑡 ◁
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑠𝑝𝑎𝑚
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑐ℎ𝑢̛̉𝑖 𝑏𝑜𝑡
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑘𝑖𝑐𝑘 𝑏𝑜𝑡
⏩ 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝𝑎𝑚 🔞+.....
●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ % ] ❫･━━❜
📲𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏:https://www.facebook.com/Jack.Gaming.2456
© Binee 𝟐𝟎𝟐𝟏
⚠️ 𝐃𝐨 𝐧𝐨𝐭 𝐫𝐞𝐮𝐩 ❗
 𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒 𝕓𝕠𝕥 𝕠𝕡𝕖𝕣𝕒𝕥𝕖𝕕 𝕓𝕪 𝕒𝕕𝕞𝕚𝕟 𝔹𝕦𝕚 ℚ𝕦𝕒𝕟𝕘 𝔻𝕠𝕒𝕟. ℍ𝕒𝕧𝕖 𝕒 𝕟𝕚𝕔𝕖 𝕕𝕒𝕪 !`, threadID);
	}
	else {
    
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`chao.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			 
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "⚡️ᴀɴʜ ᴇᴍ ʀᴀ đóɴ ᴛʜàɴʜ ᴠɪêɴ ᴍớɪ ɴè, đâʏ ʟà {name}⚡️\n\n⚡️ 𝟷 ʜảᴏ ʜáɴ đã ʙướᴄ ᴠàᴏ {threadName}⚡️\n\n⚡️{name} , {type} ʟà ᴠị ʜảᴏ ʜáɴ ᴛʜứ {soThanhVien} ᴠᴜɪ ʟòɴɢ đọᴄ ɴʜữɴɢ đɪềᴜ ʟệɴʜ sᴀᴜ đâʏ ɴʜé : \n✪Dùng lệnh !setname (tên cần đổi)\n✪Giới thiệu họ tên ,năm sinh, nơi ở.\n ✪ Từ giờ bạn sẽ là 1 vị huynh đài ở đây! " : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}