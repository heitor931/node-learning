import { createConnection } from 'net';

const client = createConnection({ port: 4000 }, () => {
  console.log('Connected to server');
  client.write('Hello server!');
});

client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
