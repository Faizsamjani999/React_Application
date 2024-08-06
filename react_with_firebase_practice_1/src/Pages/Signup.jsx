import React, { useState } from 'react'
import "./Signup.modules.css"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase/firebase"
import { useNavigate } from 'react-router-dom'

const obj = {
    fname : "",
    lname : "",
    email : "",
    password : ""
}

function Signup() {
    const [state,setState] = useState(obj) 
    
    const userCollection = collection(db,"registerUser")

    const navigate = useNavigate();

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setState({...state,[name]: value})
    }
    

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(state);
        
        

        await addDoc(userCollection,state)
        alert("Data Register Successfully....")
        setState(obj)
    }
    const showData = ()=>{
        navigate("/showData")
    }
    
  return (
    <div className="container">
    <div className="login-box">
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="textbox">
                <label htmlFor="email">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Enter your First Name" value={state.fname} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="email">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Enter your Last Name" value={state.lname} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" value={state.email} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={state.password} required onChange={handleChange} />
            </div>
            <button type="submit" className="btn">Submit</button><br /><br /><br />
            
        </form>
        
        <button className="btn" style={{backgroundColor:"red"}} onClick={showData}>Show Register Data</button>
    </div>
</div>
  )
}

export default Signup