const fs = require("fs");
//fs stands for file system

// fs.writeFile("message.txt", "Hello there node", (err) => {
//   // 3 arguements: name of file, value, call back function

//   if (err) throw err;

//   console.log("File has been written");
// });

console.log("hello");

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
