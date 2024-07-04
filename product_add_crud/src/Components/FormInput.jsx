import React, { useEffect, useState } from 'react'
import "./FormInput.modules.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 } from 'uuid';
import Result from './Result';

function FormInput() {

    const [show,setShow] = useState(true);

    const [loading,setLoading] = useState(false);

    const [input,setInput] = useState({
        id : v4(),
        brand : "",
        name : "",
        des : "",
        price : "",
        img : ""
    })

    const [proArr,setProArr] = useState(JSON.parse(localStorage.getItem("product")) || []);

    const getInputValue = (e)=>{
        const {name,value} = e.target
        setInput({...input,[name] : value})
    }
    
    const submitForm = (e)=>{
        e.preventDefault();
        
        if(input.id)
        {
         let change = proArr.map((val)=>{
                if(val.id === input.id)
                {
                    return{...input}
                }
                else{
                    return val
                }
            })
            setProArr(change);
        }
        else{
            setProArr([...proArr,input]);
        }

        setInput({
            id : v4(),
            brand : "",
            name : "",
            des : "",
            price : "",
            img : ""
        })
    }
    console.log(proArr);

    useEffect(()=>{
        localStorage.setItem("product",JSON.stringify(proArr));
    },[proArr])

    useEffect(()=>{
        if(loading)
        {
            setTimeout(()=>{
                setLoading(false)
            },5000)
        }
    },[loading])

    const pageChange = ()=>{
        setShow(!show);
        // setShow(false);
    }
    const deleteData = (id)=>{
        let data = proArr.filter(val => val.id !== id)
        setProArr(data);
    }
    const handleEdit = (id)=>{
        let editing = proArr.find(val => val.id === id)

        setInput({
            id : editing.id,
            brand : editing.brand,
            name : editing.name,
            des : editing.des,
            price : editing.price,
            img : editing.img
        })
        setShow(true)

        console.log(editing.id);
    }
    
  return (
    
    <div id='formmain'>
        <Button variant='success' onClick={pageChange}>Product Page</Button>

        {
            loading ? (<h1>"Loading..."</h1>) : (
            show ? (<div id='formsub'>
            <h1>Add On Snapdeal</h1>
            
            <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Brand Name</Form.Label>
        <Form.Control type="text" name='brand' value={input.brand} placeholder="Enter Product Brand Name" onChange={getInputValue}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} placeholder="Enter Product Name" onChange={getInputValue}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" name='des' value={input.des} placeholder="Enter Product Description" onChange={getInputValue}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name='price' value={input.price} placeholder="Enter Product Price" onChange={getInputValue}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="text" name='img' value={input.img} placeholder="Enter Product ImageURL" onChange={getInputValue}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        {input.id ? "Edit" : "Submit"}
      </Button>
    </Form>
    
        </div>) : (<Result proArr={proArr} deleteData={deleteData} handleEdit={handleEdit}/>)
        )}
    </div>
  )
}

export default FormInput