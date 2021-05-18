// (function(exports, require, module, ___filename,___dirname)) {
// }

//^everything in Node gets wrapped inside the above

const getUserInfo = require("./sayName"); // imports using require

console.log(getUserInfo);

console.log(`--------------------------`);

getUserInfo.sayName();
console.log(`You reside in: `) + getUserInfo.sayAddress();

console.log(`--------------------------`);
console.log(`File Path: ${__dirname}`);
console.log(`Filename: ${__filename}`);

console.log(`--------------------------`);
