import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div className="logindetails">
        <h2 className="login-title">Sign in</h2>
        <form className='login-form' action="">
          <input type="email" className="login-input" placeholder='Enter your email' />
          <input type="password" className="login-input" placeholder='Enter your password' />
        </form>
        <Link to={'/'} className='sign-in-link'>Sign in</Link>
      </div>
  )
}

export default Login