import { createDaysArray, formatDateToString } from "../../utils/utils";
import { ReactComponent as BackArrowSvg } from "../../assets/back.svg";
import { ReactComponent as ForwardArrowSvg } from "../../assets/forward.svg";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/reducers/CalendarSlice";
import {
  HeaderWrapper,
  HeaderTop,
  HeaderTitle,
  AddEventBtn,
  Calendar,
  DaysOfWeek,
  DayOfWeek,
  Days,
  DayWrapper,
  Day,
  MonthSelection,
  MonthChangeBtn,
} from "./styles.js";

function Header(props) {
  const dispatch = useDispatch();

  function handleAddEventClick() {
    dispatch(addEvent());
  }

  const days = createDaysArray(props.firstDay);
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const today = formatDateToString(new Date(2019, 2, 29));

  return (
    <HeaderWrapper>
      <HeaderTop>
        <HeaderTitle>Interview Calendar</HeaderTitle>
        <AddEventBtn onClick={handleAddEventClick}>{"+"}</AddEventBtn>
      </HeaderTop>

      <Calendar>
        <DaysOfWeek>
          {daysOfWeek.map((day, index) => {
            return <DayOfWeek key={index}>{day}</DayOfWeek>;
          })}
        </DaysOfWeek>
        <Days>
          {days.map((day, index) => {
            const dateDay = day.substring(0, 2);
            const currentDayIsToday = day === today ? "true" : "";
            return (
              <DayWrapper key={index}>
                <Day today={currentDayIsToday} tabIndex={0}>
                  {dateDay}
                </Day>
              </DayWrapper>
            );
          })}
        </Days>
        <MonthSelection>
          <MonthChangeBtn>
            <BackArrowSvg />
          </MonthChangeBtn>
          <div>{"March 2019"}</div>
          <MonthChangeBtn>
            <ForwardArrowSvg />
          </MonthChangeBtn>
        </MonthSelection>
      </Calendar>
    </HeaderWrapper>
  );
}

export default Header;
