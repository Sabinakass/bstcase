import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const NavigationBar = ({ isLoggedIn, userProfilePic, onProfileClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
         <img src='https://static.tildacdn.pro/tild3234-3730-4636-a164-626664363030/BTS_LOGO.svg' />
         <div className="navbar-nav">
      {isLoggedIn ? (
        <div className="profile-area ml-auto" onClick={onProfileClick} >
          <img src={userProfilePic} alt="Profile" className="profile-pic" />
        </div>
      ) : (
        <button className="btn btn-outline-primary btn-lg my-2 my-sm-0" type="submit">Вход</button>
      )}
      </div>
    </nav>
  );
};

export default NavigationBar;