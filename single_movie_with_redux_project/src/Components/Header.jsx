import React from 'react'
import "./Header.modules.css"
import { NavLink } from "react-router-dom"

function Header() {

  

  return (
    <>
    <header>
    <nav>
    <p class="logo">
      multi<span>flex</span>
    </p>
      
      <i class="fa fa-bars" id="menu"></i>
      
    <ul id="menu-box">
      <div class="marker"></div>
      <NavLink activeClassName="active" to={"/"}><li>Home</li></NavLink>
      <NavLink activeClassName="active" to={"/"}><li>Home</li></NavLink>
      
      <li>tickets</li>
      <li>news</li>
      <li>contact</li>
      <li><b>sign out</b></li>
    </ul>
      
  </nav>
  
    <div class="popular-movie-slider">
      
      <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200" class="poster"/>
      
      <div class="popular-movie-slider-content">
        <p class="release">2017</p>
        <h2 class="movie-name">Interstellar</h2>
        <ul class="category">
          <p>Science fiction</p>
          <li>drama</li>
          <li>action</li>
        </ul>
        <p class="desc">Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.</p>
        
        <div class="movie-info">
          <i class="fa fa-clock-o"> &nbsp;&nbsp;&nbsp;<span>164 min.</span></i> 
          <i class="fa fa-volume-up"> &nbsp;&nbsp;&nbsp;<span>Subtitles</span></i>
          <i class="fa fa-circle"> &nbsp;&nbsp;&nbsp;<span>Imdb: <b>9.1/10</b></span></i>
        </div>
        
        <div class="movie-btns">
          <button><i class="fa fa-play"></i> &nbsp; Watch trailer</button>
          <button class="read-more"><i class="fa fa-circle"></i> <i class="fa fa-circle"></i> <i class="fa fa-circle"></i>&nbsp; Read more</button>
        </div>
        
      </div>
      
    </div>
    
    
</header>
    </>
  )
}

export default Header