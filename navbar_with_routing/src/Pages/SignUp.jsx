import { Link } from "react-router-dom"
import "./SignUp.modules.css"

function SignUp() {
  return (
    <>
    <div className="form-container">
    <div className="form">
        <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Your Fullname" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Email Address" required/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Set Password" required/>
       <i className="fa fa-eye" id="eye-icon"           onClick="togglePassword()"></i>
        <input type="checkbox" className="term" id="terms" name="terms" required/>
        <label htmlFor="terms">I agree to the Terms and Conditions</label>
        <button type="submit">Create Account</button>
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