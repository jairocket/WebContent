import React from "react";

import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  price,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 href={link} className="card-title">{title}</h1>}
      {price && <h1 className="card-price">{price}</h1>}
      {description && <p className="card-description">{description}</p>}
      
{/*       
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}  */}

    </div>
  );
};