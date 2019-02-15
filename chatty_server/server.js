// server.js

const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');
const SocketServer = WebSocket.Server;

let connect = 0;
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function(client) {
    //if (client.readyState === WebSocket.READY) {
      client.send(data);
    //}
  });
};


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {

  console.log('Client connected');
  let numberOfclients = {
    clientsNumber: wss.clients.size,
    type: "incomingUsers"
  };
  //When the client connects immediatetly broadcast the number of users to all the clients.

  wss.broadcast(JSON.stringify(numberOfclients));
  ws.on("message", function incoming(data) {

    const msg = JSON.parse(data)
    if(msg.type === "postMessage"){
      msg.type = "incomingMessage";
    } else if (msg.type === "postNotification"){
      msg.type = "incomingNotification";
    }

    msg.id = uuidv1();
    console.log("This is msg", msg);
    wss.broadcast(JSON.stringify(msg));
  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    connect -= 1;
    wss.broadcast(connect);
    }
  );
});