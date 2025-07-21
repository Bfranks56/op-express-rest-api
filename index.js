import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.get('/users', (req, res) => {
    return res.send('Received a GET HTTP method on user resource');
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