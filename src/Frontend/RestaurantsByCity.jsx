import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantsByCity.css";


const RestaurantsByCity = () => {
  const { city } = useParams(); // Get city from URL
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      // .get(`http://localhost:5401/getRestaurantsByCity/${city}`)
      // .get(`https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/${city}`)
      .get(`https://zomato-clone-backend-w4z0.onrender.com/getRestaurantsByCity/${city}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data.restaurantList)) {
          setRestaurants(response.data.restaurantList);
        } else {
          console.error("Unexpected API response:", response.data);
          setRestaurants([]); // Fallback to empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="restaurants-container">
     

      <h2 className="restaurants-title">Restaurants in {city}</h2>

      {restaurants.length > 0 ? (
        <ul className="restaurants-list">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="restaurant-card">
              <strong className="restaurant-name">{restaurant.restaurant}</strong>
              <span className="restaurant-city">📍 {restaurant.city}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-restaurants">No restaurants found in this city.</p>
      )}
    </div>
  );
};

export default RestaurantsByCity;
