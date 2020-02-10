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
        <h1>Full Stack Web Developer</h1>
        <HeroStack>Javascript Typescript Java Ruby</HeroStack>
        <HeroStack>React Redux D3.js NodeJS Express</HeroStack>
        <HeroStack>Docker Webpack PostgreSQL MySQL MongoDB GraphQL</HeroStack>
      </HeroContent>
    </HeroDiv>
  );
}
