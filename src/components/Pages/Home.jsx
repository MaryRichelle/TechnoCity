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
display:grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
gap:4rem;
width: 90%;
margin:auto;

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
