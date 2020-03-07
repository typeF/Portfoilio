import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const NotFoundDiv = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NotFoundContent = styled.div`
  position: relative;
  border: 1px solid grey;
  background: white;
  border-radius: 4px;
  padding: 50px 50px 35px 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  color: #ef4d53;
`;

const NotFoundMsg = styled.p`
  font-size: 1.5rem;
`;

const NotFoundBack = styled.p`
  color: grey;
`;

const NotFoundHomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const NotFoundPage = () => {
  useEffect(() => {
    document.getElementById("header").remove();
  });

  return (
    <Layout>
      <SEO title="404: Not found" />
      <NotFoundDiv>
        <NotFoundContent>
          <NotFoundTitle>404 - Not Found</NotFoundTitle>
          <NotFoundMsg>
            You just hit a route that doesn&#39;t exist... the sadness.
          </NotFoundMsg>
          <NotFoundHomeLink href="/">
            <NotFoundBack>Back to Home</NotFoundBack>
          </NotFoundHomeLink>
        </NotFoundContent>
      </NotFoundDiv>
    </Layout>
  );
};

export default NotFoundPage;
