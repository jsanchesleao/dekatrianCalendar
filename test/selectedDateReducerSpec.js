import {expect} from 'chai'
import reducer from '../src/reducers/selectedDateReducer'
import {SET_SELECTED_DATE} from '../src/actions'

describe('selectedDateReducer', function() {
  it('sets the current date', function() {
    const state = {year: 2000, month: 12, day: 10}
    const day = {year: 2015, month: 11, day: 4}
    const action = {type: SET_SELECTED_DATE, day: day}

    expect(reducer(state, action)).to.deep.equal(day)

  })
})
