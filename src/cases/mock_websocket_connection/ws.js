const WebSocket = require("ws");

const wsServer = new WebSocket.WebSocketServer({ port: "8080" });

wsServer.on("connection", (ws) => {
  console.log(`New connection ${new Date()}`);

  ws.on("message", (action) => {
    const { type, payload } = JSON.parse(action);

    switch (type) {
      case "message": {
        wsServer.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(
              JSON.stringify({
                type: "message",
                payload,
              })
            );
          }
        });

        break;
      }
      default: {
        console.log(`Unknown action type: ${type}`);
        break;
      }
    }
  });

  ws.on("close", () => {
    console.log(`Disconnect ${new Date()}`);
  });
});
