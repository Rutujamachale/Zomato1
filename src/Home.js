import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{

return(
    <div>
        <a href="#">Logo</a>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li> 
            <Link to="/add/Menu">AddReastrunts</Link>
            <a href="/add/Menu"></a>
            </li>
            <li> 
            <Link to="/about">InvestorRelations</Link>
            <a href="/about"></a>
            </li>
            <li>
            <Link to="/contact">ZomatoLogin</Link>
            <a href="/contact"></a>
            </li>
            <li>
            <Link to="/sign">Signup1</Link>
            <a href="/sign"></a>
            </li>
           
        </ul>
        </nav>
    </div>
)

}
export default Home;