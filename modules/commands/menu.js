module.exports.config = {
	name: "menu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team & Update by DuyVuong",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`👻👻👻🔔 ${command.config.name} 👻👻🔔\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	
	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
        group.forEach(commandGroup => msg += `👻👻🔔 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 👻👻🔔\n${commandGroup.cmds.join(', ')}\n\n`);
		return api.sendMessage(msg + `⇨ ◕ ‿ ◕𝕊𝕦̛̉ 𝕕𝕦̣𝕟𝕘: "${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}𝖍𝖊𝖑𝖕 𝖙𝖚̛̀𝖓𝖌 𝖑𝖊̣̂𝖓𝖍 𝖔̛̉ 𝖙𝖗𝖊̂𝖓" 𝖉𝖊̂̉ 𝖝𝖊𝖒 𝖈𝖍𝖎 𝖙𝖎𝖊̂́𝖙 𝖈𝖆́𝖈𝖍 𝖘𝖚̛̉ 𝖉𝖚̣𝖓𝖌! | 𝕳𝖎𝖊̣̂𝖓 𝖙𝖆̣𝖎 𝖉𝖆𝖓𝖌 𝖈𝖔́ ${commands.size} 𝖑𝖊̣̂𝖓𝖍 𝖈𝖔́ 𝖙𝖍𝖊̂̉ 𝖘𝖚̛̉ 𝖉𝖚̣𝖓𝖌 𝖙𝖗𝖊̂𝖓 𝖇𝖔𝖙 𝖓𝖆̀𝖞 ⇦\n🌀𝕾𝖆𝖚 𝟞𝟘 𝖌𝖎𝖆̂𝖞 𝖍𝖊𝖑𝖕 𝖙𝖚̛̣ 𝖉𝖔̣̂𝖓𝖌 𝖌𝖔̛̃ !`, threadID, (err, info) => setTimeout(() => api.unsendMessage(info.messageID), 60000),messageID);

	}

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`👻👻🔔 ${command.config.name} 👻👻🔔\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}