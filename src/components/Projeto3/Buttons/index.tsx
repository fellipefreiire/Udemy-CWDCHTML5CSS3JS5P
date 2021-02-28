import * as S from "./styles";

const Buttons: React.FC = () => {
  return (
    <>
      <S.ButtonsH5>Buttons</S.ButtonsH5>

      <S.ButtonsWrapper>
        <S.Row className="W40">
          <S.Button>Special</S.Button>
          <S.Button className="stroke">Default</S.Button>
        </S.Row>
      </S.ButtonsWrapper>

      <S.ButtonsWrapper>
        <S.Row className="W66">
          <S.Button className="stroke big">Big</S.Button>
          <S.Button className="stroke">Default</S.Button>
          <S.Button className="stroke small">Small</S.Button>
        </S.Row>
      </S.ButtonsWrapper>

      <S.ButtonsWrapper>
        <S.Row className="W100">
          <S.Button className="fit">Fit</S.Button>
          <S.Button className="stroke fit">Fit</S.Button>
        </S.Row>
      </S.ButtonsWrapper>

      <S.ButtonsWrapper>
        <S.Row className="W100">
          <S.Button className="fit small">Fit + Small</S.Button>
          <S.Button className="stroke fit small">Fit + Small</S.Button>
        </S.Row>
      </S.ButtonsWrapper>

      <S.ButtonsWrapper>
        <S.Row className="W40">
          <S.Button>
            <S.Icon />
            Icon
          </S.Button>
          <S.Button className="stroke">
            <S.Icon />
            Icon
          </S.Button>
        </S.Row>
      </S.ButtonsWrapper>

      <S.ButtonsWrapper>
        <S.Row className="W40">
          <S.Button disabled={true}>Special</S.Button>
          <S.Button disabled={true}>Default</S.Button>
        </S.Row>
      </S.ButtonsWrapper>
    </>
  );
};

export default Buttons;
