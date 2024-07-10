import { Link } from "react-router-dom"
import "./Login.modules.css"

function Login() {
  return (
    <div className="form-container">
        <div className="form">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Registered Email Address" required/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Registered Password" required/>
            <i className="fa fa-eye" id="eye-icon" onClick="togglePassword()"></i>
            <input type="checkbox" className="term" id="terms" name="terms" required/>
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
            <button type="submit">Login</button>
            <Link to="/signup"><a>Doesnt have an account? <span>Sign
            up</span></a></Link>
        </div>
        <div className="image-container">
            <img src="https://cdn-lite.ip2location.com/img/sign-up.png"/>
        </div>
    </div>
  )
}

export default Login