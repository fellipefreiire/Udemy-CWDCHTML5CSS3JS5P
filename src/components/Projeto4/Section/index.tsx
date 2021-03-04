import * as S from "./styles";

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return <S.Section className={props.className}>{props.children}</S.Section>;
};

export default Section;
