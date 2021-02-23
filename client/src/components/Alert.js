import React from 'react'
import '../styles/Alert.css'
export default function Alert({message,cancel}) {
    return (
        <div className='alert'>
            <div className="alert_body">
              <p>{message}</p>
              <button onClick = {() => cancel()}>ok</button>
            </div>
        </div>
    )
}
