import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.header`
  marginbottom: 1.45rem;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const HeaderLink = styled.div`
  margin-left: 30px;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderDiv>
      {/* <HeaderLink>
        <StyledLink href="#about">About</StyledLink>
      </HeaderLink> */}
      <HeaderLink>
        <StyledLink href="#projects">Projects</StyledLink>
      </HeaderLink>
      {/* <HeaderLink>
        <StyledLink href="#contact">Contact</StyledLink>
      </HeaderLink> */}
    </HeaderDiv>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
