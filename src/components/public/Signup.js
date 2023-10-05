import React, {useState} from "react";
import { Navbar } from "../elements/Navbar.js";
import {Footer} from "../elements/Footer.js"
import "../../css/style.css";
import "./Signup.css"
const API_URL = process.env.REACT_APP_API_URL


const SignUp = () => {
    const [email, setEmail] = useState()

    function isValidEmail(email) {
        // Check if the email contains "@" and at least one "."
        return email.includes("@") && email.includes(".");
      }

    const subscribe = () => {
        isValidEmail(email) ? fetch(`${API_URL}/email`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email})
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                window.alert(res.error)
            }
            else {
                window.alert("Thanks for signing up to our email list! You will be notified when we launch. Have a great day.")
            }
            
        })
        :
        window.alert("Please enter a valid email address")
    }
return (
    <div className="signup">
    <div className="signup-div-2">
      <div className="signup-body">
        <div className="signup-section">
          <div className="signup-div-3">
            <div className="signup-heading">
              <p className="signup-text-wrapper">Sign Up For Our Waitlist To Save On Your Subscriptions</p>
              <p className="signup-p">
                Jybe is on a mission to help you access your favorite digital subscriptions for cheaper.
              </p>
              <p className="signup-text-wrapper-2">
              Digital subscriptions are becoming a key part of all of our lives. Jybe's platform will help you manage these subscriptions and access them at a cheaper monthly cost. Sign up with Jybe to save up to 20% off you subscriptions every month!
              </p>
              <div className="signup-frame-2">
                <div className="signup-input">
                  <input 
                  placeholder="Enter your email here"
                  className="signup-text-wrapper-3"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <button className="signup-buttons" onClick={subscribe} >
                  <div className="signup-default-2">Join Waitlist</div>
                </button>
              </div>
            </div>
            <div className="signup-frame-3">
              <div className="signup-frame-wrapper blue-border">
                <div className="signup-frame-4">
                  <div className="signup-header-wrapper blue-text">Over 20%</div>
                  <p className="signup-text-wrapper-5">
                  The amount you could save every month on your subscriptions
                  </p>
                </div>
              </div>
              <div className="signup-frame-wrapper green-border">
                <div className="signup-frame-4">
                  <div className="signup-header-wrapper green-text">Save $892.50</div>
                  <p className="signup-text-wrapper-5">
                  This is how much you could be saving each year by using Jybe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="signup-img" src="/waluigi.png"/>
        </div>
        <Footer/>
        <Navbar
          className="signup-navbar-instance"
          logo="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-2.svg"
        />
      </div>
    </div>
    </div>
)
}
export default SignUp