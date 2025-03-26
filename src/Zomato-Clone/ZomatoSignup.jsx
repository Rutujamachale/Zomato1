import React from "react";
import './ZomatoSignup.css';
const ZomatoSignup=()=>{
    return(
        <div>
            <div class="signup-container"/>
        <div class="signup-box"/>
            <h2>Sign Up</h2>
            <form >
                <div class="input-group">
                    <input type="text" id="name" name="name" placeholder="Full Name" required/>
                </div>
                <div class="input-group">
                    <input type="email" id="email" name="email" placeholder="Email " required/>
                </div>
               
                <button type="submit" class="signup-btn">Create account</button>
            </form>
            <p class="or-divider">or</p>
            <div class="social-signup">
               
                <button class="social-btn google">
                    <i class="fab fa-google"></i> Sign Up with Google
                </button>
            </div>
            <p class="login-text">
                Already have an account? <a href="ZomatoLogin.html">Login here</a>
            </p>
        </div>
    
    )
}
export default ZomatoSignup;