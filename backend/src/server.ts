import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose, { connection } from 'mongoose'
import userRouter from './routers/user.routes'
import newsRouter from './routers/news.routes'


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/piamean');
const conn=mongoose.connection;
conn.once('open',()=>{
    console.log('db conn ok')
})

const router= express.Router();
router.use('/users',userRouter)
router.use('/news',newsRouter)
app.use('/',router);

app.listen(4000, ()=>console.log('Express running on port 4000'));
