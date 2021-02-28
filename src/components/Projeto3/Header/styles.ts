import styled, { css } from "styled-components";
import Image from "next/image";

type headerProps = {
  bg: String;
  bg2: String;
};

export const MainHeader = styled.header<headerProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 35%;
  padding: 124px 54px 72px;
  box-sizing: border-box;
  background-image: url(${(props: any) => props.bg}),
    url(${(props: any) => props.bg2});
  background-position: left top;
  background-size: auto, cover;
  text-align: right;
`;

export const HeaderImage = styled(Image)`
  border-radius: 50%;
`;

export const MainHeaderLink = styled.a`
  color: inherit;
  transition: all 0.2s linear;
  text-decoration: none;
  border-bottom: 1px dotted;

  ${(props) =>
    props.className === "image" &&
    css`
      border: 0;
    `}

  &:hover {
    color: #49bf9d;
    border-bottom-color: transparent;
  }
`;

export const MainHeaderTitle = styled.h1`
  font-size: 28px;
  line-height: 1.5;
  color: white;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
`;

export const MainHeaderStrong = styled.strong`
  color: white;
  font-weight: normal;
`;
