var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// =============================
// UDP client ==================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '255.255.255.255'; //'255.255.255.255';

server.bind( function() {server.setBroadcast(true)});

var actuals = {sepp: "hugo"};
server.send(JSON.stringify(actuals), PORT, '127.0.0.1', (err) => {
    console.log("sending...");
    server.close();
});

