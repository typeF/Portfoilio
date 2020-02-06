import { Link } from "gatsby";
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

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <HeaderWrapper>
    <HeaderDiv>
      <HeaderLink>
        <StyledLink to="/">About</StyledLink>
      </HeaderLink>
      <HeaderLink>
        <StyledLink to="/">Projects</StyledLink>
      </HeaderLink>
      <HeaderLink>
        <StyledLink to="/">Contact</StyledLink>
      </HeaderLink>
    </HeaderDiv>
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
