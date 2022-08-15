import './Line.scss';
import Cell from '../Cell/Cell';
import {formatDigitToTime} from '../../utils/utils';
import { useSelector } from 'react-redux';

function Line(props) {

  const dates = useSelector(state => state.calendar.dates);
  const lineTime = props.time;

  return (
    <div className="line">
      <div className="line__time">{formatDigitToTime(props.time)}</div>
        {dates.map((el, index) => {
          const firstCellInLine = (index === 0)? true : false;
          return <Cell key={index} day={el} time={lineTime} firstCellInLine={firstCellInLine}></Cell>
          })}  
    </div>
  );
}

export default Line;
