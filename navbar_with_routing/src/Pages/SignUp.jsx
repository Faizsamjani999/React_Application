import { Link, Navigate, useNavigate } from "react-router-dom"
import "./SignUp.modules.css"
import { useState } from "react"

let obj = {
  name : "",
  email : "",
  password : ""
}

function SignUp() {

   const [state,setState] = useState(obj)

   let navigateLink = useNavigate()

   const handleChange = (e)=>{
    setState({...state,[e.target.name]:e.target.value})
   }
   
   const handleClick = (e)=>{
    e.preventDefault();
    setState({
      name : "",
      email : "",
      password : ""
    })
    fetch('http://localhost:3000/user',{
      method : 'POST',
      headers : 
        {'Content-Type' : 'application/json'},
      body : JSON.stringify(state)
    })
    .then((res)=>res.json)
    .then((res)=>{
      console.log(res);
    })
    navigateLink("/login")
  
   }

   
   

  return (
    <>
    <div className="form-container">
    <div className="form">
        <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Fullname" value={state.name} required  onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Email Address" value={state.email} required onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Set Password" value={state.password} required onChange={handleChange}/>
       <i className="fa fa-eye" id="eye-icon"           onClick="togglePassword()"></i>
        <input type="checkbox" className="term" id="terms" name="terms" required/>
        <label htmlFor="terms">I agree to the Terms and Conditions</label>
        <button type="submit" onClick={handleClick}>Create Account</button>
        <Link to="/login"><a>Already have an account? <span>Login</span></a></Link>
      </div>
    <div className="image-container">

       <img src="https://cdn-lite.ip2location.com/img/sign-up.png"/>

    </div>
  </div>
    </>
  )
}

export default SignUp