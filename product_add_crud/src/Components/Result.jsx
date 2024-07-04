import React from 'react'
import "./FormInput.modules.css"
import Button from 'react-bootstrap/esm/Button'

function Result({proArr,deleteData,handleEdit}) {
  return (
    <div id='resultSub'>
        {
            proArr.map((val)=>{
                return(
                    <div id='result'>
                        <div id="resultimg">
                            <img src={val.img} alt="" />
                        </div>
                        <div id='resultTitle'>
                            <h1>Product Brand - {val.brand}</h1>
                            <h1>Product Name - {val.name}</h1>
                            <h1>Product Price - {val.price}</h1>
                            <p>{val.des}</p>
                            <div id='btn'>
                                <Button onClick={()=>deleteData(val.id)}>Delete</Button>
                                <Button onClick={()=>handleEdit(val.id)}>Edit</Button>
                            </div>
                        </div>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default Result