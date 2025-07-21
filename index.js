import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(`example app is listening on port ${process.env.PORT}!`);
});

console.log('Hello, Node.js!');
console.log('Your bare bones Node.js project is running successfully!');
console.log(process.env.MY_SECRET);