import * as S from "./styles";
import Cards from "../Cards";
import Touch from "../Touch";
import Code from "../Code";
import Lists from "../Lists";
import Table from "../Table";
import Buttons from "../Buttons";
import Form from "../Form";
import Gallery from "../Gallery";
import LeftRight from "../LeftRight";

const Main: React.FC = () => {
  return (
    <S.MainContent>
      <S.MainContentSection>
        <S.MainContentH2>
          Quando o header é aside e o aside é no header
        </S.MainContentH2>
        <S.MainContentText>
          Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
          lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
          tortor primis integer massa adipiscing id nisi accumsan pellentesque
          commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
          faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque
          cubilia.
        </S.MainContentText>
        <S.MainContentButtonLink href="#" title="Veja mais">
          Veja mais
        </S.MainContentButtonLink>
      </S.MainContentSection>

      <S.MainContentSection>
        <S.MainContentH3>Recent Work</S.MainContentH3>
        <Cards />
        <S.MainContentButtonLink href="#" title="Veja Portifolio completo">
          Veja Portifolio completo
        </S.MainContentButtonLink>
      </S.MainContentSection>

      <S.MainContentSection>
        <S.MainContentH3>Get in Touch</S.MainContentH3>
        <S.MainContentText>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </S.MainContentText>
        <Touch />
      </S.MainContentSection>

      <S.MainContentSection>
        <S.MainContentH3>Elements</S.MainContentH3>

        <S.MainContentH4>text</S.MainContentH4>
        <S.MainContentText>
          This is <b>bold</b> and this is <strong>strong</strong>. This is
          <i>italic</i> and this is <em>emphasized</em>. This is
          <S.MainContentSup>superscript</S.MainContentSup> text and this is{" "}
          <S.MainContentSub>subscript</S.MainContentSub> text. This is{" "}
          <u>underlined</u> and this is
          <S.MainContentCode>{"code: for (;;) { ... }"}</S.MainContentCode>.
          Finally, this is{" "}
          <S.MainContentButtonLink href="#">a link</S.MainContentButtonLink>.
        </S.MainContentText>

        <hr />

        <S.MainContentH3>Heading with a Subtitle</S.MainContentH3>
        <S.MainContentText>
          Lorem ipsum dolor sit amet nullam id egestas urna aliquam
        </S.MainContentText>
        <S.MainContentText>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </S.MainContentText>

        <S.MainContentH4>Heading with a Subtitle</S.MainContentH4>
        <S.MainContentText>
          Lorem ipsum dolor sit amet nullam id egestas urna aliquam
        </S.MainContentText>
        <S.MainContentText>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </S.MainContentText>

        <hr />

        <S.MainContentH1>Heading Level 1</S.MainContentH1>
        <S.MainContentH2>Heading Level 2</S.MainContentH2>
        <S.MainContentH3>Heading Level 3</S.MainContentH3>
        <S.MainContentH4>Heading Level 4</S.MainContentH4>
        <S.MainContentH5>Heading Level 5</S.MainContentH5>
        <S.MainContentH6>Heading Level 6</S.MainContentH6>
      </S.MainContentSection>

      <S.MainContentSection>
        <Code />
      </S.MainContentSection>

      <S.MainContentSection>
        <Lists />
        <Table />
        <Buttons />
        <Form />
      </S.MainContentSection>

      <S.MainContentSection>
        <Gallery />
        <LeftRight />
      </S.MainContentSection>
    </S.MainContent>
  );
};

export default Main;
