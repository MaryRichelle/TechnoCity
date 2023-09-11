import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CartContext = createContext()
function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])


  useEffect(() => {
    async function getData() {
      const options = {
        method: 'GET',
        url: 'https://cartify.p.rapidapi.com/products',
        headers: {
          'X-RapidAPI-Key': 'c61dd80548msh3599a386ceb3385p1550c9jsne493f06a6d3a',
          'X-RapidAPI-Host': 'cartify.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);
  // console.log(products);

  const value = {
    cart,
    setCart,
    products
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export default Context