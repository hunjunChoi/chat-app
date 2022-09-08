// require all necessary dependencies
// no import statement --> in node --> use "require"
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

// just run on 4000
// deployment --> server requires specific port --> inside of process.env.PORT
// to make correct for longer distance
const PORT = process.env.PORT || 4000;

// ./ --> where the file is based
// call as middleware
const router = require("./router");

/*
setup socket.io
not only run application  
find in socket.io documentation 
- search Node --> "Using with Node http server "
- go through documentation --> understand in depth of software using 
- want to see more --> used to do real-time analytic & instant messaging ...
socket.io --> do anything real-time 
real-time --> socket --> not http 
*/
const app = express();

// pass in app initialized from express
const server = http.createServer(app);

// instance of socket.io
// pass in server
/* basic run down to make socket.io server working  */
const io = socketio(server);

app.use(router);

// server running
// 1. port
// 2. call back function
server.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));

/* 
Next: create Router 
 simple router --> new component --> router.js
 */
