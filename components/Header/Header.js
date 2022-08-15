import './Header.scss';
import {createDaysArray, formatDateToString} from '../../utils/utils';
import { ReactComponent as BackArrowSvg } from '../../assets/back.svg';
import { ReactComponent as ForwardArrowSvg } from '../../assets/forward.svg';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../store/reducers/CalendarSlice';

function Header(props) {

  const dispatch = useDispatch();

  function handleAddEventClick(){
    dispatch(addEvent());
  }

  const days = createDaysArray(props.firstDay);
  const daysOfWeek = [ 'M', 'T', 'W', 'T', 'F', 'S', 'S' ];

  return(
    <header className="header">
      <div className='header__top'>
        <h1 className="header__title">
          Interview Calendar
        </h1>
        <button className='header__add-event' onClick={handleAddEventClick}>{'+'}</button>
      </div>
     
      <div className="header__calendar">
          <div className="header__days-of-week">
            {daysOfWeek.map((day, index) => {
              return <div key={index} className='header__day-of-week' >{day}</div>
            })}  
          </div>
          <div className="header__days">
            {days.map((day, index) => {
              const today = formatDateToString(new Date(2019, 2, 29));
              const dateDay = day.substring(0, 2);
              const todayClass= (day === today)? 'header__day_today' : '';
              const dayClass = `header__day ${todayClass}`;
              return <div key={index} className='header__day-wrap'>
                      <div className={dayClass} tabIndex={0}>{dateDay}</div>
                    </div>
              })}  
          </div>
          <div className='header__month-selection'>
            <button className='header__month-change-btn header__month-back-btn'>
              <BackArrowSvg className={'header__arrow-svg'}/>
            </button>
            <div className='header__current-month'>{'March 2019'}</div>
            <button className='header__month-change-btn header__month-forward-btn'>
              <ForwardArrowSvg className={'header__arrow-svg'}/>
            </button>
          </div>
      </div>
    </header>
  )
 
}

export default Header;
