import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from '../components/CardList';
import getUser from '../helpers/get_user';
import NavigationBar from '../Navbar';
import { checkTokenCookie } from '../helpers/cookie_helper';
import OfferPage from './offers_page';

const Main = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        if (user != null && user != undefined) {
          setName(user.Name);
        } else {
          setName('Unknown');
        }
      } catch (error) {
        console.error(`Error fetching user data:`, error.message);
      }
    };

    fetchUser();
  }, []);

  const cardsData = [
    {
      id: 1,
      bankName: 'ForteBank',
      cardNumber: '0000000000001234',
      cardType: 'Visa'
    },
    {
      id: 2,
      bankName: 'JusanBank',
      cardNumber: '0000000000005678',
      cardType: 'Mastercard'
    },
    {
      id: 3,
      bankName: 'HalykBank',
      cardNumber: '1234000000005678',
      cardType: 'Mastercard'
    },
  ];

  return (
    <div className="Main" >
      {NavigationBar(checkTokenCookie())}
      <div className="user_greet" style={{margin:'20px'}}>
        <h2>Здравствуйте, {name ? (<div>...</div>) : (<div>{name}</div>)}</h2>
      </div>
      <div className="bank_cards" style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center',margin:'20px' }}>
        <h3>Ваши карты </h3>
        <CardList cards={cardsData} />
      </div>
      <div>
      </div>
      <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center',marginLeft:'20px',marginRight:'20px'}}>

        <form className="d-flex mt-3 mb-5" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        {OfferPage()}
      </div>
      
    </div>
  );
}

export default Main;
