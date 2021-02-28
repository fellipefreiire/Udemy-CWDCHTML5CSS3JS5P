import styled from "styled-components";
import Image from "next/image";

export const Card = styled.article``;

export const CardImage = styled(Image)`
  border-radius: 5px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardLink = styled.a`
  transition: all 0.2s linear;
  text-decoration: none;
  color: #49bf9d;

  &:hover {
    border-bottom-color: transparent;
  }
`;

export const CardTitle = styled.p`
  margin: 0 0 2em;
`;

export const CardText = styled.p`
  margin: 0 0 2em;
`;
