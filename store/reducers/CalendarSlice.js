import { createSlice } from '@reduxjs/toolkit';
import { createDaysArray, generateCellIndex, getCellIndex } from '../../utils/utils';

const initialState = {dates: [], cells: {}, activeCell: ''};

const calendarSlice = createSlice(
  {name: 'calendar',
  initialState,
  reducers: {
    loadCells(state, action){
      const firstDay = new Date(action.payload.firstDate);
      state.dates = createDaysArray(firstDay);
      state.cells = {}
      
      for (const date of state.dates) {
        for(let timeIndex=1; timeIndex<25; timeIndex++){

          const cellIndex = generateCellIndex(date, timeIndex)
          const newCell = {hasEvent: false}
          state.cells[cellIndex] = newCell;
  
        }
      }

    },
    setActiveCell(state, action){
      state.activeCell = action.payload.cellIndex;
    },
    addEvent(state, action){
      const message = 'Enter event time: \n YYYY-MM-DD HH:mm:ss'; 
      const dateTime = prompt(message, '2019-03-29 10:00:00');
      const cellIndex = getCellIndex(dateTime);
      state.cells[cellIndex].hasEvent = true;
    },
    deleteEvent(state, action){
      state.cells[action.payload.cellIndex].hasEvent = false;
    }
  }
  })

export const {loadCells, setActiveCell, addEvent, deleteEvent} = calendarSlice.actions;
export default calendarSlice.reducer;