import HOC from "./HOC"


const Counter2 = (props)=>{
    return(
        <>
            <h1 style={{color:"#f70776"}}>Counter Substraction</h1>
            <h2 style={{color:"#f70776"}}>Value - 1</h2>
            <h1 style={{color:"#f70776"}}>{props.count}</h1>
            <button onClick={props.minus} className="btn" style={{backgroundColor : "#f70776"}}>Substraction</button>
        </>
    )
}

export default HOC(Counter2)