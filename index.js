import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/posts.js';
import userRoute from './routes/user.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoute);
app.use('/user', userRoute)

// const CONNECTION_URL = "mongodb+srv://honey:honey_patel8226*@cluster0.m8ogqhq.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_URL = "mongodb+srv://Nishit_Patel:nishittest@cluster0.yx7grqw.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);