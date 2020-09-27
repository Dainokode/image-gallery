import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/random" alt="photo" />
      <div className="card-text">
        <h3>Photo by John Doe</h3>
      </div>
      <div className="card-stats">
        <ul>
          <li>
            <strong>Views: 1000</strong>
          </li>
          <li>
            <strong>Downloads: 250</strong>
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
