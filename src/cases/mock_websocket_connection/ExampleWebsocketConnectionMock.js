import React, { useEffect, useRef, useState } from 'react'

const ExampleWebsocketConnectionMock = () => {
    const [messages, setMessages] = useState([]);
    const wsRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
            console.log('connected');
        };

        ws.onmessage = (event) => {
            const { type, payload } = JSON.parse(event.data);

            switch (type) {
                case 'message': {
                    setMessages((prevValue) => [...prevValue, payload]);
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

    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
};

export default ExampleWebsocketConnectionMock
