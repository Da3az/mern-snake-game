import React ,{useEffect} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './Login.js'
import Home from './Home'
import '../styles/App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const alert = useSelector(state => state.alert)
 
  
  useEffect(() => {
    switch (alert.type) {
        case 'success':
            toast.success(alert.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        case 'warning':
            toast.warn(alert.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;
        case 'error':
            toast.error(alert.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            break;    
        default:
            break;
    }
   
  },[alert])

  return (
      <div className="app">
       <ToastContainer />
        <Router>
          <Switch>
           <Route path='/auth' >
            <Login></Login>
          </Route>
           <Route path ='/'>
             <Home>              
             </Home>                      
          </Route>
          </Switch>
        </Router>
         
      </div>
  )
}

export default App
