import * as S from "./styles";

const Code: React.FC = () => {
  return (
    <>
      <S.CodeH4>Blockquote</S.CodeH4>
      <S.CodeBlockquote>
        <S.CodeText>
          Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
          sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem
          ipsum dolor sit amet nullam adipiscing eu felis.
        </S.CodeText>
      </S.CodeBlockquote>

      <S.CodeH4>Preformatted</S.CodeH4>
      <S.CodePre>
        <S.Code>
          i = 0;{"\n"}
          {"\n"}
          while(!deck.isInOrder()) {"{"}
          {"\n"}
          {"   "}print 'Iteration ' + i;{"\n"}
          {"   "}deck.shuffle();{"\n"}
          {"   "}i++;{"\n"}
          {"}"}
          {"\n"}
          {"\n"}
          print 'It took ' + i + ' iterations to sort the deck.';{"\n"}
        </S.Code>
      </S.CodePre>
    </>
  );
};

export default Code;
