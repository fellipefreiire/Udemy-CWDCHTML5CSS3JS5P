import styled, { css } from "styled-components";

export const LeftRightH4 = styled.h4`
  font-weight: normal;
  margin: 1em 0;
  font-size: 22px;
`;

export const LeftRightText = styled.p`
  margin: 0 0 2em;
  font-size: 20px;
`;

export const LeftRightImg = styled.img`
  ${(props) =>
    props.className === "left" &&
    css`
      float: left;
      padding: 0 15px 15px 0;
    `}

  ${(props) =>
    props.className === "right" &&
    css`
      float: right;
      padding: 0 0 15px 15px;
    `}
`;
