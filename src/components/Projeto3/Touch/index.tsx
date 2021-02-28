import * as S from "./styles";

const Touch: React.FC = () => {
  return (
    <S.TouchWrapper>
      <S.TouchForm action="#" method="POST">
        <S.TouchInputWrapper>
          <S.TouchInput type="text" name="name" id="name" placeholder="Name" />

          <S.TouchInput
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </S.TouchInputWrapper>

        <S.TouchTextareaWrapper>
          <S.TouchTextarea
            name="mensagem"
            id="mensagem"
            placeholder="Message"
          ></S.TouchTextarea>
        </S.TouchTextareaWrapper>

        <S.TouchInput type="submit" className="button" value="Send Message" />
      </S.TouchForm>

      <S.TouchAddressWrapper>
        <S.TouchAddress>
          <S.HomeWrapper>
            <S.HomeIcon />
            <S.TouchText>
              1234 Somewhere Rd.
              <br /> Nashville, TN 0000
              <br /> United States
            </S.TouchText>
          </S.HomeWrapper>

          <S.PhoneWrapper>
            <S.PhoneIcon />
            <S.TouchText>000-000-0000</S.TouchText>
          </S.PhoneWrapper>

          <S.MailWrapper>
            <S.MailIcon />
            <S.TouchText>hello@untitled.tld</S.TouchText>
          </S.MailWrapper>
        </S.TouchAddress>
      </S.TouchAddressWrapper>
    </S.TouchWrapper>
  );
};

export default Touch;
