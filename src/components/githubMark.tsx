import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GitHubMark = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "GitHub-Mark-120px-plus.png" }
      ) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="GitHub Mark"
    />
  );
};

export default GitHubMark;
