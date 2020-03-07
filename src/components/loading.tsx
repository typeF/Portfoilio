import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const pulse = keyframes`
  0% {
    opacity: 100;
  }

  100% {
    opacity: 0;
  }
`;

const LoadingChar = styled.span`
  color: #ef4d53;
  font-size: 1.2rem;
  font-weight: bold;
  -webkit-animation: 1s ease-in-out infinite;
  animation: ${pulse} 1s ease-in-out infinite;

  &:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingChar>■&nbsp;</LoadingChar>
      <LoadingChar>■&nbsp;</LoadingChar>
      <LoadingChar>■&nbsp;</LoadingChar>
    </LoadingContainer>
  );
};

export default Loading;
