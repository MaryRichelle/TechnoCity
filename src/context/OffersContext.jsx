import React, { createContext, useEffect, useState } from 'react';
import { offers } from "../data/offer";

export const OffersData = createContext();

function OffersContext({ children }) {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newOffer = getRandomOffer();
      setOffer( newOffer);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomOffer = () => {
    const randomIndex = Math.floor(Math.random() * offers.length);
    return offers[randomIndex];
  };

  // console.log(offer);

  return (
    <OffersData.Provider value={offer}>
      {children}
    </OffersData.Provider>
  );
}

export default OffersContext;
