import styled from "styled-components";

import {
  primaryColorLight,
  primaryColorDark,
  tableColor,
} from "../../styles/variables.styles";

export const CellWrapper = styled.div`
  border: 1px solid ${tableColor};
  border-left: ${(props) => (props.firstCellInLine ? "none" : "")};
  padding: 3px;
  text-align: center;
  flex-grow: 1;
`;

export const Cell = styled.div`
  min-height: 56px;
  cursor: pointer;
  background-color: ${(props) => (props.hasEvent ? primaryColorLight : "")};
  &:hover,
  &:focus {
    background-color: ${primaryColorDark};
    outline: none;
  }
`;
