import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="logindetails">
            <h2 className="login-title">Sign in</h2>
            <input type="email" className="login-input" placeholder='Enter your email'/>
            <input type="password" className="login-input" placeholder='Enter your password'/>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Login