// src/components/StarRating.js
import React, { useState } from 'react';
import Star from './Star';
//import '../App.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };

  const ratingWords = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <div>
      <h2>{rating > 0 ? ratingWords[rating - 1] : 'Rate this'}</h2>
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            selected={index < rating}
            onClick={() => handleRating(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
