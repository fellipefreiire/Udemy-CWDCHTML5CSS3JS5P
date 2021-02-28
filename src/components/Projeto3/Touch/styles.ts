import styled, { css } from "styled-components";
import { Home } from "@styled-icons/fa-solid/Home";
import { PhoneIphone } from "@styled-icons/material/PhoneIphone";
import { Mail } from "@styled-icons/feather/Mail";

export const TouchWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TouchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const TouchTextareaWrapper = styled.div`
  height: 180px;
  padding: 20px;
`;

export const TouchAddressWrapper = styled.div`
  width: 25%;
`;

export const TouchForm = styled.form`
  width: 75%;
`;

export const TouchInput = styled.input`
  font-size: 16px;
  padding: 5px;
  width: 47%;
  height: 40px;

  ${(props) =>
    props.className === "button" &&
    css`
      background-color: #121214;
      border-color: #efefef;
      color: #efefef;
      border-radius: 0.3125rem;
      box-sizing: border-box;
      width: 220px;
      height: 60px;
      font-size: 20px;
      margin-left: 20px;
    `}
`;

export const TouchTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 16px;
`;

export const TouchAddress = styled.address`
  display: flex;
  flex-direction: column;
`;

export const TouchText = styled.p`
  margin: 0 0 2em;
  line-height: 2;
  font-style: normal;
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const HomeIcon = styled(Home)`
  width: 30px;
  margin: 0 20px;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PhoneIcon = styled(PhoneIphone)`
  width: 30px;
  margin: 0 20px;
`;

export const MailWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MailIcon = styled(Mail)`
  width: 30px;
  margin: 0 20px;
`;
