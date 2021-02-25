import * as S from "./styles";

const About: React.FC = () => {
  return (
    <S.About bg="/projeto2/bg_detalhe.png" id="about">
      <S.AboutTitle>
        Everything Never Enough
        <br />
        Just Fashion
      </S.AboutTitle>
      <S.AboutText>
        Praesent placerat eros eget lacus ullamcorper, id dapibus ante
        vestibulum. Curabitur quis condimentum diam. Duis aliquet erat vel
        laoreet tincidunt. Pellentesque vitae varius ligula. Phasellus in nibh
        tempus, gravida justo et, suscipit felis. Cras ornare arcu ac sodales
        tincidunt. Mauris vehicula erat vel ligula porttitor imperdiet.
        Curabitur nec magna urna. Sed porta ex ex, at pulvinar nibh aliquet
        quis. Integer dapibus congue vestibulum. Phasellus bibendum lobortis
        quam, nec sollicitudin nisl volutpat at.
      </S.AboutText>
    </S.About>
  );
};

export default About;
