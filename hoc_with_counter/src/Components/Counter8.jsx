import HOC from "./HOC"


const Counter5 = (props)=>{
    return(
        <>
            <h1 style={{color:"#ff9776"}}>Counter Again Addition</h1>
            <h2 style={{color:"#ff9776"}}>Value + Value + Value + Value</h2>
            <h1 style={{color:"#ff9776"}}>{props.secDiv}</h1>
            <button onClick={props.secendAdd} className="btn" style={{backgroundColor : "#ff9776"}}>Addition</button>
        </>
    )
}

export default HOC(Counter5)