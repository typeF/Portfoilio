import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import SectionTitle from "../components/sectionTitle";
import FadingLine from "../components/fadingline";

const AboutDiv = styled.div`
  height: 100vh;
`;

export default function AboutTemplate() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              type
            }
          }
        }
      }
    }
  `);

  const { allMarkdownRemark } = data;
  const aboutNode = allMarkdownRemark.edges[0].node;

  return (
    <AboutDiv id="about" className="about-container">
      <SectionTitle title={"About"} />
      <FadingLine />
      <div
        className="about-content"
        dangerouslySetInnerHTML={{ __html: aboutNode.html }}
      />
    </AboutDiv>
  );
}
