import styled from "styled-components";
import {
  secondaryColor,
  secondaryColorDark,
  backgroundSecondary,
  tableColor,
} from "../../styles/variables.styles";

export const FooterWrapper = styled.div`
  font-size: 27px;
  color: ${secondaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundSecondary};
  position: sticky;
  bottom: 0;
  z-index: 2;
  padding: 0.8em 1.7em;
  border-top: 1px solid ${tableColor};
`;

export const DeleteBtn = styled.button`
  font-size: 27px;
  color: ${secondaryColor};
  border: none;
  background-color: inherit;
  opacity: ${(props) => props.activeCellHasEvent ? '1' : '0'};
  &:hover,
  &:focus {
    color: ${secondaryColorDark};
  }
`;
