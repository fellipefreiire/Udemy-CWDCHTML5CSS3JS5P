import * as S from "./styles";

const Form: React.FC = () => {
  return (
    <S.FormWrapper>
      <S.FormH5>Form</S.FormH5>
      <S.FormTextWrapper>
        <S.FormInput type="text" name="name" id="name2" placeholder="Name" />
        <S.FormInput type="text" name="email" id="email2" placeholder="Email" />
      </S.FormTextWrapper>

      <S.FormSelect>
        <S.FormOption value="0">- Category -</S.FormOption>
        <S.FormOption value="1">HTML</S.FormOption>
        <S.FormOption value="2">CSS</S.FormOption>
        <S.FormOption value="3">Javascript</S.FormOption>
      </S.FormSelect>

      <S.FormRadioWrapper>
        <S.FormLabel>
          <S.FormInput type="radio" value="low" name="priority" />
          Low Priority
        </S.FormLabel>

        <S.FormLabel>
          <S.FormInput type="radio" value="normal" name="priority" />
          Normal Priority
        </S.FormLabel>

        <S.FormLabel>
          <S.FormInput type="radio" value="high" name="priority" />
          High Priority
        </S.FormLabel>
      </S.FormRadioWrapper>

      <S.FormCheckboxWrapper>
        <S.FormLabel>
          <S.FormInput type="checkbox" name="copy" value="1" />
          Email me a copy of this message
        </S.FormLabel>
        <S.FormLabel>
          <S.FormInput type="checkbox" name="human" value="1" />I am a human and
          not a robot
        </S.FormLabel>
      </S.FormCheckboxWrapper>

      <S.FormTextarea
        placeholder="Enter your message"
        id="msg"
      ></S.FormTextarea>

      <S.FormButtonWrapper>
        <S.FormInput type="submit" className="button" value="Send Message" />
        <S.FormInput type="reset" className="button stroke" value="Reset" />
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
};

export default Form;
