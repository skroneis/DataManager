var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// =============================
// UDP listener ================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '255.255.255.255'; //'255.255.255.255';
// UDP
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log("message...");
    var msg = JSON.parse(message);
    console.log(msg.sepp);
});

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});


server.bind(PORT, function() { server.setBroadcast(true) });