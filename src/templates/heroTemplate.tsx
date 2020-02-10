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

const Name = styled.h1`
  color: red;
`;

export default function HeroTemplate() {
  return (
    <HeroDiv className="hero-container">
      <HeroContent>
        <h1>Hello.</h1>
        <h1>I&apos;m Frank.</h1>
      </HeroContent>
    </HeroDiv>
  );
}
