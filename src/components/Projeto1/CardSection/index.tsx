import * as S from "./styles";
import { contents } from "./content";

const CardSection: React.FC = () => {
  return (
    <S.CardSection>
      {contents.map((content, i) => {
        return (
          <S.Card key={i}>
            <S.CardImage
              src={content.src}
              width="480"
              height="270"
              alt={content.alt}
            />
            <S.CardSectionText>{content.text}</S.CardSectionText>
          </S.Card>
        );
      })}
    </S.CardSection>
  );
};

export default CardSection;
