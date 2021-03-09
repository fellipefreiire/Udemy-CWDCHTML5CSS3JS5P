import styled from "styled-components";

export const Footer = styled.footer`
  background: #25303e;
  color: #83969f;
  padding-bottom: 2rem;
`;

export const FooterUl = styled.ul`
  display: flex;
  justify-content: space-around;
  background: #303d4c;
  padding: 0.5rem;
  list-style: none;
  margin: 0;
`;

export const FooterLi = styled.li`
  display: inline-block;
`;

export const FooterLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
`;

export const FooterSpan = styled.span`
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  display: block;
`;

export const FooterP = styled.p`
  text-align: center;
  padding-top: 20px;
`;

export const IconWrapper = styled.div`
  width: 30px;
`;
