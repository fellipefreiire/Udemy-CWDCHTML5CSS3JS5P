import styled, { css } from "styled-components";
import media from "styled-media-query";

type sectionProps = {
  bg: String;
  bg2: String;
};

export const Section = styled.section<sectionProps>`
  ${(props) =>
    props.className === "top-content" &&
    css`
      padding: 1rem;
      text-align: center;

      ${media.greaterThan("medium")`
        background: #521a66;
        color: white;
      `}

      ${media.greaterThan("large")`
        background-image: url(${(props: any) => props.bg});
        height: 30rem;
        padding-top: 8rem;
        box-sizing: border-box;
        background-size: cover;
        background-repeat:   no-repeat;
        background-position: center top;
      `}

      ${media.greaterThan("huge")`
        background-image: url(${(props: any) => props.bg2});
        padding: 27rem 27rem 10rem;
        height: 63rem;
      `}
    `}

  ${(props) =>
    props.className === "middle-content" &&
    css`
      display: flex;
      padding: 2rem;
      text-align: center;

      ${media.lessThan("medium")`
        flex-direction: column;
      `}

      ${media.greaterThan("medium")`
        flex-wrap: wrap;
      `}
    `}

  ${(props) =>
    props.className === "main-content" &&
    css`
      padding: 2rem;

      ${media.greaterThan("huge")`
        display: flex;
        flex-wrap: wrap;
      `}
    `}
`;
