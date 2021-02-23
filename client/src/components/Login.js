import React ,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {settingPlayer,setAlert} from '../redux/actions'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import '../styles/Login.css'
import '../styles/Register.css'
import '../styles/Auth.css'

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUserName] = useState('')
    const [method,setMethod] = useState('login')
    const dispatch = useDispatch()
    const history = useHistory()
    const player = useSelector(state => state.player)

    useEffect(() => {
      axios.get('/user/authenticated').then(_ => history.push('/')).catch(_ => dispatch(settingPlayer({_id:'',username:'',email:''})))
    }, [history,dispatch])

    async function register(e){
      e.preventDefault();
      console.log(username,email,password)
      await axios.post("/user/register",{
          username,
          email,
          password
       }).then(res => {
              const {type,message} = res.data            
              dispatch(setAlert({type,message}))
              if(type==='success') {
                setUserName('');setEmail('');setPassword('');setMethod('login')
              }
          })
          .catch((err,message) => console.log(err,message));
    }

    async function login(e){
        e.preventDefault();
        await axios.post("/user/login",{
            email,
            password
        }).then(res => {
            const {type,message,user} = res.data     
            dispatch(setAlert({type,message}))
            if(user){
                history.push('/')
            }
        })
        .catch((_) => {dispatch(setAlert('error','An error happend;u might want to reload the site'))})
    }
        
    return (
       
          <div className='auth' id='auth'>            
             {
               player._id  ? <div className='reload'>reloading...</div>
               :
                method === 'login' 
                ?
                <div className="login">
                  <form onSubmit = {login} className="form" type="submit" action="">
                  <h1>Log-in</h1>
                  <label htmlFor="">E-mail</label><input type='email' value={email} onChange = {e => setEmail(e.target.value)} required/><br />
                  <label htmlFor="">Password</label><input value={password} onChange = {e => setPassword(e.target.value)} type='password' required /><br />
                  <Button
                    variant="contained"
                    className="btn"
                    label="Submit"
                    primary={true}
                    type='submit'
                  >Login</Button>
                  <p>Don't have an account yet? <span onClick={() => {setEmail('');setPassword('');setMethod('register');}}>Register here</span>.</p>
                </form>
                </div> 
                :
                <div className="register">
                  <form onSubmit = {register} className="form" action="" >
                      <h1>Register</h1>
                      <label htmlFor="">Username</label><input value={username} onChange = { e => setUserName(e.target.value)} type='name' required/><br />
                      <label htmlFor="">E-mail</label><input value = {email} onChange = {e => setEmail(e.target.value)} type ='email' required/><br />
                      <label htmlFor="">Password</label><input value ={password} onChange = {e => setPassword(e.target.value)} type = 'password' required/><br />
                      <Button
                        variant="contained" 
                        className="btn" 
                        label="Submit"
                        primary={true} 
                        type='submit'
                        >Register</Button>
                      <p>Already have an account? <span onClick={() => {setUserName('');setEmail('');setPassword('');setMethod('login')}}>Login here</span>.</p>
                  </form>
                </div>
              }
          </div>
    )
}
