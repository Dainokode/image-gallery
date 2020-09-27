import React from "react";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image.webformatURL} alt="photo" />
      <div className="card-text">
        <h3>Photo by {image.user}</h3>
      </div>
      <div className="card-stats">
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: 100</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
