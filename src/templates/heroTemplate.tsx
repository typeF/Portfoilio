import React from "react";
import styled from "styled-components";

const HeroDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroContent = styled.div`
  position: relative;
  bottom: 50px;
  border: 1px solid grey;
  background: white;
  border-radius: 4px;
  padding: 50px 50px 35px 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
`;

const HeroStackDiv = styled.div`
  @media (max-wdith: 450px) {
    display: flex;
  }
`;

const HeroStack = styled.p`
  color: grey;
  margin-bottom: 3px;
  word-spacing: 10px;
  @media (max-width: 450px) {
    margin-bottom: 6px;
  }
`;

const HeroP = styled.p`
  font-size: 3rem;
  margin-bottom: 35px;
`;

const HeroColouredSpan = styled.span`
  color: #ef4d53;
  font-weight: bold;
`;

export default function HeroTemplate() {
  return (
    <HeroDiv className="hero-container">
      <HeroContent>
        <HeroP>Hello.</HeroP>
        <HeroP>
          I&apos;m <HeroColouredSpan>Frank</HeroColouredSpan>.
        </HeroP>
        <br />
        <h3>Full Stack Web Developer</h3>
        <HeroStackDiv>
          <HeroStack>JavaScript TypeScript Java Ruby</HeroStack>
          <HeroStack>React Vue.js Node.js Express Redux D3.js</HeroStack>
          <HeroStack>Docker Webpack GraphQL PostgreSQL MySQL MongoDB</HeroStack>
        </HeroStackDiv>
      </HeroContent>
    </HeroDiv>
  );
}
