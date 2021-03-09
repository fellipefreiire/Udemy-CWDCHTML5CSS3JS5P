import styled from "styled-components";
import media from "styled-media-query";

export const IconWrapper = styled.div`
  width: 3.5rem;
  color: #652e78;
  display: inline-block;
  margin-bottom: 0.625rem;
  margin-top: 3rem;
`;

export const HeaderIconWrapper = styled.div`
  display: none;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${media.greaterThan("medium")`
    display: block;
    height: 5rem;
  `}

  ${media.greaterThan("medium")`
    height: 8rem;
  `}

  ${media.greaterThan("huge")`
    height: 10rem;
  `}
`;

export const MainH1 = styled.h1`
  color: #612674 !important;
  font-size: 1.375rem;
  margin: 1.375rem;

  ${media.greaterThan("medium")`
    color: white !important;
  `}

  ${media.greaterThan("huge")`
    font-size: 2rem;
  `}
`;

export const MainH2 = styled.h2`
  color: #a87bb7 !important;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;

  ${media.greaterThan("medium")`
    color: white !important;
  `}

  ${media.greaterThan("huge")`
    font-size: 1.3rem;
  `}
`;

export const MainH3 = styled.h3`
  font-size: 1.25rem;
  color: #652e78 !important;
  text-transform: uppercase;
  margin-bottom: 1.5625rem;
`;

export const MainP = styled.p`
  line-height: 1.5;
  color: #222;
`;

export const MainContentArticle = styled.article`
  margin-bottom: 3.5rem;

  h3 {
    letter-spacing: 0.2rem;
    font-weight: normal;
  }

  ${media.greaterThan("medium")`
    display: flex;
    flex-direction: column;
  `}

  ${media.greaterThan("huge")`
    flex-basis: 50%;
  `}
`;

export const MiddleContentArticle = styled.article`
  ${media.greaterThan("medium")`
    flex-basis: 50%;
    padding: 25px;
  `}

  ${media.greaterThan("huge")`
    flex-basis: 25%;
    padding: 25px;
  `}
`;
