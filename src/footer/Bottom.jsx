import React from 'react'
import { styled } from 'styled-components'
import Socials from "./Socials"

const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid var(--light-gray);
padding-block: 1rem;
`

const License = styled.p`
font-weight: 200;
font-size:0.8rem;
`
function Bottom() {
  return (
    <Footer>
      <License>© technoCity eCommerce. © 2023. All Rights Reserved</License>
      <Socials />
    </Footer>
  )
}

export default Bottom