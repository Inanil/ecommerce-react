import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/headerScreen.css'


const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenu = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className='header'>
     
        <Link to='/'><h1 className="header_title"> Bytt</h1></Link>
   
      <div onClick={clickMenu} className='header_menu'>
      <i class="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className='navbar'>
        <ul className='navbar_list'>
          <li className='navbar_items'>
            <NavLink 
                to='/login' 
                className={({isActive})=> isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <i className="fa-solid fa-user"></i>
              <p className="navbar_label">Login</p>
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink 
                to='/purchases' 
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
               <i className= "fa-solid fa-bag-shopping"></i>
              <p className="navbar_label">Purchases</p>
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink 
                to='/cart' 
                className={({isActive}) => isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
              <i className= "fa-solid fa-cart-shopping"></i>
              <p className="navbar_label">Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
