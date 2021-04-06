import React from 'react';
import '../styles/Star.css';

const Star = ({ star, setStars, stars, lastId, setLastId }) => {
  const toggleStar = (evt) => {
    const id = parseInt(evt.target.dataset.id);
    const target = stars.find(s => s.id === id);
    const newStars = stars.map(s => s);
    newStars.forEach(star => {
      // Star is before target
      if (star.id < id) {
        // Target is off, turn on
        if (!target.on) {
          star.on = true;
        }
        // Target is on & has been clicked twice, turn off
        else if (lastId === id) {
          star.on = false;
        }
      }
      // Star is target
      else if (star.id === id) {
        // Target has been clicked twice, turn off
        if (id === lastId) {
          star.on = false;
        }
        // Otherwise, turn on
        else {
          star.on = true;
        }
      }
      // Star is after targt, turn off
      else {
        star.on = false;
      }
    });
    setStars(curr => newStars);
    if (id === lastId) {
      setLastId(null);
    }
    else {
      setLastId(id);
    }
  }

  const highlightStars = (evt) => {
    let curr = evt.target;
    let sibling = curr.previousElementSibling;
    curr.style.color = 'gold';
    while (sibling) {
      sibling.style.color = 'gold';
      curr = sibling;
      sibling = curr.previousElementSibling;
    }
  }

  const removeHighlight = (evt) => {
    let curr = evt.target;
    let sibling = curr.previousElementSibling;
    curr.style.color = null
    while (sibling) {
      sibling.style.color = null;
      curr = sibling;
      sibling = curr.previousElementSibling;
    }
  }

  if (star.on) {
    return (
      <button
        onMouseLeave={removeHighlight}
        onMouseOver={highlightStars}
        onClick={toggleStar}
        data-id={star.id}
        className="Star Star-Filled">&#9733;</button>
    )
  }

  return (
    <button
      onMouseLeave={removeHighlight}
      onMouseOver={highlightStars}
      onClick={toggleStar}
      data-id={star.id}
      className="Star Star-Empty">&#9734;</button>
  )
}

export default Star;