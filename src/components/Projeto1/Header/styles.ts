import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

type headerProps = {
  bg: String;
};

type menuProps = {
  open: Boolean;
};

export const Hero = styled.header<headerProps>`
  background-image: url(${(props: any) => props.bg});
  height: 50rem;
  background-position: right center;
  background-size: cover;
  border-top: 0.0625rem solid transparent;

  ${media.lessThan("medium")`
    height: 34.375rem;
    `}

  ${media.lessThan("small")`
    height: 30rem;
    background-position: 30rem;
  `}
`;

export const HeroNav = styled.nav``;

export const MenuIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  margin: auto;
  z-index: 999;
  bottom: 1rem;
  width: 100%;

  ${media.greaterThan("small")`
    display: none;
    visibility: none;
  `}
`;

export const MenuIcon = styled(Menu)`
  ${media.greaterThan("small")`
    display: none;
    visibility: none;
  `}
  height: 3.125rem;
  width: 3.125rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;

export const HeroNavUl = styled.ul<menuProps>`
  text-align: right;
  margin: 1.5625rem 0 0 0;

  ${media.lessThan("small")`
    background-color: rgba(0, 0, 0, 0.7);
    margin: 0;
    margin-top: -1px;
    width: 100%;
    z-index: 998;
    position: fixed;
    transition: all 0.2s ease;
    transform: translateX(-100%);
    ${(props: any) =>
      props.open &&
      css`
        transform: translateX(0px);
      `}
  `}
`;

export const HeroNavLi = styled.li`
  display: inline-block;
  list-style: none;
  border: 0.0625rem solid white;
  margin-right: 1.875rem;

  ${media.lessThan("small")`
    width: 100%;
    margin: 0;
    text-align: center;
    border: 0;
  `}
`;

export const HeroNavA = styled.a`
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  padding: 1.5625rem 0.9375rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.125rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  margin-top: 15rem;

  ${media.lessThan("medium")`
    margin-top: 6.5rem;
  `}

  ${media.lessThan("small")`
    margin-top: 9.5rem;
  `}
`;

export const HeroContentH1 = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
  text-shadow: 0.1875rem 0.1875rem 0.125rem #333;

  ${media.lessThan("small")`
    font-size: 2.75rem;
  `}
`;

export const HeroContentP = styled.p`
  font-size: 1.75rem;

  ${media.lessThan("small")`
    font-size: 1rem;
  `}
`;

export const HeroContentAbbr = styled.abbr``;
