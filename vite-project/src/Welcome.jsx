import React from 'react';
import './Welcome.css';
import banner from './assets/banner.png'
const Welcome = () => (
  <div className="welcome">
    <div className='text'>
    <h1>
        Сделайте каждый день выгодным!
    </h1>
    <p>
    Выберите карту с максимальным кэшбэком 
    </p>
    </div>
    <img src={banner} alt="Banner" className="banner-image" />
  </div>
);

export default Welcome;