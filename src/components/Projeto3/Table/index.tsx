import * as S from "./styles";

const Table: React.FC = () => {
  return (
    <>
      <S.TableH4>Table</S.TableH4>
      <S.TableH5>Default</S.TableH5>
      <S.Table>
        <S.TableHead>
          <S.TableTr>
            <S.TableTh>Name</S.TableTh>
            <S.TableTh>Description</S.TableTh>
            <S.TableTh>Price</S.TableTh>
          </S.TableTr>
        </S.TableHead>

        <S.TableFoot>
          <S.TableTr>
            <S.TableTd colSpan={2}></S.TableTd>
            <S.TableTd>100.00</S.TableTd>
          </S.TableTr>
        </S.TableFoot>

        <S.TableTBody>
          <S.TableTr>
            <S.TableTd>Item One</S.TableTd>
            <S.TableTd>Ante turpis integer aliquet porttitor.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>

          <S.TableTr>
            <S.TableTd>Item Two</S.TableTd>
            <S.TableTd>Vis ac commodo adipiscing arcu aliquet.</S.TableTd>
            <S.TableTd>19.99</S.TableTd>
          </S.TableTr>

          <S.TableTr>
            <S.TableTd>Item Three</S.TableTd>
            <S.TableTd>Morbi faucibus arcu accumsan lorem.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>

          <S.TableTr>
            <S.TableTd>Item Four</S.TableTd>
            <S.TableTd>Vitae integer tempus condimentum.</S.TableTd>
            <S.TableTd>19.99</S.TableTd>
          </S.TableTr>

          <S.TableTr>
            <S.TableTd>Item Five</S.TableTd>
            <S.TableTd>Ante turpis integer aliquet porttitor.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>
        </S.TableTBody>
      </S.Table>

      <S.TableH5>Alternate</S.TableH5>

      <S.Table>
        <S.TableHead>
          <S.TableTr>
            <S.TableTh>Name</S.TableTh>
            <S.TableTh>Description</S.TableTh>
            <S.TableTh>Price</S.TableTh>
          </S.TableTr>
        </S.TableHead>
        <S.TableFoot>
          <S.TableTr>
            <S.TableTd colSpan={2}></S.TableTd>
            <S.TableTd>100.00</S.TableTd>
          </S.TableTr>
        </S.TableFoot>
        <S.TableTBody className="alternate">
          <S.TableTr>
            <S.TableTd>Item One</S.TableTd>
            <S.TableTd>Ante turpis integer aliquet porttitor.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>
          <S.TableTr>
            <S.TableTd>Item Two</S.TableTd>
            <S.TableTd>Vis ac commodo adipiscing arcu aliquet.</S.TableTd>
            <S.TableTd>19.99</S.TableTd>
          </S.TableTr>
          <S.TableTr>
            <S.TableTd>Item Three</S.TableTd>
            <S.TableTd>Morbi faucibus arcu accumsan lorem.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>
          <S.TableTr>
            <S.TableTd>Item Four</S.TableTd>
            <S.TableTd>Vitae integer tempus condimentum.</S.TableTd>
            <S.TableTd>19.99</S.TableTd>
          </S.TableTr>
          <S.TableTr>
            <S.TableTd>Item Five</S.TableTd>
            <S.TableTd>Ante turpis integer aliquet porttitor.</S.TableTd>
            <S.TableTd>29.99</S.TableTd>
          </S.TableTr>
        </S.TableTBody>
      </S.Table>
    </>
  );
};

export default Table;
