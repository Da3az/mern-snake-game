import React,{useState,useEffect} from 'react';
import Snake from './Snake'
import Food from './Food'
import Alert from './Alert'
import '../styles/Game.css';
import { useDispatch } from 'react-redux'
import {updateScore,resetScore,levelUp,scoreBoard} from '../redux/actions'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {setAlert as settingAlert}  from '../redux/actions'




const getRandomCord = () => {
  let x = Math.floor(Math.random() * 50)*2 ;
  let y = Math.floor(Math.random() * 50)*2 ;
  return [x,y]
}

function Game() {
  const [start,setStart] = useState(false)
  const player = useSelector(state => state.player)
  const score = useSelector(state => state.score)
  const [snakeDots,setSnakeDots] = useState([[0,0],[2,0],[4,0]])
  const [food,setFood] = useState([getRandomCord()[0],getRandomCord()[1]])
  const [direction,setDirection] = useState('right')
  const [disabled,setDisabled] = useState(true)
  const [speed,setSpeed] = useState(100)
  const [alert,setAlert] = useState('')
  const dispatch = useDispatch()



  const gameOver = async() => {
    const user = player.username
    await axios.post('/score',{score,user}).catch((_) => {dispatch(settingAlert('error','An error happend;u might want to reload the site'))})
    await axios.get('/score/scores').then(({data}) =>dispatch(scoreBoard(data)))
    dispatch(levelUp(false))
    dispatch(resetScore())
  }

  const newLevel = () => dispatch(levelUp(true))

  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
       if(direction !== 'down') setDirection('up')
       break;
       case 40:
      if(direction !== 'up')   setDirection('down')
        break;
      case 37:
      if(direction !== 'right')  setDirection('left')
       break;
     case 39:
      if(direction !== 'left') setDirection('right')
      break;
    default:
      break
    }
  }

  const borderHit = (head) => {
      if( (head[0] < 0) || (head[0] >= 100) || (head[1] >= 100) || (head[1] < 0)){
        setStart(false)
        setAlert('Snake on border')
        gameOver()
        return false
     }
     return true
  }

  const selfHit = (head,dots) => {
    let safe = true
    dots.forEach( (dot,i) => {
      if(JSON.stringify(dot) === JSON.stringify(head)) {
        setStart(false)
        setAlert('Snake on itself')
        gameOver()
        safe =  false
      }
    });
    return safe
  }

  const grow = (head,food) => {
    if (JSON.stringify(head) === JSON.stringify(food)) {
       setFood([getRandomCord()[0],getRandomCord()[1]])
       dispatch(updateScore(snakeDots.length-2))
       if((snakeDots.length-1)%5 === 0){
        newLevel()
        if(speed > 20){
        setSpeed(speed-15)
       }
       }
       return true
    }
    return false
  }

  let moveSnake = async(e) => {
    await (new Promise((resolve,reject) => setTimeout(()=>resolve('time'),speed)))
    let dots = [...snakeDots];
    let head = dots[dots.length - 1]

    switch(direction) {
     case 'up':
       head = [head[0] , head[1]-2]
     break;
     case 'down':
       head = [head[0] , head[1]+2]
     break;
     case 'left':
      head = [head[0]-2 , head[1]]
     break;
     case 'right':
      head = [head[0]+2 , head[1] ]
     break;
     default:
      break
    }



    if ( selfHit(head,dots) && borderHit(head) ) {
      if (!grow(head,food)) dots.shift();
      dots.push(head)
      setSnakeDots(dots)
    }else{
      setDirection('right')
      setSpeed(100)
      setSnakeDots([[0,0],[2,0],[4,0]])

    }



  }
  
  var switchButtons = document.getElementsByClassName('switchButton')
  for (let index = 0; index < switchButtons.length; index++) {
    const element = switchButtons[index];
    element.addEventListener('click',() => {
      setDisabled(!disabled)
    })
    
  }

  document.onkeydown = onKeyDown;

    
  useEffect(()=>{
    if(start  && disabled){
      moveSnake()
    } 
  },[snakeDots,start,disabled])

  return (
    <div className="game">
      <div className="game-area">
        {alert !== '' && <Alert message = {alert} cancel = {() => setAlert('')}></Alert>}
        {!start &&
         <button onClick={() => setStart(true)} className="start">
           <svg width="1em" height="1em" viewBox="0 0 16 16"  className="bi bi-caret-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path  fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
          </svg>
         </button>} 
        <Snake snakeDots = {snakeDots}></Snake>
        <Food food = {food}></Food>
      </div>
        
        {start && disabled &&
          <div id = "settings">
            <button className="switchButton" id="pause">
            <svg width="1em" height="1em" viewBox="0 0 16 16"  className="bi bi-pause-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
            </svg>
            </button>
            <button className="switchButton" id="play" disabled>
            <svg width="1em" height="1em" viewBox="0 0 16 16"  className="bi bi-skip-start-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path  fillRule="evenodd" d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"/>
              <path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"/>
            </svg>
            </button>
          </div>
        }
        { start && !disabled &&
          <div id = "settings">
            <button className="switchButton" id="pause" disabled>
              <svg width="1em" height="1em" viewBox="0 0 16 16"  className="bi bi-pause-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
              </svg>
            </button>
            <button className="switchButton" id="play">
              <svg width="1em" height="1em" viewBox="0 0 16 16"  className="bi bi-skip-start-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path  fillRule="evenodd" d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"/>
                <path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"/>
              </svg>
            </button>
          </div>
        }
      
       
     
  </div>
  );
}


export default Game
