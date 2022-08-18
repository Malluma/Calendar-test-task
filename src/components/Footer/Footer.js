import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../store/reducers/CalendarSlice";
import { FooterWrapper, DeleteBtn } from "./styles.js";

function Footer(props) {
  const dispatch = useDispatch();
  const activeCellIndex = useSelector((state) => state.calendar.activeCell);
  const activeCell = useSelector(
    (state) => state.calendar.cells[activeCellIndex]
  );
  const activeCellHasEvent =
    activeCellIndex && activeCell.hasEvent ? "true" : "";

  function handleDeleteClick() {
    dispatch(deleteEvent({ cellIndex: activeCellIndex }));
  }

  return (
    <FooterWrapper>
      <div className="footer__today">Today</div>
      <DeleteBtn activeCellHasEvent={activeCellHasEvent} onClick={handleDeleteClick}>
        Delete
      </DeleteBtn>
    </FooterWrapper>
  );
}

export default Footer;
