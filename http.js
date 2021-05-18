const http = require("http");
// the http module allows you to create a server

const server = http.createServer((req, res) => {
  //takes a call back param

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Usmans Node Learning Website </h1>");
    res.end;
  }

  if (req.url === "/secretpage") {
    res.write("ello");
    res.end;
  }
});

server.listen(3000, () => console.log("Server is up and running"));
