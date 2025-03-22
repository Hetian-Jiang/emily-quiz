// src/socket.js
import {io} from 'socket.io-client';

// Ensure a single shared socket connection
const connectionOptions = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket']
};
const socket = io(`https://emily-quiz.it.com:${process.env.REACT_APP_SERVER_PORT}`, connectionOptions);

export default socket;
