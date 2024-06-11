import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataFetch from './DataFetch'

function DataAdd() {

    const [arr,setArr] = useState([]) 
    const [load,setLoad] = useState(true)

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/todos')

        .then((res)=>{
            setArr(res.data)
            setLoad(false)
    })
    .catch((err)=>{
        console.log("Error Fetching Data : ",err);
        setLoad(false)
    })
    },[])

    console.log(arr);
  return (
    <div>
        {
            load ? <h1>loading...</h1> : <DataFetch arr={arr}/>
        }
    </div>
  )
}

export default DataAdd


