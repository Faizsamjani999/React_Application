import React from 'react'
import "./Header.modules.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClock, faVolumeUp, faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function Header() {

  

  return (
    <>
    <header>
    <nav>
    <p class="logo">
      multi<span>flex</span>
    </p>
      
      {/* <i class="fa fa-bars" id="menu"></i> */}
      <FontAwesomeIcon icon={faBars} id="menu" className='fa'/>
      
    <ul id="menu-box">
      <div class="marker"></div>
      <NavLink activeClassName="active" to={"/"}><li>Home</li></NavLink>
      <NavLink activeClassName="active" to={"/searchmovie"}><li>Single Movie</li></NavLink>
      
      <li>tickets</li>
      <li>news</li>
      <li>contact</li>
      <li><b>sign out</b></li>
    </ul>
      
  </nav>
  
    
    
    
</header>
    </>
  )
}

export default Header


