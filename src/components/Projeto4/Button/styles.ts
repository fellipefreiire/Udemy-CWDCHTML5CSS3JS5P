import styled from "styled-components";
import media from "styled-media-query";

export const Button = styled.a`
  display: inline-block;
  padding: 0.9rem 2.5rem;
  background: #58c4c4;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  width: 10.625rem;
  text-align: center;

  &:hover {
    background: #37a0a0;
  }

  ${media.greaterThan("medium")`
    margin-left: auto;
  `}

  ${media.greaterThan("medium")`
    margin-top: 1rem;
    margin-left: 0;
  `}
`;
