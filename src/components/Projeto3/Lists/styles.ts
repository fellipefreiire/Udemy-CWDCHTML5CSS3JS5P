import styled, { css } from "styled-components";

export const ListsH4 = styled.h4`
  font-weight: normal;
  margin: 1em 0;
  font-size: 22px;
`;

export const ListsH5 = styled.h5`
  font-weight: normal;
  margin: 1em 0;
  font-size: 18px;
`;

export const ListsRow = styled.div`
  overflow: auto;
`;

export const ListsCol2 = styled.div`
  width: 50%;
  float: left;
`;

export const ListsUl = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 1.1em;

  ${(props) =>
    props.className === "alternate" &&
    css`
      list-style-type: none;
      padding-left: 0;
      margin-right: 100px;
    `}
`;

export const ListsOl = styled.ol`
  margin: 0;
  padding: 0;
  padding-left: 1.1em;
`;

export const ListsLi = styled.li`
  padding-left: 0.5em;

  ${(props) =>
    props.className === "alternate" &&
    css`
      border-bottom: 2px solid #d8d8d8;
      padding-left: 0;
      padding-bottom: 15px;
      padding-top: 15px;

      &:last-child {
        border-bottom: 0;
      }
    `}
`;
