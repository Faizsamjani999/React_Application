import HOC from "./HOC"



const Counter3 = (props)=>{
    return(
        <>
            <h1 style={{color:"#f4aeba"}}>Counter Multiplication</h1>
            <h2 style={{color:"#f4aeba"}}>Value * 2</h2>
            <h1 style={{color:"#f4aeba"}}>{props.multiCount}</h1>
            <button onClick={props.multi} className="btn" style={{backgroundColor : "#f4aeba"}}>Multiplication</button>
        </>
    )
}

export default HOC(Counter3)