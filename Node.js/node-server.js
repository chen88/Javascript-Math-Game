/**Following Socket.IO instruction to create a connection**/
var app = require("http").createServer(handler),
  io = require("socket.io").listen(app),
  fs = require("fs");

function handler(request, response) {
  fs.readFile(__dirname + "/index.html");
  function execution(error, data) {
    if (error) {
      response.writeHead(500);
      return response.end("Error Loading index.html");
    }
  }
}

io.sockets.on("connection", function (socket) {
  "use strict";
  socket.emit("event1", {
    hello: "world"
  });
  socket.on("event2", function (data) {
    console.log(data);
  });
});