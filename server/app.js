/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);
app.set('server', server);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});

require('./config/socketio').default(socketio);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
