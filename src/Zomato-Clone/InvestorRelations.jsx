import React from "react";
import './Investor Relations.css';
import { Link } from "react-router-dom";

const InvestorRelations=()=>{
    return(
        <div>
            <div class="Investor-header">
        <div class="Investor-logo">
            <div class="Investor-logo-image">
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Investor Relations Logo"/>
            </div>
            <h2>Investor Relations</h2>
        </div>
        <nav class="nav4">
            <ul>
                <li><a href="#">Home</a></li>
                <Link to="/about/finincials">
  <li>Finincials</li>
</Link>
<Link to="/about/announcement">
  <li>Announcement</li>
</Link>
<Link to="/about/blog">
  <li>Blog</li>
</Link>
                <Link to="/about/goverance">
  <li> Goverance</li>
</Link>
<Link to="/about/esg">
  <li>ESG</li>
</Link>
                <Link to="/about/resource">
  <li>Resource</li>
</Link>
            </ul>
        </nav>
    </div>
    <div class="slide-image-container">
        <div class="slide-image-list">
            <div class="slide-image-item">
                <div class="slide-image-Image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvJbocoetCKIgzliwolyJXvwJ8bwpc4TqYw&s" alt="" />
                </div>
                <div class="container">
                <div class="slide-image-content">
                <div>
                    <div class="big-text">14.90 million</div>
                    <div class="small-text">Average Monthly trancting customer</div>
                </div>
                <button>*FY2014</button>
               </div>
                </div>
               
            </div>
        </div>
    </div>
        </div>
    )
}
export default InvestorRelations;