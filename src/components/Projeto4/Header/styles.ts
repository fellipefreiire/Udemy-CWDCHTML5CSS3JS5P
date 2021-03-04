import styled from "styled-components";
import Image from "next/image";

export const Header = styled.header`
  text-align: center;
`;

export const Nav = styled.nav`
  background: #612674;
  text-align: center;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li``;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  display: block;

  &:hover {
    background: #7c3792;
  }
`;

export const HeaderImage = styled(Image)``;
