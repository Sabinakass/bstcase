import React from "react";
import BankCard from "../components/BankCard";

const OfferPage = () => {
  // Define an array of data for your offers
  const offersData = [
    {
      id: 1,
      bankName: 'ForteBank',
      cardNumber: '1234000000005678',
      cardType: 'Visa',
      cashback: '10%',
      condition: 'только через QR оплату'
    },
    {
        id: 2,
        bankName: 'HalykBank',
        cardNumber: '9876000000001234',
        cardType: 'Mastercard',
        cashback: '5%',
        condition: 'при покупке в ресторанах'
      },
      {
        id: 3,
        bankName: 'JusanBank',
        cardNumber: '5432000000007890',
        cardType: 'American Express',
        cashback: '15%',
        condition: 'на все покупки'
      },
  ];

  return (
    <div>
      {offersData.map((offer) => (
        <div
          key={offer.id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            padding: '20px',
            width: '800px',
            height: '300px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        >
          <BankCard
            key={offer.id} // Unique identifier for each card
            bankName={offer.bankName}
            cardNumber={offer.cardNumber}
            cardType={offer.cardType}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
                marginRight: '10px',
              }}
            >
              Кэшбек: {offer.cashback}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginRight: '10px',
                }}
              >
                Условие:
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#666',
                }}
              >
                {offer.condition}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferPage;
