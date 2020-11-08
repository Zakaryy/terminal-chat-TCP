const net = require('net');
const sockets = [];
const whisper = '/^\/w\s([0-9]+)\s(.*)/'

const server = net.createServer(socket => {
    
    //ajouter une socket a la liste des sockets
    sockets.push(socket)

    // Server output
    console.log(sockets.indexOf(socket) + ' joined this chat.');

    // Welcome user to the socket
    socket.write("Welcome to telnet chat!\n\r\n\r");
    
    //client sending data
    socket.on('data', data =>{

        let message = data.toString();
        console.log(message);
        sockets.forEach(scket =>{
            if (socket !== scket){
                scket.write(data)
            }
        })
    })
})



// Listen for a port
server.listen(3000, function() {

	console.log("Server listening at http://localhost:3000");

});