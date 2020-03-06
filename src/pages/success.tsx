import React, { useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const SubmitDiv = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubmitContent = styled.div`
  position: relative;
  border: 1px solid grey;
  background: white;
  border-radius: 4px;
  padding: 50px 50px 35px 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const SubmitStatus = styled.h1`
  color: #ef4d53;
`;

const SubmitMsg = styled.p`
  font-size: 1.5rem;
`;

const SubmitRedirect = styled.p`
  color: grey;
`;

const SubmitA = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const SubmitSuccess = () => {
  useEffect(() => {
    document.getElementById("header").remove();
  });

  return (
    <Layout>
      <SubmitDiv>
        <SubmitContent>
          <SubmitStatus>Message Sent.</SubmitStatus>
          <SubmitMsg>Thanks, I'll get back to you as soon as I can!</SubmitMsg>
          <SubmitA href="/">
            <SubmitRedirect>Back to Home</SubmitRedirect>
          </SubmitA>
        </SubmitContent>
      </SubmitDiv>
    </Layout>
  );
};

export default SubmitSuccess;
