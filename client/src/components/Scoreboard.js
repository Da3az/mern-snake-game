import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {scoreBoard,scoreBoardInd} from '../redux/actions'
import {useSelector} from 'react-redux'
import axios from 'axios'
import PublicIcon from '@material-ui/icons/Public';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export default function Scoreboard() {
    const dispatch = useDispatch()
    const score_board = useSelector(state => state.scoreBoard)
    const score_board_ind = useSelector(state => state.scoreBoardInd)
    const player = useSelector(state => state.player)
    useEffect(()=>{
        let username = player.username
         axios.get('score/scores').then(({data}) =>{dispatch(scoreBoard(data))})
         axios.post('score/scores/ind',{username}).then(({data}) =>{dispatch(scoreBoardInd(data))})
        
    },[player.username,dispatch])
    
    return (
        <div className="scoreboard">
            <h1>Scoreboard</h1>
            <div className="scoreboard_body">
                <div className="scoreboard_global">
                    <PublicIcon></PublicIcon>
                        <ol>
                        {
                        score_board.map(score => <li>{score.score} by {score.username} on {score.date}</li>  )
                        }
                        </ol>
                </div>
                <div className="scoreboard_inv">
                    <PermIdentityIcon></PermIdentityIcon>
                    <ol>
                        {
                        score_board_ind.map(score => <li>{score.score} by {score.username} on {score.date}</li>  )
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}
