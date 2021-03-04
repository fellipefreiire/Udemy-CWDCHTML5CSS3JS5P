import * as S from "./styles";
import Section from "../Section";
import Button from "../Button";
import { sections, articles, articlesButton } from "./contents";

const Main: React.FC = () => {
  return (
    <main>
      <Section className="top-content">
        <h1>A exciting new venture over the range</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur
          adipisicing elit.
        </h2>
        <Button href="#" text="Get Started" />
      </Section>

      {sections.map((section, i) => {
        return (
          <Section key={i}>
            <article>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          </Section>
        );
      })}

      <Section>
        {articles.map((article, i) => {
          return (
            <article key={i}>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </article>
          );
        })}

        {articlesButton.map((article, i) => {
          return (
            <article key={i}>
              <h3>{article.title}</h3>
              <p>{article.text}</p>

              <Button href={article.href} text={article.linkTitle} />
            </article>
          );
        })}
      </Section>
    </main>
  );
};

export default Main;
