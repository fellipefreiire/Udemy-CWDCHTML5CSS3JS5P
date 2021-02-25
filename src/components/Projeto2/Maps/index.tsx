import * as S from "./styles";

const Maps: React.FC = () => {
  return (
    <S.Maps>
      <S.MapsFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876468.200307723!2d-113.72221585646199!3d54.72270517403909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2zQ2FuYWTDoQ!5e0!3m2!1spt-BR!2sbr!4v1613958336194!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
      ></S.MapsFrame>
    </S.Maps>
  );
};

export default Maps;
