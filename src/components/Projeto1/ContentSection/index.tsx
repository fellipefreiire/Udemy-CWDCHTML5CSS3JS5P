import * as S from "./styles";

const ContentSection: React.FC = () => {
  return (
    <S.ContentSection className="content-section">
      <S.ContentSectionArticle className="content-section_article">
        <S.ContentSectionH2>Título</S.ContentSectionH2>
        <S.ContentSectionText>
          Primeiro parágrafo de exemplo
        </S.ContentSectionText>
        <S.ContentSectionText>
          Segundo parágrafo de exemplo
        </S.ContentSectionText>
      </S.ContentSectionArticle>
    </S.ContentSection>
  );
};

export default ContentSection;
