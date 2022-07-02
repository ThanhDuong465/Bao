module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100074886575388") {
    var aid = ["100004269364835"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Ủa con đĩ nào kêu admin vậy? sao không liên hệ qua fb : binee.doan hoặc zalo : 0364058681 , tag làm cái l gì jz tr, ultr cho m cái thiểu năng nè cdi loz :))"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }