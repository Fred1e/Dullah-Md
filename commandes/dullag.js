"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🤖Bot is online*🤖 🙏 \n\n ' + "DULLAH✌️MD 💥 respond speed is 30000000009 m/s ";
    let d = '                                                                         add more status✌️';
    let varmess = z + d;
    var mp4 = 'https://files.catbox.moe/jq3oin.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
