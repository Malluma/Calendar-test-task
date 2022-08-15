import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from './reducers/CalendarSlice'

export const store = configureStore({
    reducer: {
      calendar: calendarReducer
    }
  })