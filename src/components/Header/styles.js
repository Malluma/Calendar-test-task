import styled from "styled-components";

import {
  backgroundMain,
  backgroundSecondary,
  secondaryColor,
  secondaryColorDark,
  tableColor,
} from "../../styles/variables.styles";

export const HeaderWrapper = styled.header`
  font-size: calc(15px + 2vmin);
  color: black;
  background-color: ${backgroundMain};
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 1rem;
  @media screen and (max-width: 550px) {
    font-size: calc(10px + 2vmin);
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 33px;
  font-weight: 400;
  background-color: ${backgroundMain};
  margin: 0;
  padding: 2.7rem 2rem;
  cursor: default;
`;

export const AddEventBtn = styled.button`
  font-size: 55px;
  color: ${secondaryColor};
  background-color: inherit;
  border: none;
  cursor: pointer;
  margin-right: 2.7rem;
  &:hover,
  &:focus {
    outline: none;
    color: ${secondaryColorDark};
  }
`;

export const Calendar = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 4.7rem;
  padding-right: 1.5rem;
  background-color: ${backgroundSecondary};
  border-top: 1px solid ${tableColor};
  border-bottom: 1px solid ${tableColor};
`;

export const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

export const DayOfWeek = styled.div`
  font-size: 0.65em;
  width: 2rem;
  padding: 0.5rem;
  text-align: center;
  height: auto;
  cursor: default;
`;

export const Days = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`;

export const DayWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;

  color: ${(props) => (props.today ? "white" : "")};
  background-color: ${(props) => (props.today ? secondaryColor : "")};

  &:hover,
  &:focus {
    background-color: ${secondaryColorDark};
    color: ${backgroundMain};
    outline: none;
  }
`;

export const MonthSelection = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: default;
  padding: 0 0.5rem 0.4rem 0.5rem;
`;

export const MonthChangeBtn = styled.button`
  border: none;
  background-color: ${backgroundSecondary};
  &:focus {
    outline: none;
  }
  &:focus * {
    fill: ${secondaryColorDark};
  }

  & > svg {
    fill: ${secondaryColor};
    cursor: pointer;
    &:hover,
    &:focus {
      fill: ${secondaryColorDark};
    }
  }
`;

export const currentMonth = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: default;
  padding: 0 0.5rem 0.4rem 0.5rem;
`;
