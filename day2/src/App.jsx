
import './App.css';
import { useState } from 'react';

function App() {

  let [state,setstate] = useState(0);
  console.log(state);

  function Add()
  {
    setstate(state + 1)
    console.log(state);

    if(state === 1)
      {
        var btn = document.getElementById('btn');

        btn.disabled = false;
      }
  }

  function Reset()
  {
    setstate(0)
  }

  function Sub()
  {
    setstate(state - 1)

    

    if(state <= 1)
      {
        var btn = document.getElementById('btn');

        btn.disabled = true;
      }
  }

  return (
    <div className="App">
      <div className="wrapper">
	<div className="inner">
		<div className="counts">{state}</div>
		<div className="btn"><i class="ri-add-circle-fill" onClick={Add}></i></div>
		<p id='reset' onClick={Reset}>Reset</p>
    <button id='btn' onClick={Sub}><div className="btn"><i class="ri-delete-back-line"></i></div></button>
	</div>
</div>
    </div>
  );
}

export default App;
