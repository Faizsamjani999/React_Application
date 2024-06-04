import { useState } from "react"
import Todofetch from "./Todofetch";



function Todo()
{   
    let [arr,setArray] = useState([]);
    let [value,setValue] = useState(" ")

    const handleChange = (el)=>{
        

        setValue(el.target.value)
    }

    const handleClick = ()=>{
        let obj = {
            task : value,
            isComp : false 
        }
        setArray([...arr,obj]);
        
    }
    console.log(arr);


    return(
        <body>
    <div class="container">
        <div class="todo-app">
            <div class="app-title">
                <h2>To-do app</h2>
                <i class="fa-solid fa-book-bookmark"></i>
            </div>
            <div class="row">
                <input type="text" id="input-box" placeholder="add your tasks" onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>
            <div id="fetch">
            <Todofetch data={arr}/>
            </div>
        </div>
        
    </div>




    <script src="script.js"></script>
</body>
    )
}

export default Todo