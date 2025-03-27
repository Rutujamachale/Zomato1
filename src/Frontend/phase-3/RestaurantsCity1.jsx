import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RestaurantsCity1.css";

const RestaurantsCity1 = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      // .get("http://localhost:5401/restaurants")
      .get("https://zomato-clone-backend-w4z0.onrender.com/restaurants")
      .then((response) => {
        console.log("All restaurants response:", response.data);
        if (response.data && Array.isArray(response.data)) {
          const uniqueCities = [...new Set(response.data.map((r) => r.city))];
          setCities(uniqueCities);
        }
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLoading(true);
    setError(null);

    axios
      // .get(`http://localhost:5401/getRestaurantsByCity/${city}`)
      // .get(`https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/${city}
      .get(`https://zomato-clone-backend-w4z0.onrender.com/getRestaurantsByCity/${city}
}
`)
      .then((response) => {
        console.log("Restaurants in city:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setRestaurants(response.data);
        } else if (response.data.restaurantList) {
          setRestaurants(response.data.restaurantList);
        } else {
          setRestaurants([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
        setError("⚠️ Failed to fetch restaurants.");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Zomato Clone 🍽️</h1>

      <div className="dropdown-container">
        <label>Select a City: </label>
        <select onChange={handleCityChange} value={selectedCity}>
          <option value="">-- Select --</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="loading">Loading restaurants...</p>}
      {error && <p className="error">{error}</p>}

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <Link to={`/restaurant/${restaurant.id}`} className="restaurant-link">
                <img
                  src={restaurant.img ? restaurant.img : "/default-restaurant.jpg"} // Fixed image issue
                  alt={restaurant.restaurant}
                  className="restaurant-image"
                />
                <div className="restaurant-details">
                  <h2>{restaurant.restaurant}</h2>
                  <p>📍 {restaurant.city}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-data">No restaurants found for this city.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantsCity1;
