import * as S from "./styles";
import Image from "next/image";
import { contents } from "./contents";

const Gallery: React.FC = () => {
  return (
    <S.Gallery>
      {contents.map((content, i) => {
        return (
          <S.GalleryCard key={i}>
            <Image
              width="250"
              height="192"
              src={content.src}
              alt={content.alt}
            />
            <S.GalleryTitle>{content.title}</S.GalleryTitle>
            <S.GalleryText>{content.text}</S.GalleryText>
          </S.GalleryCard>
        );
      })}
    </S.Gallery>
  );
};

export default Gallery;
