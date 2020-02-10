import styled from "styled-components";
import React from "react";

const SectionH1 = styled.h1`
  padding-top: 30px;
`;

const SectionTitle = ({ title }: { title: string }) => (
  <SectionH1>{title}</SectionH1>
);

export default SectionTitle;
