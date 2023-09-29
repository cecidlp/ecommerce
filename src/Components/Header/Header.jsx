import React, {useState} from 'react'
import logo from '../../assets/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'


const Header = () => {

  return (
    <div>
      <header>
        <div className="logo">
          <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <Searchbar/>
      </header>
    </div>
  )
}

export default Header