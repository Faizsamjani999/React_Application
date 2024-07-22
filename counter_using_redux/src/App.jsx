import './App.css'
import { useDispatch, useSelector } from "react-redux" 

function App() {
  
  const value = useSelector((val)=>val)
  console.log(value);

  const dispach = useDispatch()

  return (
    <>
    <h1>{value}</h1>
    <button onClick={()=>dispach({type:"incriment"})}>Increamnet</button>
    <button onClick={()=>dispach({type:"decrement"})}>Decrement</button>
    </>
  )
}

export default App
