import * as S from "./styles";
import Icons from "./Icons";
import Actions from "./Actions";

const Lists: React.FC = () => {
  return (
    <>
      <S.ListsH4>Lists</S.ListsH4>

      <S.ListsRow>
        <S.ListsCol2>
          <S.ListsH5>Unordered</S.ListsH5>
          <S.ListsUl>
            <S.ListsLi>Dolor pulvinar etiam magna etiam.</S.ListsLi>
            <S.ListsLi>Sagittis adipiscing lorem eleifend.</S.ListsLi>
            <S.ListsLi>Felis enim feugiat dolore viverra.</S.ListsLi>
          </S.ListsUl>

          <S.ListsH5>Alternate</S.ListsH5>
          <S.ListsUl className="alternate">
            <S.ListsLi className="alternate">
              Dolor pulvinar etiam magna etiam.
            </S.ListsLi>
            <S.ListsLi className="alternate">
              Sagittis adipiscing lorem eleifend.
            </S.ListsLi>
            <S.ListsLi className="alternate">
              Felis enim feugiat dolore viverra.
            </S.ListsLi>
          </S.ListsUl>
        </S.ListsCol2>

        <S.ListsCol2>
          <S.ListsH5>Ordered</S.ListsH5>
          <S.ListsOl>
            <S.ListsLi>Dolor pulvinar etiam magna etiam.</S.ListsLi>
            <S.ListsLi>Etiam vel felis at lorem sed viverra.</S.ListsLi>
            <S.ListsLi>Felis enim feugiat dolore viverra.</S.ListsLi>
            <S.ListsLi>Dolor pulvinar etiam magna etiam.</S.ListsLi>
            <S.ListsLi>Etiam vel felis at lorem sed viverra.</S.ListsLi>
            <S.ListsLi>Felis enim feugiat dolore viverra.</S.ListsLi>
          </S.ListsOl>

          <Icons />
        </S.ListsCol2>
      </S.ListsRow>

      <Actions />
    </>
  );
};

export default Lists;
