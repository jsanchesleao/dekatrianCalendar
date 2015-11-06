import {SET_SELECTED_DATE} from '../actions'

const initialState = {
  year: null,
  month: null,
  day: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_SELECTED_DATE:
      return action.day
    default:
      return state
  }
}
