const io = require("socket.io")(3000);

io.on("connection", socket => {
  // either with send()
 // socket.send("Hello!");
  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
    io.emit("message",data);
  });

});
