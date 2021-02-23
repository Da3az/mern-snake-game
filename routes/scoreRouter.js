const express = require('express');
const scoreRouter = express.Router();
const Score = require('../models/Score.js')

scoreRouter.get('/scores',(req,res)=>{
    Score.find().sort({score:-1})
                .limit(10)
                     .then(scores => res.json(scores))
                     .catch(err => res.status(400).json('Error: ' + err))
})

scoreRouter.post('/scores/ind',(req,res)=>{
  const username = req.body.username;
  Score.find({username}).sort({score:-1})
              .limit(10)
                   .then(scores => {res.json(scores)})
                   .catch(err => res.status(400).json('Error: ' + err))
})

scoreRouter.post('/',(req,res)=>{
    const username = req.body.user;
    const score = req.body.score;
    let date =new Date() + ''
    date = date.split(' ').splice(1,5).join(' ')
    const newScore = new Score({username,score,date})
    newScore.save()
            .then(() => res.json('New score'))
            .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = scoreRouter;
