import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Score.css'
const Score = (props) => {
 
  const state = useSelector(state => state)
  
  return (
    <div className="score">
      <h1>Score :   {state.score && <span  id="fade">{state.score}</span>}</h1>
      <h1>Level {state.level}</h1>

    </div>
  )
}

export default Score
