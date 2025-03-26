import React from 'react';
import { Link } from 'react-router-dom';  
import './AddReastrunts.css';
import Product from "./Product";
const AddReastrunts = () => {
  return (
    <div>
      <div className="top">
        <div className="logo">Zomato</div>
      </div>
      <div className="reastrunt-header-right flex">
        <div className="reastrunt-product-menu">
          <p>Product</p>
        </div>
        <Link to="/add/login">
  <button>Login</button>
</Link>

        <div className="reastrunt-createAccount">
        <Link to="/add/account">
  <button>Account</button>
</Link>
        </div>
      </div>

      <div className="heading">
        <div className="left">
          <p>Are You Hungry?</p>
          <h1>Don't Wait</h1>
          <p>Let's start to order food now</p>
          
         
          <Link to="/add/menu">
  <button>Check Menu</button>
</Link>
<Product></Product>
          
          <div className="add1">
            <img
              src="https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg"
              alt="Food 1"
            />
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHz1oghCMfie_4AOsUF0JwofGnAItBiH-hKQ&s"
              alt="Food 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReastrunts;
