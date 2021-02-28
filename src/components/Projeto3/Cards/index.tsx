import * as S from "./styles";
import { contents } from "./contents";

const Cards: React.FC = () => {
  return (
    <S.CardWrapper>
      {contents.map((content, i) => {
        return (
          <S.Card key={i}>
            <S.CardLink href={content.href}>
              <S.CardImage
                width="370"
                height="217"
                src={content.src}
                alt={content.alt}
              />
            </S.CardLink>
            <S.CardTitle>{content.title}</S.CardTitle>
            <S.CardText>{content.text}</S.CardText>
          </S.Card>
        );
      })}
    </S.CardWrapper>
  );
};

export default Cards;
