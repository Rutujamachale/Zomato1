import React from "react";
import './Index.css';
// import { useNavigate } from "react-router-dom";
import bg1 from './assets/bg1.webp';
import img1 from './assets/img1.avif';
import img2 from './assets/img2.avif';
import img4 from './assets/img4.jfif';
import zomato2 from './assets/zomato2.jpg';
import zomato4 from './assets/zomato4.jpg';
import zomato6 from './assets/zomato6.jpg';
import zomato9 from './assets/zomato9.jpg';
// import Product from "./Product";
import { Link } from "react-router-dom";
const Index = () => {
  
  return (
    <div>
      
      <div className="image-container">
      <img src={bg1} alt="Background image " />
      </div>

     <div>
      <div className="nav-section">
        <nav className="nav">
          <div className="nav1">
            <div className="logo-container">
              <p style={{ cursor: "pointer" }}>Get The App</p>
            </div>
            <ul>
            <a href="#">Logo</a>
        <nav>
        <ul>
            <li>
                <Link to="/add/">Add Restraunts</Link>
                <a href="/add/"></a>
            </li>
            <li> 
            <Link to="/about">Investor Relations</Link>
            <a href="/about"></a>
            </li>
            <li>
            <Link to="/contact">Login</Link>
            <a href="/contact"></a>
            </li>
            <li>
            <Link to="/sign">Signup</Link>
            <a href="/sign"></a>
            </li>
        </ul>
        </nav>
            </ul>
          </div>
        </nav>
      

      
      <div className="main-body">
        <div className="main-part">
          <img
            className="zomato-logo"
             img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="Zomato Logo"
          />
          <p class="heading">Discover the best food & drinks in Pune</p>
<div class="search-container">
    
<select
  id="city-dropdown"
  className="city-dropdown"
 
>
  <option value="" disabled selected>Select City</option>
  <option value="Pune">Pune</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Satara">Satara</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Delhi">Delhi</option>
</select>
    <input type="text" class="search-input" placeholder="Search for cuisine or place" />
</div>
        </div>
      </div>
      </div>

     {/* <Product></Product> */}
      
    <div className="Top1">

      <ul className="link">
        <li>
          <Link to='/RestoCity'>
          <div class="card1" style={  {width:"300px", marginTop:"40px", marginLeft:"10px"}}>
          <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"/>
 
          <div class="card-body1">
             <h5 class="card-title1">Online Order</h5>
           <p class="card-text">Stay home and order to your doorstrap.</p>
       
    
         </div>
         </div>
          </Link>
        </li>

      </ul>
   
     {/* <div class="card1" style={  {width:"300px", marginTop:"40px", marginLeft:"10px"}}>
  <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"/>
 
  <div class="card-body1">
    <h5 class="card-title1">Online Order</h5>
    <p class="card-text">Stay home and order to your doorstrap.</p>
    <a href="#" class="btn btn-primary">Click</a>
    
  </div>
</div> */}
<ul className="link">
        <li>
          <Link to='/RestoCity'>
<div class="card1" style={  {width:"300px", marginTop:"40px", }}>
  <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"/>
  <div class="card-body1">
    <h5 class="card-title1">Dinning</h5>
    <p class="card-text">Views the favourites city.</p>
    
   
  </div>
</div>
</Link>
        </li>

      </ul>
      <ul className="link">
        <li>
          <Link to='/RestoCity'>
<div class="card1" style={  {width:"300px", marginTop:"40px",marginRight:"60px"}}>
  <img src="https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*"/>
  <div class="card-body1">
    <h5 class="card-title1">Live Event</h5>
    <p class="card-text">Discover indias best event and concert.</p>
   
  </div>
</div>
</Link>
        </li>

      </ul>
</div>



      <div class="app-section"/>
        <div class="app">
            <div class="app-image">
                <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt=""/>
            </div>
            <div class="get-app">
                <h2>Get the zomato app</h2>
                <p>We will send you a link,open it on your phone to download the app</p>
                <div class="email-phone">
                    <input type="radio" name="email" id="email"/>
                    <label for="email">Email</label>
                    <input type="radio" name="phone" id="phone"/>
                    <label for="phone">Phone</label><br/>
                </div>
            <div class="submit">
                <input type="text" placeholder="Email"/>
                <button>Share App Link</button>
            </div>
            <div class="app-store">
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt=""/>
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt=""/>
            </div>
            </div>
        </div>
       </div>
     
      <div className="collections-near">
        <h1>Explore options near me</h1>
        <div className="option">
          <button>Popular cuisines near me</button>
        </div>
        <div className="option">
          <button>Popular Restaurant Types Near me</button>
        </div>
        <div className="option">
          <button>Top Restaurant Chains</button>
        </div>
        <div className="option">
          <button>Cities We Deliver</button>
        </div>
      </div>

     
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt="Zomato Footer Logo"
            />
            <div className="footer-btn">
              <button>India</button>
              <button>English</button>
            </div>
          </div>
          <div className="footer-links">
            <div className="column">
              <div>About Zomato</div>
              <ul className="col-links">
                <li><a href="#">Who we are</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Work with us</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Report Fraud</a></li>
                <li><a href="#">Press kit</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="column">
              <div>Zomaverse</div>
              <ul className="col-links">
                <li><a href="#">Zomato</a></li>
                <li><a href="#">Blinkit</a></li>
                <li><a href="#">Feeding India</a></li>
                <li><a href="#">Hyperpure</a></li>
                <li><a href="#">Zomato Live</a></li>
                <li><a href="#">Zomaland</a></li>
                <li><a href="#">Weather Union</a></li>
              </ul>
            </div>
            <div className="column">
              <div>For Restaurants</div>
              <ul className="col-links">
                <li><a href="#">Partner with you</a></li>
                <li><a href="#">Apps for you</a></li>
              </ul>
            </div>
            <div className="column">
              <div>Learn More</div>
              <ul className="col-links">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="column">
              <div>Social Links</div>
              <ul className="col-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Index;
