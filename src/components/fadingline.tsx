import styled from "styled-components";

const FadingLine = styled.hr`
  display: block;
  border: 0;
  height: 1px;
  margin: 0;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
`;

export default FadingLine;
