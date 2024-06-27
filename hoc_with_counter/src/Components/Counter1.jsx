import HOC from "./HOC"



const Counter1 = (props)=>{
    return(
        <>
            <h1 style={{color : "#53a8b6"}}>Counter Added</h1>
            <h2 style={{color : "#53a8b6"}}>Value + 1</h2>
            <h1 style={{color : "#53a8b6"}}>{props.count}</h1>
            <button onClick={props.add} className="btn" style={{backgroundColor : "#53a8b6"}}>Addition</button>
        </>
    )
}
export default HOC(Counter1)