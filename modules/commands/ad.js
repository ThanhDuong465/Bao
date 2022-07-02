module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Thông Tin Admin Bot Này★\nADMIN NAME :Huy Bảo\nBiệt Danh: Jack gaming\nI Have Something To You\nI Love You\nChiều cao : 1m70\nSinh ngày : 09/01/2007\nLiên hệ:+0338307827\nSở Thích: Lúc buồn lúc vui\nCân nặng: 71kg\\nName ID :   \nLink Facebook : https://www.facebook.com/Jack.Gaming.2456 \nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Hidden ===`, event.threadID, event.messageID);