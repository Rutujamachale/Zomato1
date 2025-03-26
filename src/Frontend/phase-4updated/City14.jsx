import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./App.css";


const City14 = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all restaurants to extract unique cities
    axios
      .get("http://localhost:5401/restaurants")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueCities = [
            ...new Set(response.data.map((r) => r.city)),
          ];
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
      .get(`http://localhost:5401/getRestaurantsByCity/${city}`)
      .then((response) => {
        if (response.data.restaurantList && Array.isArray(response.data.restaurantList)) {
          setRestaurants(response.data.restaurantList);
        } else {
          setRestaurants([]);
        }
      })
      .catch((error) => {
        setError("Failed to fetch restaurants.");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Zomato Clone 🍽️</h1>

      {/* Dropdown to select a city */}
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

      {/* Loading & Error Messages */}
      {loading && <p className="loading">Loading restaurants...</p>}
      {error && <p className="error">{error}</p>}

      {/* Restaurant List */}
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              {/* Link to restaurant details page */}
              <Link to={`/restaurants/${restaurant.id}`} className="restaurant-link">
                <img
                  src={restaurant.img || "/default-restaurant.jpg"} // Default image if not provided
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

export default City14;