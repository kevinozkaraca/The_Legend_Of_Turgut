//express
const express = require('express');
const app = express();
const port = 3005;
//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//path
const path = require('path');

//http
const http = require('http');
const server = http.createServer(app);
//socket.io
const socketIo = require('socket.io');
const io = socketIo(server);

app.use(express.static(path.join(__dirname, '../')));
app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../index.html'));

});
app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/script.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, '../script.js'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log("user disconnected");
    });

});

server.listen(port, () => console.log(`Listening on port ${port}`));