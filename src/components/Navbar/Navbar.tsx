import React from 'react';
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {
  return (
    <header className='header-container'>

      <div className='header-logo_container'>
        <img src='/lego.svg' alt='logo'/>
        <Link to={'/'} className='header-logo_text'>LEGOfy</Link>
      </div>

      <nav className='header-navbar'>
        <ul className='header-navbar_links'>
          <li>
            <Link className='hover-underline-animation' to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/Cart"}><FiShoppingCart /></Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar