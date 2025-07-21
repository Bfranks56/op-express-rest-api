import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';
import {v4 as uuidv4} from 'uuid';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    req.me = users[1];
    next();
});
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

let users = {
    1: {
        id: '1',
        userName: 'Robin Wieruch',
    },
    2: {
        id: '2',
        userName: 'Dave Davids',
    }
};

let messages = {
    1: {
        id: '1',
        text: 'Hello, World!',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Hello, Dave!',
        userId: '2',
    }
};

app.get('/session', (req, res) => {
    return res.send(users[req.me.id]);
});

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId])
});

app.post('/users', (req, res) => {
    return res.send('Received a POST HTTP method on user resource');
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id,
    };

    messages[id] = message;
    return res.send(message);
});

app.put('/users/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
    return res.send(`Received a DELETE HTTP method on user/${req.params.userId} resource`);
});

app.delete('/messages/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = messages;

    messages = otherMessages;

    return res.send(message);
});

app.listen(process.env.PORT, () => {
  console.log(`example app is listening on port ${process.env.PORT}!`);
});

console.log('Hello, Node.js!');
console.log('Your bare bones Node.js project is running successfully!');
console.log(process.env.MY_SECRET);