import React from 'react';

import ForteBank from '../assets/forte-bank-image.png'; 
import JusanBank from '../assets/jusan-bank-image.png'; 
import HalykBank from '../assets/halyk-bank-image.png'; 


const bankBgByBankName = {
    'ForteBank': ForteBank,
    'JusanBank': JusanBank,
    'HalykBank': HalykBank,
  };
  
  const getBackgroundImage = (bankName) => {
    return bankBgByBankName[bankName]; 
  };
  
const BankCard = ({bankName, cardNumber, cardType }) => {
  const cardNumberVisible = `**** **** **** ${cardNumber.slice(-4)}`;
  const bg = getBackgroundImage(bankName);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: '300px',
        height: '200px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        marginRight:'16px',
      }}
    >
      <div>
        {/* {cardType === 'visa' && <VisaIcon />}
        {cardType === 'mastercard' && <MastercardIcon />} */}
        <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
          {bankName}
        </p>
        <p style={{ color: 'white', fontSize: '14px' }}>{cardNumberVisible}</p>
      </div>
    </div>
  );
};

export default BankCard;