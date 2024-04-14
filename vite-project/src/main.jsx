import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import Main from './pages/main_page';

import Login from './pages/login';
import WelcomePage from './pages/welcome_page';
import OfferPage from './pages/offers_page';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Router>
      
      <Routes> 
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/" element={<WelcomePage/>}/>
         <Route path="/home" element={<Main/>}/>
         <Route path="/search" element={<OfferPage />}/>
         {/* <Route path="/profile" element={<RegisterPage />}/> */}
      </Routes>
     

    </Router>
)
