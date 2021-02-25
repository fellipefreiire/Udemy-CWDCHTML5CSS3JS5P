import { useState } from "react";
import * as S from "./styles";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <S.Hero bg="/projeto1/bg-3.jpg">
      <S.HeroNav>
        <S.MenuIconWrapper>
          <S.MenuIcon onClick={handleClick} />
        </S.MenuIconWrapper>
        <S.HeroNavUl open={open}>
          <S.HeroNavLi>
            <S.HeroNavA href="/">Início</S.HeroNavA>
          </S.HeroNavLi>
          <S.HeroNavLi>
            <S.HeroNavA href="#">Quem sou eu</S.HeroNavA>
          </S.HeroNavLi>
          <S.HeroNavLi>
            <S.HeroNavA href="#">Contato</S.HeroNavA>
          </S.HeroNavLi>
        </S.HeroNavUl>
      </S.HeroNav>
      <S.HeroContent>
        <S.HeroContentH1>Curso Web Fundamentos</S.HeroContentH1>
        <S.HeroContentP>
          Aprenda <S.HeroContentAbbr>HTML</S.HeroContentAbbr>,{" "}
          <S.HeroContentAbbr>CSS</S.HeroContentAbbr> e Javascript
        </S.HeroContentP>
      </S.HeroContent>
    </S.Hero>
  );
};

export default Header;
