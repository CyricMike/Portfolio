var express = require('express')();
var server = require('http').Server(express);
var io = require('socket.io')(server, {cors: {
    origin: '*',
  }
});
// var io = require("socket.io")(server, {
//   handlePreflightRequest: (req, res) => {
//     const headers = {
//       "Access-Control-Allow-Headers": "Content-Type, Authorization",
//       "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
//       "Access-Control-Allow-Credentials": true
//     };
//     res.writeHead(200, headers);
//     res.end();
//   }
// });

io.on('connection',  (socket) => {
//   console.log("connected ka");
  var socketId = socket.id;
  var clientIp = socket.request.connection.remoteAddress;

  console.log("User IP" ,clientIp);

  socket.on('get_new_request',  (data) => {
    console.log(data , 'Reload_Table')
    io.emit('Reload_Table', data)
  })

});

server.listen(6969, ()=> {
    console.log('socket.io server listen at 6969');
  });
  
  