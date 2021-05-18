const path = require("path"); //prebuiilt module with nodejs
//allows you to manage paths - helps combine different paths, access a specfic path, find specfic extension, file

const fileLocation = path.join(__dirname, "app.js");

console.log(fileLocation); // get the full path of file
console.log(`--------------------------`);
const fileName = path.basename(fileLocation); // get name of file
console.log(fileName);
console.log(`--------------------------`);
const fileExt = path.extname(fileName); // get the file extension
console.log(fileExt);
