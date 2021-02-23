import React ,{useEffect}from 'react'
import Game from './Game.js'
import Score from './Score.js'
import Nav from './Nav.js'
import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Scoreboard from './Scoreboard.js'
import axios from 'axios'
import {useHistory}  from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {settingPlayer} from '../redux/actions'
export default function Home() {
    const player = useSelector(state => state.player)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
      axios.get('/user/authenticated').then(
        res => {
          const {username,_id,email} = res.data.user
          dispatch(settingPlayer({_id,username,email}))
        }).catch(_ => history.push('/auth'))
    }, [history,dispatch])
    return (
      <>
      {!player._id  ? <div className='reload'>reloading...</div> 
                          : <div className="app__body">
                              <div className="app__header">
                                <Nav></Nav>  
                              </div>
                              <Switch>
                                <Route path = '/score'>
                                  <div className="app__score">
                                    <Scoreboard></Scoreboard>
                                  </div>
                                </Route>
                                <Route path = '/'>
                                  <div className="app_game">
                                    <Game ></Game>
                                  </div>
                                  <div className="app__score">
                                    <Score></Score>
                                  </div>
                                </Route>
                              </Switch>
                            </div>
      }
      </>
    )
}
