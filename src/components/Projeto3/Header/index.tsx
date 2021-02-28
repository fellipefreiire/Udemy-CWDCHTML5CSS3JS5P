import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.MainHeader bg="/projeto3/overlay.png" bg2="/projeto3/bg.jpg">
      <S.MainHeaderLink href="index.html" className="image">
        <S.HeaderImage
          width="123"
          height="123"
          src="/projeto3/avatar.jpg"
          alt="Avatar"
        />
      </S.MainHeaderLink>
      <S.MainHeaderTitle>
        Trabalhos e groselhas de <br />
        <S.MainHeaderStrong>Felipe Freire</S.MainHeaderStrong>
        <br />
        Front-end Developer
        <br />
        Retirado de{" "}
        <S.MainHeaderLink href="https://html5up.net">
          html5up.net
        </S.MainHeaderLink>
        .
      </S.MainHeaderTitle>
    </S.MainHeader>
  );
};

export default Header;
