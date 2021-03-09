import styled from "styled-components";
import media from "styled-media-query";

export const Header = styled.header`
  text-align: center;

  ${media.greaterThan("medium")`
    color: white !important;
    &:after {
      content: " ";
      display: block;
      clear: both;
    }
  `}
`;

export const Nav = styled.nav`
  background: #612674;
  text-align: center;

  ${media.greaterThan("medium")`
    background: transparent;
    float: right;
    margin-top: 3.3125rem;
  `}

  ${media.greaterThan("huge")`
    margin-right: 6.625rem
  `}
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  ${media.greaterThan("medium")`
    display: inline-block;
  `}
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  display: block;

  &:hover {
    background: #7c3792;
  }

  ${media.greaterThan("medium")`
    color: #713a84;

    &:hover {
      background: #e7d9fc;
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${media.greaterThan("medium")`
    float: left;
  `}

  ${media.greaterThan("huge")`
    margin-left: 6.625rem
  `}
`;
