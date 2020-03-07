import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ImgContainer = styled.div`
  background: grey;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 16px;
  transition: background 0.4s;
  &:hover {
    background: black;
  }
`;

const GitHubLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "GitHub_Logo_White.png" }) {
        childImageSharp {
          fixed(width: 40, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <ImgContainer>
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="GitHub Logo"
      />
    </ImgContainer>
  );
};

export default GitHubLogo;
