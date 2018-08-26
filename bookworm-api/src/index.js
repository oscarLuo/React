import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from './routes/auth';
import users from './routes/users';
import books from './routes/books';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
const app = express();

mongoose.connect('mongodb://localhost:27017/bookworm', { useNewUrlParser: true });
app.use(bodyParser.json());
mongoose.Promise = Promise;
app.use("/api/auth", auth);
app.use('/api/users',users);
app.use('/api/books',books);
app.get('/*', (req,res) => {
    res.sendfile(path.join(__dirname, 'index.html'));
});


 
app.listen(8080, ()=> console.log("Server was running on the port 8080"));