import React from 'react'
import "./Blog.modules.css"

function Blog() {
  return (
    <div><body>
    <div class="container-fluid">
  
      <div class="heading">
  
        <h1 class="title main">Lorem Ipsum Dolor</h1>
  
        <div class="box"></div>
  
        <div class="description">
          <span class="first" id="main-header1">Lorem</span> 
          <span class="first" id="main-header2">Ipsum</span>
          <span class="first" id="main-header3">Dolor</span>  
          </div>
  
        
  
      </div>
  
      <div class="blog-card">
  
        <div class="media col-sm-6 col-xs-6" style="content: url(https://i.etsystatic.com/15181615/r/il/0a16ea/4722304251/il_fullxfull.4722304251_8o7m.jpg);"></div>
        
        
        <div class="card-body col-sm-6 col-xs-6">
  
          <p class="tagline text-center">January 24, 2021</p>
          
          
          <h3 class="title text-center">Bondi Beach Ocean Views</h3>
          
          <div class = "divider"></div>
          <h5 class="dateit text-center">Bondi Beach Ocean Views</h5>
          
          
  
          <p class="paragraph text-justify">
            <span class="firstcharacter">M</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><a class="read-more glyphicon glyphicon-chevron-down"><span class="read-button">Read More</span></a>
        </div>
        
        <h4 id="bottom-header">Premium</h4>
        
        
      </div>
  
      <div class="top">
       
        
       <img class="side-image" id="image2-js" style="" src="https://assets.codepen.io/4927073/Chamomile+Blossom+Group+2_1.png"/>
      
        <div class="media col-sm-6 col-xs-6" id = "image1-js">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="img3" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMax slice" xlink:hreff="https://media.mutualart.com/Images//2020_12/01/12/122736574/f4168ae9-fcef-4bd4-b5af-ff7d4a824f4f.Jpeg" xlink:href="https://images.vs-static.com/kD2kwwzSjEl8c_3WB9ldwK9wFJ0=/0x248:2998x4245/1200x0/HM_Packs_Apr_23_c_Alastair_Philip_Wiper_64_Edit_2_05df49275c/HM_Packs_Apr_23_c_Alastair_Philip_Wiper_64_Edit_2_05df49275c.jpg"></image>
        </pattern>
      </defs>
      <path id="path3" stroke-width="4px" stroke="#fff" fill="url(#img3)" d="M -57.5 21.6 C -57.1 10.3 -47.7 -1.1 -44.9 -16.1 C -42.1 -31 -45.8 -49.6 -39.4 -59 C -33 -68.5 -16.5 -68.8 -1.3 -66.9 C 13.8 -65.1 27.6 -61.1 42.1 -54.2 C 56.5 -47.4 71.6 -37.8 76.6 -24.4 C 81.5 -11.1 76.3 6 70.7 22.9 C 65.1 39.8 59.1 56.5 47.3 67.2 C 35.4 78 17.7 82.8 2.1 79.8 C -13.5 76.9 -27 66.3 -38 55.3 C -49.1 44.3 -57.8 33 -57.5 21.6 Z" transform="translate(100 100)"></path>
      <text fill="#425057">
        <textPath xlink:href="#path3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </textPath>
      </text>
    </svg>
        </div>
        
        
        
      </div>
  
      
      
      
  
      
      
      
    </div>
  
  </body></div>
  )
}

export default Blog