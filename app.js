'use strict';

let uuidv4= require('uuid/v4');
let express = require('express');
let helmet = require('helmet');
let app = express();
app.use(helmet());
let serv = require('http').Server(app);
let io = require('socket.io')(serv, {});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(8080);
console.log('Server started.')

let SOCKET_LIST = {};

io.sockets.on('connection', socket => {
	console.log('socket connection')
	socket.id = uuidv4();
	SOCKET_LIST[socket.id] = socket;

	socket.on('disconnect', () => {
		delete SOCKET_LIST[socket.id];
	})
});


function tick() {
	//to-do fill
}

let fps = 30
setInterval(tick, 1000/fps)