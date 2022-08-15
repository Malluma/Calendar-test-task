import "./Footer.scss";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteEvent } from '../../store/reducers/CalendarSlice';

function Footer(props) {

  const dispatch = useDispatch();
  const activeCellIndex = useSelector(state => state.calendar.activeCell);
  const activeCell = useSelector(state => state.calendar.cells[activeCellIndex]);
  const deleteInvisible = (activeCellIndex === '' || activeCell.hasEvent === false) ? 'footer__delete_invisible' : '';

  function handleDeleteClick(cellIndex){
    dispatch(deleteEvent({cellIndex: cellIndex}));
  }

  return (
    <div className='footer'>
      <div className='footer__today'>Today</div>
      <button className={`footer__delete ${deleteInvisible}`} onClick={() => {handleDeleteClick(activeCellIndex)}}>Delete</button>
    </div>
  );
}

export default Footer;
