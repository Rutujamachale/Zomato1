import React from "react";
import './Signup1.css';
const Signup1 = () => { 
    return (
        <div>
            <div className="signup-container">
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Full Name" required />
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>

                        <button type="submit" className="signup-btn">Create Account</button>
                    </form>
                    <p className="or-divider">or</p>
                    <div className="social-signup">
                        <button className="social-btn google">
                            <i className="fab fa-google"></i> Sign Up with Google
                        </button>
                    </div>
                    <p className="login-text">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup1;
