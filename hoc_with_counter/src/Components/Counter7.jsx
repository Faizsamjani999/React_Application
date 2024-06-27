import HOC from "./HOC"



const Counter5 = (props)=>{
    return(
        <>
            <h1 style={{color:"#ffe700",textAlign:"center"}}>Counter Again Substraction</h1>
            <h2 style={{color:"#ffe700",textAlign:"center"}}>Value - Value + countValue + secDiv</h2>
            <h1 style={{color:"#ffe700"}}>{props.secDiv}</h1>
            <button onClick={props.secendSub} className="btn" style={{backgroundColor : "#ffe700"}}>Substraction</button>
        </>
    )
}

export default HOC(Counter5)