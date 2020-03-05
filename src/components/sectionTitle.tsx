import styled from "styled-components";
import React from "react";

const SectionH1 = styled.h1``;

const SectionTitle = ({ title }: { title: string }) => (
  <SectionH1>{title}</SectionH1>
);

export default SectionTitle;
