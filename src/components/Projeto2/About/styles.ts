import styled from "styled-components";

type aboutProps = {
  bg: String;
};

export const About = styled.article<aboutProps>`
  background-color: #003d52;
  padding: 100px;
  color: white;
  background-image: url(${(props: any) => props.bg});
  background-repeat: no-repeat;
  background-position: right bottom;
`;

export const AboutTitle = styled.h2`
  text-transform: uppercase;
  font-size: 50px;
  font-weight: normal;
`;

export const AboutText = styled.p`
  line-height: 1.5;
  width: 70%;
`;
