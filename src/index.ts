import * as http from 'http';
import * as debug from 'debug';

import Server from './boot/Server';

debug('ts-express:server');

const PORT = process.env.PORT || 3000;
Server.set('port', PORT);

const server = http.createServer(Server);
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof PORT === 'string') ? 'Pipe ' + PORT : 'Port ' + PORT;
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
  debug(`Listening on ${bind}`);
}