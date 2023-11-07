import React from 'react'
import { styled, css } from 'styled-components'
import { media } from "../styles/MediaQueries"

const Container = styled.section`
display : flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
gap:2rem;
border-block-end: 1px solid #d3d2d2;

 ${media.desktopMd(css`
border:none;
  `)}
`
const SearchContainer = styled.div`
flex-grow: 3;
background: inherit;
display: flex;
justify-content:space-between;
border-radius: 4px;
align-items: center;

`
const SearchInput = styled.input`
flex-grow:1;
background: #333;
padding: 0.5rem;
color: #fff;
border: none;
outline: none;
&:focus{
border: none;
outline: none;
}

`
const Button = styled.button`
cursor: pointer;
padding:0.5rem;
background: #333;
color: var(--light-gray);
border: none;
outline: none;
&:hover{
background: inherit;
}
`
function NewsLetter() {
  return (
    < Container >
      <h2>SUBSCRIBE NEWSLETTER</h2>
      <p>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
      <SearchContainer>
        <SearchInput placeholder="Email Address" />
        <Button>Submit</Button>
      </SearchContainer>
    </Container>
  )
}

export default NewsLetter