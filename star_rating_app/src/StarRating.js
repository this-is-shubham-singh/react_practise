import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./App.css";

const StarRating = () => {
  const [stars, setStars] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        let color = false;
        if (i < stars) {
          color = true;
        } else {
          color = false;
        }
        return (
          <div
            key={i}
            onClick={() => {
              setStars(i + 1);
            }}
          >
            <FaStar className={color ? 'active': ''} size={24} />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
