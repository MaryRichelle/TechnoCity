import React from 'react'
import useProductFilter from '../../Hooks/useProductFilter';
import Product from '../Product';
import styled from 'styled-components'
import Offers from "../Offers"
import TopRatedProducts from "../../components/TopRatedProducts"

const Container = styled.section`
width: 80%;
margin:auto;
padding-block:6rem;
display:flex;
gap: 3rem;
flex-direction: column;
justify-content: space-around;
align-items:center;

 `

const AllProducts = styled.section`
 display:grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 0.4fr));
  justify-content:center;
  align:items:center;
  gap:4rem;
  margin:auto;
  width: 100%;

`
const H2 = styled.h2`
text-align: center;
font-size: 2.5rem;
font-weight: 1000;
`
function FilteredCategories({ category, title }) {
  const { filteredProducts } = useProductFilter(category)
  return (
    <Container >
      <H2>{title}</H2>
      <AllProducts>
        {
          filteredProducts && filteredProducts.map(product => {
            return <Product key={product.image} product={product} />
          })
        }

      </AllProducts>
      <TopRatedProducts length={4} heading="Related Products" description="More  Related Products in This Category " />
      <Offers />
    </Container>
  )
}

export default FilteredCategories