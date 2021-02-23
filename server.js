const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');

const port = process.env.PORT||5000;
const userRouter = require('./routes/userRouter');
const scoreRouter = require('./routes/scoreRouter');

require('dotenv').config();
const uri = process.env.ATLAS_URI
mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open',()=>console.log('mongodb database'))


app.use(cors());
app.use(express.json());
app.use(cookieParser());
const path = require('path')
// const query =  ;
// const options = {
//   sort: {score:1},
//   projection: {
//     _id:0,
//     score:1,
//     username:1
//   }
// };
 app.use(express.static('public'))

 app.use('/user',userRouter);
 app.use('/score',scoreRouter);
 

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'public','index.html'))
 })





app.listen(port,() => console.log('Server is running'))
