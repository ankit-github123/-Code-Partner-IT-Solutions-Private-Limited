import React from "react";
import ReactStarRating from "react-star-ratings-component";

import "./rating.css"
const Rating = () => {
  return (
      <div className="rating addidas-title">
      <div>
    <ReactStarRating
      numberOfStar={5}
      numberOfSelectedStar={0}
      colorFilledStar="#339E00"
      colorEmptyStar="#C4C4C4"
      starSize="20px"
      spaceBetweenStar="10px"
      disableOnSelect={false}
      onSelectStar={val => {
        
      }}
    />
    </div>
    <div>
        <h5 style={{color:"#50AB24"}}>4.1 Rating</h5>
    </div>
    </div>
  );
}

export default Rating;