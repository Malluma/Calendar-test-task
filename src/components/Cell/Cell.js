import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveCell } from "../../store/reducers/CalendarSlice";
import { generateCellIndex } from "../../utils/utils";
import { CellWrapper, Cell as StyledCell } from "./styles.js";

function Cell(props) {
  const dispatch = useDispatch();
  const cellIndex = generateCellIndex(props.day, props.time);
  const cell = useSelector((state) => state.calendar.cells[cellIndex]);

  function handleCellFocus() {
    dispatch(setActiveCell({ cellIndex: cellIndex }));
  }

  return (
    <CellWrapper firstCellInLine={props.firstCellInLine}>
      <StyledCell
        hasEvent={cell.hasEvent}
        tabIndex={0}
        onFocus={handleCellFocus}
      ></StyledCell>
    </CellWrapper>
  );
}

export default Cell;
