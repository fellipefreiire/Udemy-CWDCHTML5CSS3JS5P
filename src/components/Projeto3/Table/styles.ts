import styled, { css } from "styled-components";

type tdProps = {
  colspan: String;
};

export const Table = styled.table`
  width: 100%;
  margin: 0 0 2em 0;
  border-collapse: collapse;
`;

export const TableH4 = styled.h4`
  font-weight: normal;
  margin: 1em 0;
  font-size: 22px;
`;

export const TableH5 = styled.h5`
  font-weight: normal;
  margin: 1em 0;
  font-size: 18px;
`;

export const TableHead = styled.thead``;

export const TableTr = styled.tr``;

export const TableTh = styled.th`
  background: #ccc;
  color: #121214;
  text-align: left;
  padding: 0.75em;
`;

export const TableTd = styled.td`
  padding: 0.75em;
  /* border-bottom: 1px solid #ccc; */
`;

export const TableTHead = styled.thead``;

export const TableTBody = styled.tbody`
  tr:first-child td {
    border-top: 2px solid #666;
  }

  tr:last-child td {
    border-bottom: 2px solid #666;
  }

  tr td {
    border-bottom: 1px solid #ccc;
  }

  tr:nth-child(even) td {
    background-color: #eee;
    color: #121214;
  }

  ${(props) =>
    props.className === "alternate" &&
    css`
      td,
      tr:first-child td,
      tr:last-child td {
        border-bottom: 1px solid #ddd;
      }
    `}
`;

export const TableFoot = styled.tfoot``;
