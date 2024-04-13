import React, { useState } from 'react';
import NavigationBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './Welcome';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavigationBar isLoggedIn={isLoggedIn}/>
      <Welcome></Welcome>
    </div>

  );
}

export default App;