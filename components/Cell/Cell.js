import "./Cell.scss";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setActiveCell } from '../../store/reducers/CalendarSlice';
import { generateCellIndex } from '../../utils/utils';

function Cell(props) {
  
  const dispatch = useDispatch();
  const cellIndex = generateCellIndex(props.day, props.time);
  const cell = useSelector(state => state.calendar.cells[cellIndex]);

  function handleCellFocus(){
    dispatch(setActiveCell({cellIndex: cellIndex}));
  }

  const noted = cell.hasEvent ? "cell cell_noted" : "";
  const firstCellInLine = props.firstCellInLine ? "cell-wrap_first-cell-in-line" : "";
  const cellClassName = `cell ${noted} ${firstCellInLine}`;
  const cellWrapClassName = `cell-wrap ${firstCellInLine}`;

  return (
    <div className={cellWrapClassName}>
      <div className={cellClassName} tabIndex={0} onFocus={(event) => handleCellFocus()}>
      </div>
    </div>
  );
}

export default Cell;
