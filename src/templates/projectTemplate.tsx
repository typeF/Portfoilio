import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import FadingLine from "../components/fadingline";
import SectionTitle from "../components/sectionTitle";

const ProjectContainer = styled.div`
  min-height: 100vh;
`;

const ProjectDiv = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr;
`;

const ProjectH1 = styled.h1`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  margin-bottom: -3px;
`;

const StyledA = styled.a`
  color: #f61818;
  text-decoration: none;
`;

const StyledP = styled.p`
  color: #706e69;
  font-size: 16px;
  line-height: 18px;
  word-spacing: 6px;
`;

export default function ProjectTemplate() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              github
              techStack
              title
              type
              url
              img {
                relativePath
              }
            }
          }
        }
      }
    }
  `);

  const { allMarkdownRemark } = data;
  const nodes = allMarkdownRemark.edges;

  const projects = nodes.map(node => {
    const { frontmatter, id, html } = node.node;
    const { github, techStack } = frontmatter;
    return (
      <ProjectDiv className="project" key={id}>
        <div>
          <ProjectH1>
            <StyledA href={github}>{frontmatter.title}</StyledA>
          </ProjectH1>
          <StyledP>{techStack}</StyledP>
        </div>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ProjectDiv>
    );
  });

  return (
    <ProjectContainer id="projects" className="blog-post-container">
      <SectionTitle title={"Projects"} />
      <FadingLine />
      {projects}
    </ProjectContainer>
  );
}
