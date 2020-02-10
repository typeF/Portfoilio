import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import FadingLine from "../components/fadingline";

const ProjectDiv = styled.div`
  min-height: 100vh;
`;

const StyledA = styled.a`
  color: black;
  text-decoration: none;
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
    const { github } = frontmatter;
    return (
      <div className="project" key={id}>
        <h1>
          <StyledA href={github}>{frontmatter.title}</StyledA>
        </h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  });

  return (
    <ProjectDiv id="projects" className="blog-post-container">
      <h1>Projects</h1>
      <FadingLine />
      {projects}
    </ProjectDiv>
  );
}
