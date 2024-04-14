import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hello = ({ name }) => {
  return (
    <div className="hello">
    <div className="user_greet">
      <h2>Здравствуйте, {name}</h2>
    </div>
    </div>
  );
 
};

export default CashbackCard;
