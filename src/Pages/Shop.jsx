import React, { useContext } from 'react';
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';
import Product from "../components/Product"

const Container = styled.section`
  width: 80%;
  margin:auto;
  padding-block:6rem;
  display:flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-around;
  align-item:center;
  `
const AllProducts = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap:4rem;
  width: 100%;
  margin:auto;

`
const Shop = () => {
  const { products } = useContext(CartContext)

  return (
    <Container >
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
  )
}

export default Shop