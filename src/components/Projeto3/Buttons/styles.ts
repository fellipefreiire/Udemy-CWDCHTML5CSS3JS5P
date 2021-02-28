import styled, { css } from "styled-components";
import { Download } from "@styled-icons/fa-solid/Download";

export const ButtonsH5 = styled.h5`
  font-weight: normal;
  margin: 1em 0;
  font-size: 1.125rem;
`;

export const ButtonsWrapper = styled.div`
  margin: 0 0 2em;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  ${(props) =>
    props.className === "W40" &&
    css`
      width: 40%;
    `}

  ${(props) =>
    props.className === "W66" &&
    css`
      width: 66%;
    `}

  ${(props) =>
    props.className === "W100" &&
    css`
      width: 100%;
    `}
`;

export const Button = styled.button`
  box-sizing: border-box;
  background-color: #49bf9d;
  border: 0.125rem solid #49bf9d;
  color: white;
  border-radius: 0.3125rem;
  height: 100%;
  font-size: 1.2em;
  text-decoration: none;
  padding: 0.9375rem 4.375rem;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #58c9c9;
    border-color: #58c9c9;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e7e6e8;
      border-color: #e7e6e8;
      color: #121214;

      &:hover {
        background-color: #e7e6e8;
        border-color: #e7e6e8;
        color: #121214;
      }
    `}

  ${(props) =>
    props.className === "stroke" &&
    css`
      background-color: #121214;
      border-color: #efefef;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

  ${(props) =>
    props.className === "stroke big" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      padding: 1.25rem 8.125rem;
      font-size: 1.75rem;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

  ${(props) =>
    props.className === "stroke small" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      padding: 0.9375rem 3.75rem;
      font-size: 0.875rem;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

  ${(props) =>
    props.className === "fit" &&
    css`
      padding: 1.25rem 16.25rem;
    `}
  ${(props) =>
    props.className === "stroke fit" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      padding: 1.25rem 16.25rem;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}

  ${(props) =>
    props.className === "fit small" &&
    css`
      padding: 0.9375rem 14.8125rem;
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.className === "stroke fit small" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      padding: 0.9375rem 14.8125rem;
      font-size: 0.875rem;

      &:hover {
        background-color: #121214;
        border-color: #49bf9d;
        color: #49bf9d;
      }
    `}
`;

export const Icon = styled(Download)`
  width: 20px;
  margin-right: 10px;
`;
