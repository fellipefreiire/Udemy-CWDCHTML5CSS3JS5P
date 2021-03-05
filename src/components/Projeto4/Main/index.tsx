import * as S from "./styles";
import Section from "../Section";
import Button from "../Button";
import { sections, articles, articlesButton } from "./contents";
import Icons from "./icons";

const Main: React.FC = () => {
  return (
    <main>
      <Section className="top-content">
        <S.MainH1>A exciting new venture over the range</S.MainH1>
        <S.MainH2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur
          adipisicing elit.
        </S.MainH2>
        <Button href="#" text="Get Started" />
      </Section>

      <Section className="middle-content">
        {sections.map((section, i) => {
          const Icon = Icons[section.icon];
          return (
            <article key={i}>
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
              <S.MainH3>{section.title}</S.MainH3>
              <S.MainP>{section.text}</S.MainP>
            </article>
          );
        })}
      </Section>

      <Section className="main-content">
        {articles.map((article, i) => {
          return (
            <S.MainContentArticle key={i}>
              <S.MainH3>{article.title}</S.MainH3>
              <S.MainP>{article.text}</S.MainP>
            </S.MainContentArticle>
          );
        })}

        {articlesButton.map((article, i) => {
          return (
            <S.MainContentArticle key={i}>
              <S.MainH3>{article.title}</S.MainH3>
              <S.MainP>{article.text}</S.MainP>

              <Button href={article.href} text={article.linkTitle} />
            </S.MainContentArticle>
          );
        })}
      </Section>
    </main>
  );
};

export default Main;
