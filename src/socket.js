// src/socket.js
import {io} from 'socket.io-client';

// Ensure a single shared socket connection
const connectionOptions = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket']
};
const socket = io(`wss://emily-quiz.it.com:22918`, connectionOptions);

export default socket;
