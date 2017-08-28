var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var async = require('async');
//config
var config = require('./config');

// =============================
// UDP client ==================
// =============================
//UDP-Settings
var PORT = 64301; //64345;
var HOST = '192.168.0.116'; //'255.255.255.255';

// console.log(config.UDPHosts[0]);

server.bind(function () { server.setBroadcast(true) });
//server.bind();

var actuals = { sepp: "hugo" };

server.on('listening', () => {
    async.each(config.UDPHosts, function (host, callback) {
        // console.log('HOST: ' + host);
        server.send(JSON.stringify(actuals), PORT, host, (err) => {
            console.log("sending... to " + host);
        });
        callback();
    }, function (err) {
        if (err)
            console.log(err);
    });
});




