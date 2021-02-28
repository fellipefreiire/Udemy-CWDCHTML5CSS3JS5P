import * as S from "./styles";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Dribbble } from "@styled-icons/boxicons-logos/Dribbble";
import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr";

const Icons: React.FC = () => {
  return (
    <>
      <S.IconsH5>Icons</S.IconsH5>
      <S.IconsUl>
        <S.IconsLi>
          <Twitter />
        </S.IconsLi>
        <S.IconsLi>
          <Facebook />
        </S.IconsLi>
        <S.IconsLi>
          <Instagram />
        </S.IconsLi>
        <S.IconsLi>
          <Github />
        </S.IconsLi>
        <S.IconsLi>
          <Dribbble />
        </S.IconsLi>
        <S.IconsLi>
          <Tumblr />
        </S.IconsLi>
      </S.IconsUl>
    </>
  );
};

export default Icons;
