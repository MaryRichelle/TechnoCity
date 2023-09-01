import React, { useContext } from 'react';
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';
import Product from "./Product"
import Carousel from "../Header/Carousel"
const Container = styled.section`
display:flex;
flex-direction: column;
justify-content: space-around;
flex-gap: 2rem;

`
const AllProducts = styled.div`
display: flex;
gap:4rem;
width: 90%;
margin:auto;
flex-direction:row;
justify-content: space=around;
align-items:center;
flex-wrap:wrap;
`
function Home() {
  const { products } = useContext(CartContext)

  return (
    <Container>
      <Carousel/>
      <h2> Products</h2>
      <AllProducts>
        {products ? (

          products.map((product) => {
            return <Product product={product} key={product.id} />;
          })

        ) : (
          <p>Loading data...</p>
        )}
      </AllProducts>
      
    </Container>
  );
}

export default Home;
