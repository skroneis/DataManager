var dgram = require('dgram');
var client = dgram.createSocket('udp4');

// =============================
// UDP listener ================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '0.0.0.0'; //'255.255.255.255';
// UDP
client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
});

client.on('message', function (message, remote) {
    console.log("message...");
    var msg = JSON.parse(message);
    console.log(msg.sepp);
});

client.on('error', (err) => {
    console.log(`client error:\n${err.stack}`);
    client.close();
});

client.bind(PORT, HOST);
