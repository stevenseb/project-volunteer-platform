import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  info: string;
  points: string[];
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, info, points, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="Card Icon" className="card-icon" />
        <span className="card-title">{title}</span>
        <span className="card-info">{info}</span>
      </div>
      <div className="card-content">
        <ul className="card-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button className="join-now-button">Join Now</button>
      </div>
    </div>
  );
};

export default Card;