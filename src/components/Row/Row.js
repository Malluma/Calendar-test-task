import Cell from "../Cell/Cell";
import { formatDigitToTime } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RowTime, RowWrapper } from "./styles.js";

function Row(props) {
  const dates = useSelector((state) => state.calendar.dates);
  const rowTime = props.time;

  return (
    <RowWrapper>
      <RowTime>{formatDigitToTime(props.time)}</RowTime>
      {dates.map((el, index) => {
        const firstCellInRow = index === 0 ? true : false;
        return (
          <Cell
            key={index}
            day={el}
            time={rowTime}
            firstCellInRow={firstCellInRow}
          ></Cell>
        );
      })}
    </RowWrapper>
  );
}

export default Row;
