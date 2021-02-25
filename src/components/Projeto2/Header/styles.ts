import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  display: block;
  height: 50px;
  background: #162028;
  position: relative;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  margin: 5px 0 0 135px;
`;

export const HeaderNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const HeaderNavUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const HeaderNavLi = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 15px 0 0;
  padding: 13px;
`;
export const HeaderNavLink = styled.a`
  color: #425564;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 5px;
  transition: color 0.3s linear;

  &:hover {
    color: white;
  }
`;
