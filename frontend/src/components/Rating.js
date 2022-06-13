import React from "react";

const Star = ({ value }) => {
  return (
    <span>
      <i
        style={{ color: "yellow" }}
        className={
          value === 1
            ? "fa-solid fa-star"
            : value === 0.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
        }
      ></i>
    </span>
  );
};

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <Star value={value >= 1 ? 1 : value >= 0.5 ? 0.5 : 0} />
      <Star value={value >= 2 ? 1 : value >= 1.5 ? 0.5 : 0} />
      <Star value={value >= 3 ? 1 : value >= 2.5 ? 0.5 : 0} />
      <Star value={value >= 4 ? 1 : value >= 3.5 ? 0.5 : 0} />
      <Star value={value >= 5 ? 1 : value >= 4.5 ? 0.5 : 0} />

      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
