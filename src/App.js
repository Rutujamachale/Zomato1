import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; 


import Index from './Zomato-Clone/Index';
import AddReastrunts from './Zomato-Clone/AddReastrunts';
import InvestorRelations from './Zomato-Clone/InvestorRelations';
import ZomatoLogin from './Navigation/ZomatoLogin';
import Signup1 from './Zomato-Clone/Signup1';
import Menu from './Navigation/Menu';
import Login from "./Navigation/Login";
import Financials from "./Navigation/Finincials";
import Announcement from "./Navigation/Announcement";
import Goverance from "./Navigation/Goverance";
import Resource from "./Navigation/Resource";
import Blog from "./Navigation/Blog";
import Account from "./Navigation/Account";
import ESG from "./Navigation/ESG";
import Restaurants from "./Frontend/Restaurants";

import RestaurantDetails from "./Frontend/RestaurantDetails";
import RestaurantsByCity from "./Frontend/RestaurantsByCity";
import RestaurantsCity from "./Frontend/phase-2/RestaurantsCity";
import RestaurantD from "./Frontend/phase-3/RestaurantD";
import RestaurantsCity1 from "./Frontend/phase-3/RestaurantsCity1";
import Restaurants1 from "./Frontend/phase-3/Restaurants1";
import RestaurantsCity4 from "./Frontend/phase-4/RestaurantsCity4";
import RestaurantDetails4 from "./Frontend/phase-4/RestaurantDetails4";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<Index />} />
          <Route path="/add" element={<AddReastrunts />} />
          <Route path="/about" element={<InvestorRelations />} />
          <Route path="/contact" element={<ZomatoLogin />} />
          <Route path="/sign" element={<Signup1 />} />
          <Route path="/add/menu" element={<Menu />} />
          <Route path="/add/login" element={<Login/>} /> 
          <Route path="/add/account" element={<Account/>} /> 
          <Route path="/about/finincials" element={<Financials />} />
          <Route path="/about/announcement" element={<Announcement />} />
          <Route path="/about/goverance" element={<Goverance />} />
          <Route path="/about/resource" element={<Resource />} />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/esg" element={<ESG />} />
            {/* <Route path="/rest" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/getRestaurantsByCity/:city" element={<RestaurantsByCity/>} /> 

          <Route path="/City/:city" element={<RestaurantsCity/>} />
          
          <Route path="/Details/:" element={<Restaurants1/>} />
          <Route path="/Details/:id" element={<RestaurantD/>} />
          <Route path="/CityDetails/:city" element={<RestaurantsCity1/>} /> */}
          {/* <Route path="/Details4/" element={<Restaurants4/>} /> */}

          {/* <Route path="/RestoCity" element={<RestaurantsCity4/>} />
          <Route path="/Resto/:id" element={<RestaurantDetails4/>} /> */} 
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/getRestaurantsByCity/:city" element={<RestaurantsByCity/>} />
        <Route path="/RestoCity" element={<RestaurantsCity4/>} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
