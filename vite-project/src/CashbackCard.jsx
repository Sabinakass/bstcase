import React from 'react';
import './CashbackCard.css'; // Make sure to create a corresponding CSS file

const CashbackCard = ({ cashbackPercentage, condition }) => {
  return (
    <div className="cashback-card">
      <div className="card-body">
        <div className="cashback-info">
          <h2>Кэшбек: {cashbackPercentage}%</h2>
          <p>Условие: {condition}</p>
        </div>
      </div>
    </div>
  );
};

export default CashbackCard;
