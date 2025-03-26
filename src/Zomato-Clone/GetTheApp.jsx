import React from "react";
import './GetTheApp.css';
const GetTheApp = () => {
    return (
        <div>
            <div class="app-section" />
            <div class="app">
                <div class="app-image">
                    <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />
                </div>
                <div class="get-app">
                    <h2>Get the zomato app</h2>
                    <p>We will send you a link,open it on your phone to download the app</p>
                    <div class="email-phone">
                        <input type="radio" name="email" id="email" />
                        <label for="email">Email</label>
                        <input type="radio" name="phone" id="phone" />
                        <label for="phone">Phone</label><br />
                    </div>
                    <div class="submit">
                        <input type="text" placeholder="Email" />
                        <button>Share App Link</button>
                    </div>
                    <div class="app-store">
                        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                    </div>
                </div>
            </div>
        </div>



    )
}
export default GetTheApp;