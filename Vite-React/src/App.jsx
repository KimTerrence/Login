import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background">
        <form action="">
          <h1>Login</h1>
          <div className='input-box'>
            <input required type="text" placeholder='Username'/>
          </div>
          <br />
          <div className='input-box'>
            <input required type="password" placeholder='Password'/>
          </div>
          <div className="remeberme"> 
            <input type="checkbox"/>
            <p>Remeber Me?</p>
          </div>
          <button>Login</button>
          <p>Don't have an account? <a href="">Register</a></p>
          </form>
      </div>
      <p>Developed By: Kim Terrence Quines</p>
    </>
  )
}

export default App
