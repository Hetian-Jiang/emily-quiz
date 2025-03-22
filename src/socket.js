// src/socket.js
import {io} from 'socket.io-client';

// Ensure a single shared socket connection
const socket = io(`https://emily-quiz.it.com:8000`);

export default socket;
