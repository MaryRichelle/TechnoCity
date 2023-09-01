import React, { useState, createContext, useEffect } from 'react'

import { data } from "../data/images"


export const CarouselData = createContext()
const CarouselContext = ({ children }) => {
  
  const [carouselData, setCarouselData] = useState({
    images: [],
    products: {},
    id:""
  });

  const value = {
    carouselData
  }
  console.log(carouselData.images);
  useEffect(()=>{
    const productDetails = data.map(product => product)
    const allImages = productDetails.map(product => product.image);
    setCarouselData({...carouselData,
      images: allImages,
      products: productDetails,
    });
    
  },[])
  return (
    <CarouselData.Provider value={value}>
      {children}
    </CarouselData.Provider>
  )
}

export default CarouselContext