// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";


// const RestaurantsCity4 = () => {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch all restaurants to extract unique cities
//     axios
//       // .get("http://localhost:5401/restaurants")
//       .get("https://zomato-clone-backend-8jfr.onrender.com/restaurants")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           const uniqueCities = [...new Set(response.data.map((r) => r.city))];
//           setCities(uniqueCities);
//         }
//       })
//       .catch((error) => console.error("Error fetching cities:", error));
//   }, []);

//   const handleCityChange = (event) => {
//     const city = event.target.value;
//     setSelectedCity(city);
//     setLoading(true);
//     setError(null);

//     axios
//       // .get(`http://localhost:5401/getRestaurantsByCity/${city}`)
//             .get(`https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/${city}`)
//       .then((response) => {
//         if (response.data.restaurantList && Array.isArray(response.data.restaurantList)) {
//           setRestaurants(response.data.restaurantList);
//         } else {
//           setRestaurants([]);
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to fetch restaurants.");
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Zomato Clone 🍽️</h1>

//       {/* Dropdown to select a city */}
//       <div className="dropdown-container">
//         <label>Select a City: </label>
//         <select onChange={handleCityChange} value={selectedCity}>
//           <option value="">-- Select --</option>
//           {cities.map((city, index) => (
//             <option key={index} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Loading & Error Messages */}
//       {loading && <p className="loading">Loading restaurants...</p>}
//       {error && <p className="error">{error}</p>}

//       {/* Restaurant List */}
//       <div className="restaurant-list">
//         {restaurants.length > 0 ? (
//           restaurants.map((restaurant) => (
//             <div key={restaurant.id} className="restaurant-card">
//               {/* Link to restaurant details page */}
//               <Link to={`/restaurants/${restaurant.id}`} className="restaurant-link">
//                 <img
//                   src={restaurant.img && restaurant.img.trim() !== "" ? restaurant.img : "/default-restaurant.jpg"}
//                   alt={restaurant.restaurant}
//                   className="restaurant-image"
//                   onError={(e) => (e.target.src = "/default-restaurant.jpg")} // Fallback for broken images
//                 />
//                 <div className="restaurant-details">
//                   <h2>{restaurant.restaurant}</h2>
//                   <p>📍 {restaurant.city}</p>
//                 </div>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p className="no-data">No restaurants found for this city.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantsCity4;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RestaurantsCity4 = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cities on mount
  useEffect(() => {
    axios
      // .get("https://zomato-clone-backend-8jfr.onrender.com/restaurants")
      .get("https://zomato-clone-backend-w4z0.onrender.com/restaurants")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueCities = [...new Set(response.data.map((r) => r.city))];
          setCities(uniqueCities);
        } else {
          console.error("Invalid response structure:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  // Handle city selection and fetch restaurants
  const handleCityChange = (event) => {
    const city = event.target.value;
    if (!city) return; // Don't fetch if no city is selected

    console.log("Selected City:", city); // Debugging: log selected city

    setSelectedCity(city);
    setLoading(true);
    setError(null);

    // Fetch restaurants based on selected city
    axios
      // .get(`https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/${city}`)
      .get(`https://zomato-clone-backend-w4z0.onrender.com/getRestaurantsByCity/${city}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging: log API response

        if (response.data && response.data.restaurantList && Array.isArray(response.data.restaurantList)) {
          setRestaurants(response.data.restaurantList);
        } else {
          setRestaurants([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch restaurants.");
        setLoading(false);
        console.error("Error fetching restaurants:", error);
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
              <Link to={`/restaurants/${restaurant.id}`} className="restaurant-link">
                <img
                  src={restaurant.img && restaurant.img.trim() !== "" ? restaurant.img : "/default-restaurant.jpg"}
                  alt={restaurant.restaurant}
                  className="restaurant-image"
                  onError={(e) => (e.target.src = "/default-restaurant.jpg")} // Fallback for broken images
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

export default RestaurantsCity4;
