let net = require('net');
let ip = '192.168.244.233';
let port = 5000;

let client = new net.Socket();
client.connect(port, ip, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	let time = new Date();

	console.log(time.toLocaleTimeString() + " " + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});