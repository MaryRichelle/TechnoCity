import React from 'react'
import { styled } from 'styled-components'


const DetailsP = styled.p`
font-weight: 200;
`

function ContactDetails({ title, detail }) {
  return (


    <div>
      
      <h3>{title}</h3>
      <DetailsP>{detail}</DetailsP>
    </div>

  )
}

export default ContactDetails