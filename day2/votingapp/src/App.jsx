import { useState } from 'react';
import './App.css';

function App() {

  let [state1,setstate1] = useState(1)
  let [state2,setstate2] = useState(1)
  
  
  
  
  function rjs()
  {
      setstate1(state1 + 1)
      
      document.getElementById('like1').innerHTML = "Total Likes = " + " " +  state1;

      if(state1 > state2)
      {
        document.getElementById("show").innerHTML = "Best Technologie is React Js"
      }
      if(state2 > state1)
      {
        document.getElementById("show").innerHTML = "Best Technologie is Angular"
      }
  }
  function ajs()
  {
      setstate2(state2 + 1)

      document.getElementById('like2').innerHTML = "Total Likes = " + " " +  state2;

        if(state1 > state2)
        {
          document.getElementById("show").innerHTML = "Best Technologie is React Js"
        }
        if(state2 > state1)
        {
          document.getElementById("show").innerHTML = "Best Technologie is Angular"
        }
  }

  return (
    <div className="App">
      <div id="main">
            <div id="sub">
                <h1 id="title"><span>V</span>oting <span>A</span>pplication</h1>
                <h2>Which Technologies Are Good For Building Best Front-end Work??</h2>
                <div id="post">
                    <div id="box">
                        <img src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" alt="" />
                        <h1>React JS.</h1>
                        <button className="btn btn-info" onClick={rjs}><i class="bi bi-hand-thumbs-up"></i></button>                        
                        <h1 id='like1'></h1>
                    </div>
                    <div id="box">
                        <img src="https://technisia.com/wp-content/uploads/2022/08/AngularJS-technisia.webp" alt="" />
                        <h1>Angular</h1>
                        <button className="btn btn-info" onClick={ajs}><i class="bi bi-hand-thumbs-up"></i></button>
                        <h1 id='like2'></h1>
                    </div>
                    <div id="win">
                      <h1 id='show'>BEST TECHNOLOGY IS = </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
