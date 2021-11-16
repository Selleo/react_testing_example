import React, { useCallback, useEffect, useRef, useState } from "react";

// Start server: yarn start:ws

const ExampleWebsocketConnectionMock = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "message",
          payload: {
            message: "new connection",
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data);

      switch (type) {
        case "message": {
          setMessages((prevValue) => [...prevValue, payload.message]);
          break;
        }
        default: {
          console.log(`Unknown response type: ${type}`);
          break;
        }
      }
    };

    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = useCallback(
    (event) => {
      event.preventDefault();

      wsRef.current.send(
        JSON.stringify({
          type: "message",
          payload: {
            message: inputValue,
          },
        })
      );

      setInputValue("");
    },
    [inputValue, wsRef]
  );

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={inputValue}
          placeholder="Your message"
          onChange={({ target: { value } }) => setInputValue(value)}
        />
        <button disabled={!inputValue}>Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleWebsocketConnectionMock;
