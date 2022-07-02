module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "Mirai Team",
    description: "Thông báo bot hoặc người rời khỏi nhóm",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};


module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
   	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
    const { join } = global.nodemodule["path"];
    const { threadID, senderID } = event;
    ////////////////////////////////////////////////////////
    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["leaveNoti"] != "undefined" && thread["leaveNoti"] == false) return;
    ///////////////////////////////////////////////////////
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên kick";
const path = join(__dirname, "cache", "leaveNoti");
    const pathRandom = readdirSync(join(__dirname, "cache", "leaveNoti"));
    /// random 
    var randomNoti = `${pathRandom[Math.floor(Math.random() * pathRandom.length)]}`;
    /// end
    //if (senderID == api.getCurrentUserID()) return; /////// kich bằng bot ko báo
    //console.log(randomNoti)
    const leavePath = join(path, randomNoti);
    var msg, formPush;
     
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    (typeof data.customLeave == "undefined") ? msg = "➴ {name}. \n➴ Đã {type} khỏi nhóm vào {time}\n➴ Ngày rời: {fullYear}": msg = data.customLeave;
   msg = msg
	.replace(/\{name}/g, name)
	.replace(/\{type}/g, type)
    .replace(/\{time}/g, session)
   .replace(/\{fullYear}/g, fullYear);
//  if (existsSync(leavePath)) formPush = { body: msg, attachment: createReadStream(leavePath) }
//     else formPush = { body: msg }
    formPush = { body: msg }

    return api.sendMessage(formPush, threadID);
}