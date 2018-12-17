var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('newMessage', function(message){
    console.log(message);
})

socket.on('createResponse', function(message) {
    console.log('Receive Response', message);
});

socket.on('disconnect', function() {
    console.log('Disconected from server');
});

socket.emit('createRequest', {
    from: "Anne",
    text: "Hello"
}, function (data){
    console.log("That's all.", data);
})