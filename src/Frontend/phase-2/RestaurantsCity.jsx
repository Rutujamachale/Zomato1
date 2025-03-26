import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RestaurantsCity.css";

const RestaurantsCity = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:5401/restaurants")
    axios.get("https://zomato-clone-backend-8jfr.onrender.com/restaurants")
      .then((response) => {
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
    setRestaurants([]);
    setLoading(true);
    setError(null);

    // axios.get(`http://localhost:5401/getRestaurantsByCity/${city}`)
    axios.get(`https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/${city}`)
      .then((response) => {
        if (response.data.restaurantList && Array.isArray(response.data.restaurantList)) {
          setRestaurants(response.data.restaurantList);
        } else {
          setRestaurants([]);
        }
      })
      .catch(() => {
        setError("Failed to fetch restaurants.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="restaurants-container">
      <h1 className="app-title">Zomato Clone 🍽️</h1>

      <div className="city-dropdown">
        <label className="city-label">Select a City: </label>
        <select className="city-select" onChange={handleCityChange} value={selectedCity} disabled={loading}>
          <option value="">-- Select --</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {loading && <p className="loading-message">Loading restaurants...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h2 className="restaurant-name">{restaurant.restaurant}</h2>
              <p className="restaurant-location">📍 {restaurant.city}</p>
            </div>
          ))
        ) : (
          <p className="no-data-message">No restaurants found for this city.</p>
        )}
      </div>
    </div>
  );
};
export default RestaurantsCity;
