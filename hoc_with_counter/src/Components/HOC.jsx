import { useState } from "react"
import "./HOC.modules.css"

const HOC = (OriginalCom)=>{

  const CounterMain = ()=>{
    const [count,setCount] = useState(0)

    const [multiCount,setMultiCount] = useState(10)

    const [secDiv,setSecDiv] = useState(100);

    const add = ()=>{
      setCount(count+1)
    }
    const minus = ()=>{
      setCount(count-1)
    }
    const multi = ()=>{
      setMultiCount(multiCount*2)
    }
    const division = ()=>{
      setMultiCount(multiCount/2)
    }


    const secendDiv = ()=>{
      setSecDiv(secDiv/secDiv + count + count);
    }
    const secendMulti = ()=>{
      setSecDiv(secDiv*secDiv + count + count);
    }
    const secendSub = ()=>{
      setSecDiv(secDiv + 10 - secDiv);
    }
    const secendAdd = ()=>{
      setSecDiv(secDiv + secDiv + secDiv + secDiv);
    }
    return(
      <div id="main">
        
        <OriginalCom count={count} multiCount={multiCount} add={add} minus={minus} multi={multi} division={division} secDiv={secDiv}secendDiv={secendDiv} secendMulti={secendMulti} secendSub={secendSub} secendAdd={secendAdd}/>
      </div>
    )
  }
  return CounterMain
}

export default HOC