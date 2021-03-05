import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.className === "top-content" &&
    css`
      padding: 1rem;
      text-align: center;
    `}

  ${(props) =>
    props.className === "middle-content" &&
    css`
      padding: 2rem;
      text-align: center;
    `}

  ${(props) =>
    props.className === "main-content" &&
    css`
      padding: 2rem;
    `}
`;
