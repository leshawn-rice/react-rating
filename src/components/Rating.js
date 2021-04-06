import React, { useState } from 'react';
import Star from './Star';
import '../styles/Rating.css';

const Rating = ({ numStars = 5 }) => {
  const INITIAL_STARS = []

  for (let i = 0; i < numStars; i++) {
    INITIAL_STARS.push({ id: i, on: false });
  }

  const [stars, setStars] = useState(INITIAL_STARS);
  const [lastId, setLastId] = useState(null);
  return (
    <div className="Rating">
      <h1>Rate Us!</h1>
      <div className="Stars">
        {stars.map(star => <Star key={star.id} star={star} stars={stars} setStars={setStars} lastId={lastId} setLastId={setLastId} />)}
      </div>
    </div>
  )
}

export default Rating;