const express = require('express');
const http = require('http');
const app = require('./app'); // Express app 파일
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.IO 초기화
const io = new Server(server);

// Socket.IO 연결 처리
io.on('connection', (socket) => {
    console.log('A user connected');

    // 채팅 메시지 이벤트 수신
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg); // 모든 클라이언트에 메시지 브로드캐스트
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// 서버 실행
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
