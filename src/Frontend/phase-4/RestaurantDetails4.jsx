// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./App.css";

// const RestaurantDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [restaurant, setRestaurant] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // axios
//     //   .get(`http://localhost:5400/restaurants/${id}`)
//     //   .then((response) => {
//     //     setRestaurant(response.data);
//     //     setLoading(false);
//     //   })
//     //   .catch((error) => {
//     //     setError("Failed to fetch restaurant details.");
//     //     setLoading(false);
//     //   });

//     axios
//   .get(`http://localhost:5400/restaurants/${id}`)
//   .then((response) => {
//     setRestaurant(response.data.restaurant); // Ensure correct data extraction
//     setLoading(false);
//   })
//   .catch(() => {
//     setError("Failed to fetch restaurant details.");
//     setLoading(false);
//   });

//   }, [id]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="restaurant-detail-container">
//       <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>

//       <h1 className="restaurant-title">{restaurant.restaurant}</h1>
//       <img
//         src={restaurant.image || "/default-restaurant.jpg"}
//         alt={restaurant.restaurant}
//         className="restaurant-detail-image"
//       />
//       <p className="restaurant-city">📍 Location: {restaurant.city}</p>
//       <p className="restaurant-description">
//         🍽️ A wonderful place for delicious food and a great ambiance.
//       </p>
//     </div>
//   );
// };

// export default RestaurantDetails;

import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantDetails4.css";

const RestaurantDetails4 = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

  useEffect(() => {
    axios
      // .get(`http://localhost:5401/restaurants/${id}`)
      .get(`https://zomato-clone-backend-8jfr.onrender.com/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data.restaurant);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch restaurant details.");
        setLoading(false);
      });
  }, [id]);

  
  const averageRating = useMemo(() => {
    return restaurant?.reviews?.length
      ? (restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) / restaurant.reviews.length).toFixed(1)
      : "No Ratings Yet";
  }, [restaurant?.reviews]);

  if (loading) return <p className="loading">⏳ Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="restaurant-wrapper">
      <button onClick={() => window.history.back()} className="back-btn">⬅ Go Back</button>

      <h1 className="restaurant-name">{restaurant?.restaurant}</h1>

      <img 
        src={restaurant?.img?.trim() ? restaurant.img : "/default-restaurant.jpg"} 
        alt={restaurant?.restaurant || "Restaurant"} 
        className="restaurant-img"
        onError={(e) => {
          if (e.target.src !== "/default-restaurant.jpg") {
            e.target.src = "/default-restaurant.jpg";
          }
        }} 
      />

      <p className="restaurant-location">📍 Location: {restaurant?.city}</p>
      <p className="restaurant-info">🍽️ A wonderful place for delicious food and a great ambiance.</p>
      <p className="restaurant-rating">⭐ {averageRating} / 5</p>

      <div className="reviews-container">
        <h2>Customer Reviews</h2>
        {restaurant?.reviews?.length > 0 ? (
          restaurant.reviews.map((review, index) => (
            <div key={index} className="review-box">
              <p className="review-author"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
              <p className="review-text">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      <div className="add-review">
        <h2>Add a Review</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (newReview.username && newReview.comment) {
            // axios.post(`http://localhost:5401/restaurants/${id}/reviews`, newReview)
            axios.post(`http://localhost:5401/restaurants/${id}/reviews`, newReview)
              .then((response) => {
                setRestaurant({ ...restaurant, reviews: response.data.reviews });
                setNewReview({ username: "", rating: 5, comment: "" });
              })
              .catch(() => alert("⚠️ Failed to submit review"));
          }
        }} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
            required
          />
          <select 
            value={newReview.rating} 
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>{rating} Stars</option>
            ))}
          </select>
          <textarea
            placeholder="Write a review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantDetails4;
