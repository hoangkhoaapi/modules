module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "Alo bạn ơi" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Có người cần gặp bạn nè" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Dậy đi lợn ơi" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "Bạn ơi dậy đi nào" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "Sáng rồi kìa dậy rep tn đi" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "Bé ơi dậy đi " + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "Dậy dậy dậy x3.14" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "Seen tn giúp tui với tr ơi" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "Hiện hồn đi cho 50 tỷ nè" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "Rửa mặt cho tỉnh đi bạn ơi " + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "Tỉnh táo lên r rep tn nè" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "Tỉnh rồi thì ra cho mọi ng xem mặt nha" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "Ahihi nhìn mặt nó ngu như 1 con lợn kìa" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "Pò gọi nó ra rồi đó.." + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "Mọi ng làm gì với thằng này tùy nha" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "Mốt nhớ tắt hẳn thông báo mess nha , không thì nó gọi hồn nữa đấy" + " " + name, mentions: arraytag})} , 64000);
    }