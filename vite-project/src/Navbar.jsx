import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


const NavigationBar = ({ isLoggedIn }) => {
    const loginbtn = () => {
       document.location.href = "/login"
      };

      const profilebtn = () => {

      }

  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
        <div className='logo' style={{margin:'20px'}}><img className='ml-3' src='https://static.tildacdn.pro/tild3234-3730-4636-a164-626664363030/BTS_LOGO.svg' /></div>
         <div className="navbar-nav">
      {isLoggedIn ? (
        <div className="profile-area ml-auto" onClick={profilebtn} >
            <svg  alt="Profile" className="profile-pic" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{ marginLeft: '10px' }}>
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
        </div>
      ) : (
        <button  style={{margin:'20px'}} className="btn btn-outline-primary btn-lg my-2 my-sm-0" onClick={loginbtn}>Вход</button>
      )}
      </div>
    </nav>
  );
};

export default NavigationBar;