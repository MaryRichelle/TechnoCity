import React from 'react';
import styled from 'styled-components'
import Carousel from "../../Header/Carousel"
import TopRatedProducts from "../../components/TopRatedProducts"
import Categories from './Categories';
import BottomCarousel from "../../components/BottomCarousel"
const Main = styled.main`
  width: 100%;
  margin:auto;
  `

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


const Hr = styled.hr`
  width: 70%;
  margin: auto;
  background: var(--dark-gray);

  `


function Home() {

  return (
    <>
      <Main >
        <Carousel />
        <Container >
          <TopRatedProducts length={8} heading="TOP RATED PRODUCTS" description="Only the top rated products added recently in our catalog" />
          <Hr />
        </Container>
      </Main>
      <BottomCarousel />
      <Categories />
    </>
  );
}

export default Home;
