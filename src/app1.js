let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

io.connect('http://localhost:3000');
io.emi('message',"data test");
