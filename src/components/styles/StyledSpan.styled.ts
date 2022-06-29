import styled from "styled-components";

const StyledSpan = styled.span<{ margin?: string }>`
  display: inline-block;
  margin: ${({ margin }) => margin};
`;

export default StyledSpan;
