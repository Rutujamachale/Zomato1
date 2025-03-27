import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./RestaurantDetails.css"; 

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      // .get(`http://localhost:5401/restaurants/${id}`)
      // .get(`https://zomato-clone-backend-8jfr.onrender.com/restaurants/${id}`)
      .get(`https://zomato-clone-backend-w4z0.onrender.com/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data.restaurant);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch restaurant details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="restaurant-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Go Back</button>

      {/* Restaurant Card */}
      <div className="restaurant-card">
        <h1 className="restaurant-name">{restaurant.restaurant}</h1>

        {/* Image with Proper Handling */}
        <img 
          src={restaurant.img || "/default-restaurant.jpg"} 
          alt={restaurant.restaurant} 
          className="restaurant-image"
        />

        <p className="restaurant-location">📍 Location: {restaurant.city}</p>

        {/* More Restaurants Link */}
        <p className="more-restaurants">
          <Link to={`/getRestaurantsByCity/${restaurant.city}`} className="more-restaurants-link">
            🔍 See more restaurants in {restaurant.city}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetails;

