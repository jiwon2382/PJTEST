
const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const workflowRoutes = require('./routes/workflowRoutes');

// Use routes
app.use('/api/workflows', workflowRoutes);

module.exports = app;


// Serve static HTML UI
app.use('/', express.static(__dirname + '/ui'));

// API route for interaction
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running and responding!' });
});


// Serve the dashboard UI
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ui/dashboard.html');
});

// Serve the chat UI
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/ui/index.html');
});


// Serve the dashboard UI
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ui/dashboard.html');
});

// Serve the chat UI
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/ui/chat.html');
});
