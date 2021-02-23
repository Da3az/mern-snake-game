import React from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import GamepadIcon from '@material-ui/icons/Gamepad';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ScoreIcon from '@material-ui/icons/Score';
import axios from 'axios';
export default function Nav() {
    const history = useHistory() 
    const player = useSelector(state => state.player)
    function selectLink(e){
      let links = document.getElementsByClassName('link')
      for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.style.border = 'none'
      }
      e.style.borderBottom = '2px solid blue'
    }
    function logout(){
      axios.get('/user/logout').then(_=>history.push('/auth')).catch(_=> console.log('err happend'))
    }
    return (
        <>
            <div className="snake">
             <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" >
               <g>
                 <g xmlns="http://www.w3.org/2000/svg">
                   <path d="m94.57 328.278c-1.3 0-2.604-.169-3.882-.511-3.843-1.029-7.119-3.543-9.108-6.989l-78.57-136.088c-1.989-3.445-2.528-7.54-1.499-11.382 1.03-3.843 3.544-7.119 6.989-9.108 40.588-23.435 92.677-9.478 116.112 31.112l43.569 75.465c4.143 7.174 1.685 16.348-5.49 20.49l-60.621 35c-2.299 1.329-4.889 2.011-7.5 2.011z" fill="#4c8577" data-original="#f4b978"  />
                   <path d="m475.603 78.476-16.172-13.476 16.172-13.477c6.364-5.304 7.225-14.762 1.921-21.126-5.304-6.365-14.764-7.223-21.126-1.921l-25.829 21.524h-34.569c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.569l25.828 21.523c2.805 2.337 6.209 3.477 9.595 3.477 4.297 0 8.564-1.838 11.531-5.398 5.304-6.363 4.444-15.822-1.92-21.126z" fill="#be0000" data-original="#be0000" />
                   <path d="m345.013 0h-89.013c-35.793 0-64.819 28.997-64.854 64.789l-.146 207.211h130v-142h25c36.177 0 65.546-29.708 64.992-66.009-.543-35.666-30.309-63.991-65.979-63.991z" fill="#4c8577" data-original="#f4b978"     />
                   <path d="m321 272v-142h25c36.177 0 65.546-29.708 64.992-66.009-.544-35.666-30.309-63.991-65.979-63.991h-89.013v272z" fill="#4e6e58" data-original="#ea9b58"    />
                   <path d="m192 90v100c27.614 0 50-22.386 50-50s-22.386-50-50-50z" fill="#7adfbb" data-original="#896645"     />
                   <g>
                   <path d="m390.998 381.789c-.776.059-1.555.107-2.336.144.783-.032 1.561-.085 2.336-.144z" fill="#4c8577" data-original="#f4b978"     /></g><path d="m386 397h-260c-35.898 0-65-29.101-65-65 0-35.898 29.101-65 65-65h260c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z" fill="#4e6e58" data-original="#f7daa1"     />
                   <path d="m386 397h-130v-130h130c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z" fill="#4c8577" data-original="#f4b978"     />
                   <path d="m281 382h100c0-27.614-22.386-50-50-50s-50 22.386-50 50z" fill="#7adfbb" data-original="#73543b"     />
                   <path d="m447 382h-382c-35.841 0-65 29.159-65 65s29.159 65 65 65h382c35.841 0 65-29.159 65-65s-29.159-65-65-65z" fill="#4c8577" data-original="#f4b978"     />
                   <path d="m512 447c0-35.841-29.159-65-65-65h-191v130h191c35.841 0 65-29.159 65-65z" fill="#4e6e58" data-original="#ea9b58"     />
                   <path d="m216 382h-120c0 33.137 26.863 60 60 60s60-26.863 60-60z" fill="#7adfbb" data-original="#896645"     />
                   <path d="m231 267h-100c0 27.614 22.386 50 50 50s50-22.386 50-50z" fill="#7adfbb" data-original="#896645"     />
                   <path d="m296 512h120c0-33.137-26.863-60-60-60s-60 26.863-60 60z" fill="#7adfbb" data-original="#73543b"     />
                   <path d="m316 85c-8.284 0-15-6.716-15-15v-20c0-8.284 6.716-15 15-15s15 6.716 15 15v20c0 8.284-6.716 15-15 15z" fill="#05303d" data-original="#05303d"/>
                  </g>
                </g>
                </svg>
            </div>
              <div className="links">
               <div className="link" onClick = {(e) => {selectLink(e.currentTarget);history.push('/')}}> <GamepadIcon></GamepadIcon> </div>
               <div className="link" onClick = {(e) => {selectLink(e.currentTarget);history.push('/score')}}> <ScoreIcon></ScoreIcon> </div>
              </div>
            <div className="user">
             <p>
              Welcome
             </p>
              <p id="user">{player?.username}</p> 
            </div>
            <button onClick = {() => logout()}><ExitToAppIcon></ExitToAppIcon></button>
        </>
    )
}
