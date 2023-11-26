import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.section`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap: 2rem ;

`
const ContainerInner = styled.div`
  background:rgb(243, 242, 242);
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const AllProducts = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 0.4fr));
  gap:4rem;
  margin:auto;
  padding:2rem;
  width: 100%;

`
const Button = styled.span`
color : var(--hover-color-tomato);
font-wight:bolder;
border:none;
font-size: 1.5rem;
cursor: pointer;
outline:none;
background:none;
`
const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items:center;
  color : var(--hover-color-tomato);

  `
const TopRatedHeading = styled.p`
  text-align: center;
  `

const Hr = styled.hr`
  width: 70%;
  margin: auto;
  background: var(--dark-gray);

  `
const TopRatedProducts = ({ length, heading, description }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/shop")
  }

  const { products } = useContext(CartContext);
  const [topRatedItems, setTopRatedItems] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      let topRated = [];
      while (topRated.length < length) {
        const random = Math.floor(Math.random() * products.length);
        const randomProduct = products[random];
        if (!topRated.includes(randomProduct)) {
          topRated.push(randomProduct);
        }
      }
      setTopRatedItems(topRated);
    }
  }, [length, products]);

  return (
    <Container>
      <Hr />
      <div>
        <Heading > {heading} </Heading>
        <TopRatedHeading>
          {description}
        </TopRatedHeading>
      </div>
      <Hr />
      <ContainerInner >
        < AllProducts>
          {topRatedItems.map((product) => (
            <Product key={product.id} product={product} />
          ))}

        </ AllProducts>
        <Button onClick={handleClick}>View All &gt;&gt;&gt;</Button>

      </ContainerInner>
    </Container>
  );
};

export default TopRatedProducts;
