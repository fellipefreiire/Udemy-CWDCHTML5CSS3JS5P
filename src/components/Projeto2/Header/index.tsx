import * as S from "./styles";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <Image
            width="110"
            height="35"
            src="/projeto2/logo.png"
            alt="Logotipo Fashion"
          />
        </S.LogoWrapper>
        <S.HeaderNav>
          <S.HeaderNavUl>
            <S.HeaderNavLi>
              <S.HeaderNavLink href="#portfolio">Portfolio</S.HeaderNavLink>
            </S.HeaderNavLi>
            <S.HeaderNavLi>
              <S.HeaderNavLink href="#about">About us</S.HeaderNavLink>
            </S.HeaderNavLi>
            <S.HeaderNavLi>
              <S.HeaderNavLink href="#contact">Contact</S.HeaderNavLink>
            </S.HeaderNavLi>
          </S.HeaderNavUl>
        </S.HeaderNav>
      </S.Header>
      <Image
        width="1024"
        height="488"
        src="/projeto2/topo.jpg"
        alt="Logotipo Fashion"
      />
    </>
  );
};

export default Header;
