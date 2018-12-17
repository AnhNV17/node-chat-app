const path = require('path');
const http = require('http');
const {generateMessage} = require('./uitls/message')
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

//listen to the connection
io.on('connection', (socket) => {
    console.log('New user connected');

    //socket.emit from Adim text Welcome to chat app
    socket.emit('newMessage', generateMessage('The server', 'Welcome to the chat app'));

    //socket.broadcast.emit form Admin to text New user joined
    socket.broadcast.emit('newMessage', generateMessage('The server', 'A new user joined'));


    socket.on('createRequest', (message, callback) => {
        console.log('Get a request', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
        // socket.broadcast.emit('createResponse', {
        //     from: message.form,
        //     text: message.text, 
        //     sentTime: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


server.listen(port, ()=> {
    console.log('Server is running on port ' +port);
})
