import styled from "styled-components";
import { timeColor } from "../../styles/variables.styles";

export const RowWrapper = styled.div`
  display: flex;
`;

export const RowTime = styled.div`
  font-size: 21px;
  color: ${timeColor};
  position: relative;
  bottom: 0.6em;
  margin-right: 8px;
  cursor: default;
`;
