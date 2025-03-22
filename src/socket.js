// src/socket.js
import {io} from 'socket.io-client';

// Ensure a single shared socket connection
const connectionOptions = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket']
};
const newSocket = io(`wss://emily-quiz.it.com:44679`, connectionOptions);

export default socket;
