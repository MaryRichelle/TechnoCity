import React from 'react'
import { styled } from 'styled-components'
import FooterNav from './FooterNav'
import Bottom from './Bottom'
import Middle from "./Middle"

const StyledFooter = styled.footer`
width:100%;
background:var(--black-dark);  
color: var(--light-gray);
`;
const Container = styled.section`
width: 80%;
margin:auto;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 4rem;
`

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterNav />
        <Middle />
        <Bottom />
      </Container>
    </StyledFooter>
  )
}

export default Footer