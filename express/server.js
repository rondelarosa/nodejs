const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http)

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const messages = [
    { name: 'Tim', message: 'Hi' },
    { name: 'Jane', message: 'Hello' }
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body);
    // inform all clients
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log('Connected');
});

// const dburl = "";

// mongoose.connect(dburl, { useNewUrlParser: true }, (err) => {
//     console.log('mongo db connection', err);
// });

// instead of just app.listen we can no longer serve express by the backend any longer
// to run socket.io and express change to http.listen
const server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});
