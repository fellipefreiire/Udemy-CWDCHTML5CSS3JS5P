import * as S from "./styles";

const Actions: React.FC = () => {
  return (
    <>
      <S.ActionsH5>Actions</S.ActionsH5>

      <S.ActionsRow50>
        <S.ActionsP>
          <S.ActionsButton href="#">Default</S.ActionsButton>
          <S.ActionsButton href="#" className="stroke">
            Default
          </S.ActionsButton>
        </S.ActionsP>
      </S.ActionsRow50>

      <S.ActionsRow33>
        <S.ActionsP>
          <S.ActionsButton href="#" className="small">
            Small
          </S.ActionsButton>
          <S.ActionsButton href="#" className="stroke small">
            Small
          </S.ActionsButton>
        </S.ActionsP>
      </S.ActionsRow33>

      <S.ActionsRow>
        <S.ActionsCol2>
          <S.ActionsP2>
            <S.ActionsButton href="#" className="stack">
              Default
            </S.ActionsButton>
            <S.ActionsButton href="#" className="stroke">
              Default
            </S.ActionsButton>
          </S.ActionsP2>
        </S.ActionsCol2>

        <S.ActionsCol2>
          <S.ActionsP2Small>
            <S.ActionsButton href="#" className="small stack">
              Small
            </S.ActionsButton>
            <S.ActionsButton href="#" className="stroke small stack">
              Small
            </S.ActionsButton>
          </S.ActionsP2Small>
        </S.ActionsCol2>
      </S.ActionsRow>

      <S.ActionsRow>
        <S.ActionsCol2>
          <S.ActionsP2>
            <S.ActionsButton href="#" className="stack full">
              Default
            </S.ActionsButton>
            <S.ActionsButton href="#" className="stroke full">
              Default
            </S.ActionsButton>
          </S.ActionsP2>
        </S.ActionsCol2>

        <S.ActionsCol2>
          <S.ActionsP2Small>
            <S.ActionsButton href="#" className="small stack full">
              Small
            </S.ActionsButton>
            <S.ActionsButton href="#" className="stroke small stack full">
              Small
            </S.ActionsButton>
          </S.ActionsP2Small>
        </S.ActionsCol2>
      </S.ActionsRow>
    </>
  );
};

export default Actions;
