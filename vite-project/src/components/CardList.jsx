import React from 'react';
import BankCard from './BankCard'; // Make sure this is the path to your BankCard component
const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      <div className="card-container" style={{ display: 'flex', overflowX: 'auto' }}>
      {cards.map(card => (
        <BankCard
          key={card.id} // Unique identifier for each card
          bankName={card.bankName}
          cardNumber={card.cardNumber}
          cardType={card.cardType}
        />
      ))}
      </div>
    </div>
  );
};

export default CardList;
