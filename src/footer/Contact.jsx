import React from 'react'
import { styled } from 'styled-components'
import ContactDetails from "./ContactDetails"
import { FaPhoneAlt } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"

const ContactInfo = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 flex-direction: column;
 flex-grow:2;
 gap:1rem;`

const InfoContainer = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
column-gap: 2rem;
`
const BorderLine = styled.hr`
width: 100%`
function Contact() {
  return (
    <ContactInfo>
      <h2>Contact Us</h2>
      <InfoContainer>
        <HiLocationMarker size={30} />
        <ContactDetails icon={HiLocationMarker} title="ADDRESS" detail="AThens Greece" />
      </InfoContainer>
      <BorderLine />
      <InfoContainer>
        <FaPhoneAlt size={20} />
        <ContactDetails icon={FaPhoneAlt} title="PHONE" detail="6972583187" />
      </InfoContainer>
      <BorderLine />
      <InfoContainer>
        <AiOutlineMail size={30} />
        <ContactDetails icon={AiOutlineMail} title="EMAIL" detail="TechnoCity@gmail.com" />
      </InfoContainer>
    </ContactInfo>
  )
}

export default Contact