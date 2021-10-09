
const fs = require("fs");
module.exports.config = {
name: "yêu em",
version: "1.0.1",
hasPermssion: 0,
credits: "tân",
description: "yêu em",
commandCategory: "Không cần dấu lệnh",
usages: "noprefix",
cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
var { threadID, messageID } = event;
if (event.body.indexOf("yêu êm")==0 || (event.body.indexOf("Yêu em")==0)) {
var msg = {
body: "moaa moaa",
attachment: fs.createReadStream(__dirname + `/cache/yêuem.mp4`)
}
return api.sendMessage(msg, threadID, messageID);
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}  