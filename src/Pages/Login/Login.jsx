import React from 'react'
import './Login.css'
import ContactForm from '../../Components/ContactForm/ContactForm'

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
          <button>Sign in</button>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Login