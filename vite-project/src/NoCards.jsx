import React from 'react';
import { useHistory } from 'react-router-dom'; // make sure you have react-router-dom installed

const NoCards = () => {
  const history = useHistory();

  const handleAddCardClick = () => {
    // Redirect to the add card page
    history.push('/add-card'); // assuming '/add-card' is the route to add a new card
  };

  return (
    <div className="no-cards-container">
      <h2>На данный момент вы не добавили ни одной карты.</h2>
      <p>Хотите добавить?</p>
      <button className="btn btn-success" onClick={handleAddCardClick}>Добавить карту</button>
    </div>
  );
};

export default NoCards;
