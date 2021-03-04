import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.className === "top-content" &&
    css`
      padding: 1rem;
      text-align: center;
      background: #f6f6f6;

      h1 {
        color: #612674;
        font-size: 1.375rem;
        margin: 1.375rem;
      }

      h2 {
        color: #a87bb7;
        font-size: 1rem;
        line-height: 1.5;
      }
    `}
`;
