import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const NoCards = () => {
  return (
    <div className="no-cards-container">
      <h2>На данный момент вы не добавили ни одной карты.</h2>
      <p>Хотите добавить?</p>
      <button className='btn btn-lg' style={{ backgroundColor: '#C1FF72' }}>Добавить карту</button>
    </div>
  );
};

export default NoCards;
