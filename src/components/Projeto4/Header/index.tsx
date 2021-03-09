import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { contents } from "./contents";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.ImageWrapper>
        <Image
          width="300"
          height="100"
          src="/projeto4/logo_mob.svg"
          alt="logotipo range Hotels"
        />
      </S.ImageWrapper>

      <S.Nav>
        <S.Ul>
          {contents.map((content, i) => {
            return (
              <S.Li key={i}>
                <Link href={content.href} passHref>
                  <S.Link>{content.text}</S.Link>
                </Link>
              </S.Li>
            );
          })}
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
