import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL
export const CartContext = createContext()
function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    async function getData() {
      const options = {
        method: 'GET',
        url: URL,
        headers: {
          'X-RapidAPI-Key': apiKey,
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

  const value = {
    cart,
    setCart,
    products
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export default ProductsContext