import HOC from "./HOC"


const Counter5 = (props)=>{
    return(
        <>
            <h1 style={{color:"#8f71ff"}}>Counter Again Division</h1>
            <h2 style={{color:"#8f71ff"}}>Value / Value - 1</h2>
            <h1 style={{color:"#8f71ff"}}>{props.secDiv}</h1>
            <button onClick={props.secendDiv} className="btn" style={{backgroundColor : "#8f71ff"}}>Divison</button>
        </>
    )
}

export default HOC(Counter5)