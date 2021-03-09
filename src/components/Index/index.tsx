import * as S from "./styles";
import Link from "next/link";
import { contents } from "./contents";

const Index: React.FC = () => {
  return (
    <S.IndexWrapper>
      <S.IndexTitle>Curso Web Design</S.IndexTitle>
      <S.ProjectsWrapper>
        {contents.map((content, i) => {
          return (
            <S.ProjectWrapper key={i}>
              <Link href={content.href}>
                <S.Project width="300" height="200" src={content.src} />
              </Link>
              <S.Title>{content.title}</S.Title>
            </S.ProjectWrapper>
          );
        })}
      </S.ProjectsWrapper>
    </S.IndexWrapper>
  );
};

export default Index;
