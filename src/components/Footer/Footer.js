import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteEvent } from '../../store/reducers/CalendarSlice';
import {FooterWrapper, DeleteBtn} from './styles.js';

function Footer(props) {

  const dispatch = useDispatch();
  const activeCellIndex = useSelector(state => state.calendar.activeCell);
  const activeCell = useSelector(state => state.calendar.cells[activeCellIndex]);
  const deleteBtnOpacity = (activeCellIndex === '' || activeCell.hasEvent === false) ? '0' : '1';

  function handleDeleteClick(){
    dispatch(deleteEvent({cellIndex: activeCellIndex}));
  }

  return (
    <FooterWrapper>
      <div className='footer__today'>Today</div>
      <DeleteBtn opacity={deleteBtnOpacity} onClick={handleDeleteClick}>Delete</DeleteBtn>
    </FooterWrapper>
  );
}

export default Footer;
