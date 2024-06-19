import React, { useRef } from 'react'
import "./DataInput.modules.css"


function DataInput() {

    let text = useRef("");

    const highlighter = ()=>{
        text.current.select();
    }


    return (
        <div id="main">
            <h1>Text Highlighter</h1>
            <div id="sub">
                <textarea name="" id="text" ref={text}></textarea>
            </div>
            <button onClick={highlighter}>Highlight The Text</button>
        </div>
  )
}

export default DataInput