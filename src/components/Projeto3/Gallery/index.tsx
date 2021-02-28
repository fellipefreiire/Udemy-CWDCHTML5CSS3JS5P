import * as S from "./styles";
import { contents } from "./contents";

const Gallery: React.FC = () => {
  return (
    <>
      <S.GalleryH3>Imagens</S.GalleryH3>

      <S.GalleryFullWrapper>
        <S.GalleryFullImage
          src="/projeto3/fulls/05.jpg"
          width="200"
          height="150"
          alt=""
        />
      </S.GalleryFullWrapper>

      <S.GalleryImageWrapper>
        {contents.map((content, i) => {
          return <S.GalleryImage src={content.src} alt={content.alt} key={i} />;
        })}
      </S.GalleryImageWrapper>
    </>
  );
};

export default Gallery;
