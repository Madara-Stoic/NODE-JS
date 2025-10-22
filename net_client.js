const net = require('net');

const PORT_TO_USE = 50303; // <<< CHANGE THIS TO MATCH THE PORT THE SERVER LISTENS ON!

const client = net.connect({ port: PORT_TO_USE }, () => {
    console.log('Connected to server!');
    client.write('World!\r\n');
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('Disconnected from Server');
});