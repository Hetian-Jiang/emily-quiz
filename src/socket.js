// src/socket.js
import {io} from 'socket.io-client';

// Ensure a single shared socket connection
const socket = io(`wss://emily-quiz.it.com:44679`);

export default socket;
