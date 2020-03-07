import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import FadingLine from "../components/fadingline";
import SectionTitle from "../components/sectionTitle";
import GitHubLogo from "../components/githubLogo";

const ProjectOuterDiv = styled.div`
  height: 17px;
`;

const ProjectContainer = styled.div`
  min-height: 100vh;
  border: 1px solid grey;
  background: white;
  border-radius: 4px;
  padding: 50px;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.4);
`;

const ProjectDiv = styled.div`
  margin-bottom: 80px;
  @media (max-width: 450px) {
    margin-bottom: 20px;
  }
`;

const ProjectDescription = styled.div`
  display: grid;
  grid-gap: 0px 30px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "project-title project-summary"
    "project-stack project-summary"
    "project-github project-summary";
  @media (max-width: 450px) {
    grid-gap: 0px;
    grid-template-columns: 8fr 1fr;
    grid-template-areas:
      "project-title project-github"
      "project-summary project-summary";
  }
`;

const ProjectSummary = styled.div`
  grid-area: project-summary;
`;

const ProjectImageA = styled.a`
  margin-bottom: 15px;
`;

const ProjectImage = styled(Img)`
  border-radius: 3px;
  margin-bottom: 15px;
`;

const ProjectH1 = styled.h1`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  margin-bottom: 2px;
`;

const StyledA = styled.a`
  color: #ef4d53;
  text-decoration: none;
`;

const GitHubA = styled.a`
  @media (max-width: 450px) {
    grid-area: project-github;
    margin-top: 7px;
  }
`;

const StyledP = styled.p`
  color: #706e69;
  font-size: 16px;
  line-height: 18px;
  word-spacing: 6px;
  margin-bottom: 8px;
  @media (max-width: 450px) {
    margin-bottom: 13px;
  }
`;

export default function ProjectTemplate() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
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
              screenshot {
                childImageSharp {
                  fluid(maxWidth: 920, maxHeight: 240) {
                    ...GatsbyImageSharpFluid
                  }
                }
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
    const { github, techStack, screenshot, url } = frontmatter;
    const featuredImgFluid = screenshot.childImageSharp.fluid;
    return (
      <ProjectDiv className="project" key={id}>
        <ProjectImageA href={url} target="_blank" rel="norefferer">
          <ProjectImage
            fluid={featuredImgFluid}
            alt={`${frontmatter.title} screenshot`}
          />
        </ProjectImageA>
        <ProjectDescription>
          <div>
            <ProjectH1>
              <StyledA href={url} target="_blank" rel="noreferrer">
                {frontmatter.title}
              </StyledA>
            </ProjectH1>
            <StyledP>{techStack}</StyledP>
          </div>
          <GitHubA href={github} target="_blank" rel="noreferrer">
            <GitHubLogo />
          </GitHubA>
          <ProjectSummary
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ProjectDescription>
      </ProjectDiv>
    );
  });

  return (
    <div>
      <ProjectOuterDiv id="projects" />
      <ProjectContainer className="blog-post-container">
        <SectionTitle title={"Projects"} />
        <FadingLine />
        {projects}
      </ProjectContainer>
    </div>
  );
}
