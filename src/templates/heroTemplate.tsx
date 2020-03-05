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
  padding: 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
`;

const HeroStack = styled.h4`
  color: grey;
  margin-bottom: 10px;
  word-spacing: 10px;
`;

export default function HeroTemplate() {
  return (
    <HeroDiv className="hero-container">
      <HeroContent>
        <h1>Hello.</h1>
        <h1>I&apos;m Frank.</h1>
        <br />
        <br />
        <h3>Full Stack Web Developer</h3>
        <HeroStack>Javascript Typescript Java Ruby</HeroStack>
        <HeroStack>React Redux D3.js NodeJS Express</HeroStack>
        <HeroStack>Docker Webpack PostgreSQL MySQL MongoDB GraphQL</HeroStack>
      </HeroContent>
    </HeroDiv>
  );
}
