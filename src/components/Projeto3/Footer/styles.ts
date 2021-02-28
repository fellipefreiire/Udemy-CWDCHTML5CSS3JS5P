import styled, { css } from "styled-components";

export const Footer = styled.footer`
  width: 35%;
  padding: 0 54px;
  position: fixed;
  bottom: 100px;
  left: 0;
  box-sizing: border-box;
  padding: 0 54px 72px 0;
  text-align: right;
`;

export const FooterUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  padding-left: 1.1em;
  list-style-type: none;
`;

export const FooterLi = styled.li`
  border-bottom: none;
  margin-bottom: 15px;
  font-size: 18px;

  & svg {
    width: 35px;
    color: #49bf9d;
    margin-right: 15px;
  }
`;

export const FooterLink = styled.a`
  transition: all 0.2s linear;
  text-decoration: none;
  color: inherit;

  ${(props) =>
    props.className === "text" &&
    css`
      border-bottom: 1px dotted;
    `}

  &:hover {
    border-bottom-color: transparent;
  }
`;
