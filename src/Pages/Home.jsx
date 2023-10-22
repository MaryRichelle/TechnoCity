import React, { useContext } from 'react';
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';
import Product from "../components/Product"
import Carousel from "../components/Header/Carousel"

  const Main = styled.main`
  width: 100vw;
  margin:auto;
  `

  const Container = styled.section`
  width: 85%;
  margin:auto;
  padding-block:6rem;
  display:flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-around;
  align-item:center;
  `

  const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items:center;
  `
  const Hr = styled.hr`
  width: 70%;
  margin: auto;
  background: #716c6c;

  `
  const TopRatedProducts = styled.p`
  text-align: center;
  `
  const AllProducts = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap:4rem;
  width: 100%;
  margin:auto;

`
function Home() {
  const { products } = useContext(CartContext)

  return (
    <Main >
      <Carousel />
      <Container >
        <div>
          <Heading >TOP RATED PRODUCTS</Heading>
          <TopRatedProducts>Only the top rated products added recently in our catalog</TopRatedProducts>
        </div>
        <Hr />
        <AllProducts>
          {products ? (

            products.map((product) => {
              return <Product product={product} key={product.id} />;
            })

          ) : (
            <p>Loading data...</p>
          )}
        </AllProducts>
        <Hr />
      </Container>
    </Main>
  );
}

export default Home;
