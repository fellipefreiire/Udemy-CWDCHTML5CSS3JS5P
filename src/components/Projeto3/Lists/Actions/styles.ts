import styled, { css } from "styled-components";

export const ActionsH5 = styled.h5`
  font-weight: normal;
  margin: 1em 0;
  font-size: 18px;
`;

export const ActionsRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
`;

export const ActionsCol2 = styled.div`
  width: 50%;
`;

export const ActionsRow50 = styled.div`
  width: 45%;
  margin-bottom: 25px;
`;

export const ActionsRow33 = styled.div`
  width: 33%;
  margin-bottom: 25px;
`;

export const ActionsP = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const ActionsP2 = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 123px;
`;

export const ActionsP2Small = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100px;
`;

export const ActionsButton = styled.a`
  display: flex;
  box-sizing: border-box;
  background-color: #49bf9d;
  border: 2px solid #49bf9d;
  color: white;
  border-radius: 5px;
  width: 47%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #58c9c9;
    border-color: #58c9c9;
  }

  ${(props) =>
    props.className === "stroke" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

  ${(props) =>
    props.className === "small" &&
    css`
      width: 45%;
      height: 80%;
      font-size: 14px;
    `}

    ${(props) =>
    props.className === "stroke small" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;
      width: 45%;
      height: 80%;
      font-size: 14px;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

    ${(props) =>
    props.className === "stack" &&
    css`
      margin-bottom: 15px;
    `} 
    
    ${(props) =>
    props.className === "small stack" &&
    css`
      margin-bottom: 20px;
      width: 29.5%;
      font-size: 14px;
    `}
    
    ${(props) =>
    props.className === "stroke small stack" &&
    css`
      width: 29.5%;
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;
      font-size: 14px;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

    ${(props) =>
    props.className === "stack full" &&
    css`
      margin-bottom: 15px;
      width: 90%;
    `}

    ${(props) =>
    props.className === "stroke full" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;
      width: 90%;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

    ${(props) =>
    props.className === "small stack full" &&
    css`
      margin-bottom: 20px;
      width: 70%;
      font-size: 14px;
    `}

    ${(props) =>
    props.className === "stroke small stack full" &&
    css`
      width: 70%;
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;
      font-size: 14px;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}
`;
