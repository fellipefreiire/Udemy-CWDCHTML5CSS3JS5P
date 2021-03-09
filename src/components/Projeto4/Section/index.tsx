import * as S from "./styles";

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <S.Section
      bg="/projeto4/bg_topo_1198x670.jpg"
      bg2="/projeto4/bg_topo_1600x1374.jpg"
      className={props.className}
    >
      {props.children}
    </S.Section>
  );
};

export default Section;
