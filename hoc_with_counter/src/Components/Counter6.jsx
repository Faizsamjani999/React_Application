import HOC from "./HOC"


const Counter5 = (props)=>{
    return(
        <>
            <h1 style={{color:"#8bffff",textAlign:"center"}}>Counter Again Multiplication</h1>
            <h2 style={{color:"#8bffff"}}>Value / Value - 1</h2>
            <h1 style={{color:"#8bffff"}}>{props.secDiv}</h1>
            <button onClick={props.secendMulti} className="btn" style={{backgroundColor : "#8bffff"}}>Multiplication</button>
        </>
    )
}

export default HOC(Counter5)