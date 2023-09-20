import React from 'react'
import './ContactForm.css'
import logo from '../../assets/Logo.png'

const ContactForm = () => {
  return (
    <div className='container-contact'>
      <div className="wrapper-contact">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <p>About us</p>
          <p>Privacy Policy</p>
          <p>Loyalty program</p>
          <p>Our stores</p>
          <p>Franchises</p>
          <p>Advertisment</p>
        </div>
        <form className='contact-form'>
          <h2>Contact us</h2>
          <div className='full-input'>
            <label htmlFor='name' className='contact-label'>Name</label>
            <input className='contact-input' type='text'></input>
          </div>
          <textarea placeholder='Write your message' />
          <button className='contact-button'>Send message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm