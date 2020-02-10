import React from "react";
import styled from "styled-components";

const ContactDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactForm = styled.div`
  position: relative;
  bottom: 50px;
`;

export default function ContactTemplate() {
  return (
    <ContactDiv id="contact" className="contact-container">
      <ContactForm>Contact</ContactForm>
    </ContactDiv>
  );
}
