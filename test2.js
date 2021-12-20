// (A) LOAD ENCRYPT LIBRARY
const CryptoJS = require("crypto-js");

// (B) SECRET KEY
var key = md5("!{chatroom}=");

// (C) ENCRYPT
var cipher = CryptoJS.AES.encrypt("PASSWORD", key);
cipher = cipher.toString();
console.log(cipher);

// (D) DECRYPT
var decipher = CryptoJS.AES.decrypt(cipher, key);
decipher = decipher.toString(CryptoJS.enc.Utf8);
console.log(decipher);
