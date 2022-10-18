import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Rating({ rate, onClick }) {
  //   const [rating, setRating] = useState(4);

  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} onClick={() => onClick(index + 1)}>
            {rate > index ? (
              <FaStar fontSize="30px" color="orange" />
            ) : (
              <FaRegStar fontSize="30px" color="orange" />
            )}
          </span>
        );
      })}
    </>
  );
}

export default Rating;
