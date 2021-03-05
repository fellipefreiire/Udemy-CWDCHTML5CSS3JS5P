import * as S from "./styles";
import { links } from "./contents";
import Icons from "./icons";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterUl>
        {links.map((link, i) => {
          const Icon = Icons[link.icon];
          return (
            <S.FooterLi key={i}>
              <Link href={link.href} passHref>
                <S.FooterLink>
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                  <S.FooterSpan>{link.text}</S.FooterSpan>
                </S.FooterLink>
              </Link>
            </S.FooterLi>
          );
        })}
      </S.FooterUl>

      <S.FooterP>Copyright The Range</S.FooterP>
      <S.FooterP>
        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum
      </S.FooterP>
    </S.Footer>
  );
};

export default Footer;
