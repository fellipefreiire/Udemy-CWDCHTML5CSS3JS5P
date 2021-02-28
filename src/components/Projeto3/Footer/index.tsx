import * as S from "./styles";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Dribbble } from "@styled-icons/boxicons-logos/Dribbble";
import { Mail } from "@styled-icons/feather/Mail";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterUl>
        <S.FooterLi>
          <S.FooterLink href="#">
            <Twitter />
          </S.FooterLink>
        </S.FooterLi>
        <S.FooterLi>
          <S.FooterLink href="#">
            <Github />
          </S.FooterLink>
        </S.FooterLi>
        <S.FooterLi>
          <S.FooterLink href="#">
            <Dribbble />
          </S.FooterLink>
        </S.FooterLi>
        <S.FooterLi>
          <S.FooterLink href="#">
            <Mail />
          </S.FooterLink>
        </S.FooterLi>
      </S.FooterUl>
      <S.FooterUl>
        <S.FooterLi>&copy; Untitled |</S.FooterLi>
        <S.FooterLi>
          Design:{" "}
          <S.FooterLink className="text" href="http://html5up.net">
            HTML5 UP
          </S.FooterLink>
        </S.FooterLi>
      </S.FooterUl>
    </S.Footer>
  );
};

export default Footer;
