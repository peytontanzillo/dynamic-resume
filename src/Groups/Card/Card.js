import React from 'react';
import './Card.css';

function Card({
  image,
  title,
  subtitle,
  points,
  startTime,
  endTime
}) {
  const pointListElements = [];
  for (const point of points) {
    pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
  }
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-image">{image}</div>
        <div className="card-title-container">
          <h2 className="card-title">{title}</h2>
          <h4 className="card-subtitle">{subtitle}</h4>
        </div>
      </div>
      <ul className="card-point-list">
        {pointListElements}
      </ul>
    </div>
  );
}

export default Card;