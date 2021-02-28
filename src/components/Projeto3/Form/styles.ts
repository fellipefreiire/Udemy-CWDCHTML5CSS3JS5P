import styled, { css } from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
`;

export const FormTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FormRadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FormCheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FormButtonWrapper = styled.div`
  input {
    width: 180px;
    font-size: 1em;
    height: 55px;
    border-radius: 0.3125rem;
    box-sizing: border-box;
    color: #efefef;
  }
`;

export const FormH5 = styled.h5`
  font-weight: normal;
  margin: 1em 0;
  font-size: 18px;
`;

export const FormInput = styled.input`
  width: 49%;
  height: 40px;
  padding: 8px;

  ${(props) =>
    props.className === "button" &&
    css`
      background-color: #49bf9d;
      border: 0.125rem solid #49bf9d;
      margin-right: 25px;
    `}

  ${(props) =>
    props.className === "button stroke" &&
    css`
      background-color: #121214;
      border-color: #efefef;
    `}
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 8px;
  margin-bottom: 20px;
`;

export const FormOption = styled.option``;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  text-align: left;

  input {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  padding: 8px;
  font-size: 16px;
`;
