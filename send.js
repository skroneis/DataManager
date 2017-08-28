var dgram = require('dgram');
var server = dgram.createSocket('udp4');

// =============================
// UDP client ==================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '255.255.255.255'; //'255.255.255.255';

const client = dgram.createSocket('udp4');
var actuals = {sepp: "hugo"};
client.send(JSON.stringify(actuals), PORT, '127.0.0.1', (err) => {
    console.log("sending...");
    client.close();
});