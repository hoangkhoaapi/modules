const fs = require("fs");
module.exports.config = {
name: "Ảo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảo Thật Đấy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ảo")==0 ||
     (event.body.indexOf("ảo")==0)) {
		var msg = {
				body: "djtme ảo ma canada",
				attachment: fs.createReadStream(__dirname + `/noprefix/ao.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}