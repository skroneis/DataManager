var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// =============================
// UDP client ==================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '192.168.0.116'; //'255.255.255.255';

server.bind( function() {server.setBroadcast(true)});
//server.bind();

var actuals = {sepp: "hugo"};
server.send(JSON.stringify(actuals), PORT, HOST, (err) => {
    console.log("sending...");
    server.close();
});

