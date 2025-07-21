import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

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

app.put('/users/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
    return res.send(`Received a DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(process.env.PORT, () => {
  console.log(`example app is listening on port ${process.env.PORT}!`);
});

console.log('Hello, Node.js!');
console.log('Your bare bones Node.js project is running successfully!');
console.log(process.env.MY_SECRET);