import {useState,useEffect, useContext} from "react"
import { CartContext } from '../context/CartContext';

const useProductFilter = (category) => {
  const { products } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
console.log(filteredProducts);
  useEffect(() => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }, [category, products]);

  return { filteredProducts };
}

export default useProductFilter
/*
   category: 'Phones and Accessories'
   category: 'Smartwatches
   category: 'Home Appliances'
   */