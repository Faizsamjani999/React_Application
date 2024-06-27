import HOC from "./HOC"



const Counter3 = (props)=>{
    return(
        <>
            <h1 style={{color:"#edb1f1"}}>Counter Division</h1>
            <h2 style={{color:"#edb1f1"}}>Value / 2</h2>
            <h1 style={{color:"#edb1f1"}}>{props.multiCount}</h1>
            <button onClick={props.division} className="btn" style={{backgroundColor : "#edb1f1"}}>Divison</button>
        </>
    )
}

export default HOC(Counter3)