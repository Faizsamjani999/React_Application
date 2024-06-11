import React from 'react'

function DataFetch({arr}) {
  return (
    <div>
        {
            arr.map((val)=>{
                return(
                    <h1>{val.title} - {val.completed ? "Completed" : "Not Completed"}</h1>
                )
            })
        }
    </div>
  )
}

export default DataFetch