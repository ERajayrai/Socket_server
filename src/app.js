


 const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    //console.log(client);
  client.emit('message',"hellow world");
  client.on('message', data => { console.log( data);
	client.emit('message',"hellow world");
  });
  client.on('disconnect', () => {  }); 
});
server.listen(3000);




