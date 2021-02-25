import styled from "styled-components";
import media from "styled-media-query";
import Image from "next/image";

export const CardSection = styled.section`
  display: flex;
  background-color: white;
  padding: 0.9375rem;
  margin-top: 0.9375rem;
  justify-content: space-between;

  ${media.lessThan("medium")`
    padding: 0;
  `}

  ${media.lessThan("small")`
    background-color: inherit;
    flex-wrap: wrap;
  `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem;

  ${media.lessThan("medium")`
    margin: 0.5rem;
  `}

  ${media.lessThan("small")`
    margin: 0.9375rem 0 0 0;
  `}
`;

export const CardImage = styled(Image)`
  width: 100%;
  display: block;
`;

export const CardSectionText = styled.p`
  display: block;
  background-color: #333;
  color: white;
  height: 3.75rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 1.1875rem;
  box-sizing: border-box;
  margin: 0;
`;
