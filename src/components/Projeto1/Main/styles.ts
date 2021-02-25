import styled from "styled-components";
import media from "styled-media-query";

export const Main = styled.main`
  width: 80%;
  margin: auto;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
