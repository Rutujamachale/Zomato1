import React from "react";
import './ZomatoLogin.css';
import { Link } from "react-router-dom";

const ZomatoLogin=()=>{
    return(
        <div>
<div class="login-container"/>
        <div class="login-box"/>
            <h2>Login</h2>
            <form >
                <div class="input-group">
                    <input type="number" id="phone" name="phone" placeholder="Enter your phone number" required/>
                </div>
                <button type="submit" class="login-btn">Send One Time Password</button>
            </form>
            <p class="or-divider">or</p>
            <div class="email-login">
               
                <button class="social-btn email">
                    <i class="fas fa-envelope"></i> Continue with Email
                </button>
                <br/><br/>
                <button class="social-btn google">
                    <i class="fab fa-google"></i> Sign in with Google
                </button>
            </div>
            <p class="signup-text"> 
                  
                   New to Zomato? <a href="ZomatoSignup.html">Create account</a>
                 
               
            </p>
</div>

    
    
        
    )
}
export default ZomatoLogin;