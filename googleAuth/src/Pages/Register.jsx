import React, { useState } from 'react'
import "../CSS/Register.css"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase/firebase'

let obj = {
    fullname : "",
    number : "",
    email : "",
}

function Register() {

    const [state,setState] = useState(obj)

    const registerUser = collection(db,"RegisterUser")

    const handleChange = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setState(obj)
        
       if(state.fullname == "" || state.number == "" || state.email == "")
       {
        alert("Please fill all the fields")
       }
       else{
        await addDoc(registerUser,state)
        alert("User Register...")
       }
    }
    

  return (
    <div className="container">
  <div className="content">
    <img
      src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp"
      alt="header-image"
      className="cld-responsive"
    />
    <h1 className="form-title">Register Here</h1>
    <form>
      <input type="text" placeholder="NAME" name='fullname' onChange={handleChange} value={state.fullname}/>
      <div className="beside">
        <input type="text" placeholder="PHONE NUMBER" name='number' onChange={handleChange} value={state.number}/>
      </div>
      <input type="email" placeholder="EMAIL ADDRESS" name='email'  onChange={handleChange} value={state.email}/>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>&nbsp;
      <button type='button'>Login Page</button><br />
      <button style={{width:"180px",backgroundColor:"dodgerblue",borderRadius:"20px",color:"yellow"}}>Sign Up With Google</button>
    </form>
  </div>
</div>

  )
}

export default Register