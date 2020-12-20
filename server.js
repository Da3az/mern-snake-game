const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.PORT||5000;
let Score = require('./score.model.js')
require('dotenv').config();
// const uri = process.env.ATLAS_URI
const uri = process.env.ATLAS_URI
mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open',()=>console.log('mongodb database'))


app.use(cors());
app.use(express.json());
const path = require('path')
// const query =  ;
const options = {
  sort: {score:1},
  projection: {
    _id:0,
    score:1,
    username:1
  }
};
 app.use(express.static('public'))
 

 app.get('/scores',(req,res)=>{
  console.log(req.body)
  Score.find().sort({score:-1})
              .limit(10)
                   .then(scores => res.json(scores))
                   .catch(err => res.status(400).json('Error: ' + err))
})


 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'public','index.html'))
 })




app.post('/',(req,res)=>{
  console.log('request message >>>>>>>>',req.body);
  const username = req.body.user;
  const score = req.body.score;
  console.log('data::::::',username,score);
  const newScore = new Score({username,score})
  newScore.save()
          .then(() => res.json('New score'))
          .catch(err => res.status(400).json('Error: ' + err))
})



app.listen(port,() => console.log('Server is running'))
