import React from 'react'
import './Login.css'
import ContactForm from '../../Components/ContactForm/ContactForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='login'>
        <div className="logindetails">
          <h2 className="login-title">Sign in</h2>
          <form className='login-form' action="">
            <input type="email" className="login-input" placeholder='Enter your email' />
            <input type="password" className="login-input" placeholder='Enter your password' />
          </form>
          <Link to={'/home'} className='sign-in-link'>Sign in</Link>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Login