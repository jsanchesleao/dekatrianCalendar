import _ from 'lodash'
import {DISPLAY_CALENDAR, SET_CALENDAR_YEAR, SET_CALENDAR_MONTH} from '../actions'

const initialState = {
  gregorian: {year: null, month: null, display: false},
  dekatrian: {year: null, month: null, display: false}
}

const changeDisplay = function(state, calendar) {
  let newState = _.cloneDeep(state)
  if (calendar === 'gregorian') {
    newState.gregorian.display = true
  }
  else if (calendar === 'dekatrian') {
    newState.dekatrian.display = true
  }
  return newState
}

const setCalendarYear = function(state, calendar, year) {
  let newState = _.cloneDeep(state)
  if (calendar === 'gregorian') {
    newState.gregorian.year = year
  }
  else if (calendar === 'dekatrian') {
    newState.dekatrian.year = year
  }
  return newState
}

const setCalendarMonth = function(state, calendar, month) {
  let newState = _.cloneDeep(state)
  if (calendar === 'gregorian') {
    newState.gregorian.month = month
  }
  else if (calendar === 'dekatrian') {
    newState.dekatrian.month = month
  }
  return newState
}

export default function(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_CALENDAR:
      return changeDisplay(state, action.calendar)
    case SET_CALENDAR_YEAR:
      return setCalendarYear(state, action.calendar, action.year)
    case SET_CALENDAR_MONTH:
      return setCalendarMonth(state, action.calendar, action.month)
    default:
      return state
  }
}
