import React from "react";

const Card = ({ className, cardText, showFront }) => {
  const customClass = showFront ? "" : "back bg-dark-green";
  const text = showFront ? cardText.front : cardText.back;

  return (
    <div className={`neo-box ${className} ${customClass}`}>
      <div className="inner-text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Card;
