import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RestaurantD.css";

const RestaurantD = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      // .get(`http://localhost:5401/restaurants/${id}`)
      .get(`https://zomato-clone-backend-8jfr.onrender.com/restaurants/${id}`)
      .then((response) => {
        console.log("Fetched Data:", response.data); // Debugging log
        setRestaurant(response.data.restaurant);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch restaurant details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="restaurant-detail-container">
      <h1 className="restaurant-title">{restaurant.restaurant}</h1>
      
      {/* Corrected Image Display */}
      <img
        src={restaurant.img || "/default-restaurant.jpg"} 
        alt={restaurant.restaurant}
        className="restaurant-detail-image"
      />

      <p className="restaurant-city">📍 Location: {restaurant.city}</p>
      <p className="restaurant-description">
        🍽️ A wonderful place for delicious food and a great ambiance.
      </p>
    </div>
  );
};

export default RestaurantD;
