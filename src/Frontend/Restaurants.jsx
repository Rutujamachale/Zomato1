import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Restaurants.css"; 

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      // .get("http://localhost:5401/restaurants")
      .get("https://zomato-clone-backend-8jfr.onrender.com/restaurants")
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setRestaurants(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setRestaurants([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">Error: {error.message}</p>;

  return (
    <div className="restaurants-container">
      <h2 className="restaurants-heading">Restaurants List</h2>
      {restaurants.length > 0 ? (
        <ul className="restaurants-list">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="restaurant-item">
              <strong className="restaurant-name">
                <a href={`/restaurants/${restaurant.id}`} className="restaurant-link">
                  {restaurant.restaurant}
                </a>
              </strong> - {restaurant.city}
              <p className="restaurant-city">
                <a href={`/getRestaurantsByCity/${restaurant.city}`} className="city-link">
                  See more restaurants in {restaurant.city}
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-restaurants-text">No restaurants available.</p>
      )}
    </div>
  );
};

export default Restaurants;
