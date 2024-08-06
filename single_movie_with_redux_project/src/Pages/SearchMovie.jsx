import React, { useState } from 'react'
import "./SearchMovie.modules.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchAction } from '../Redux/Reducer/action';

function SearchMovie() {

  const [state,setState] = useState();

  const handleChange = (e)=>{
    setState(e.target.value)
  }
  // console.log(state);

  const selector = useSelector((val)=>val)
  console.log(selector);

  const dispatch = useDispatch()

  const handleClick = ()=>{
    fetchAction(dispatch,state)
  }

  return (
    <>
        <div id="main">
        <div id="sub">
            <input type="text" placeholder="Enter Movie Name" id="inputTag" onChange={handleChange} />
            <button onClick={handleClick}>SHOW</button>
        </div>
        
        </div>
    </>
  )
}

export default SearchMovie


