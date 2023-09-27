import React, {useState} from 'react'
import logo from '../../assets/Logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div>
      <header>
        <div className="logo">
          <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <div className="searchbar">
          <div className="search-container">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <AiOutlineSearch className="searchIcon" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header