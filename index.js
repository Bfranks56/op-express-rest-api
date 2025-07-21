import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';
import models from './models/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    }
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () => {
  console.log(`example app is listening on port ${process.env.PORT}!`);
});

console.log('Hello, Node.js!');
console.log('Your bare bones Node.js project is running successfully!');
console.log(process.env.MY_SECRET);