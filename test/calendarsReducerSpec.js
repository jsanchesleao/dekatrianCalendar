import {expect} from 'chai'
import reducer from '../src/reducers/calendarsReducer'
import {DISPLAY_CALENDAR, SET_CALENDAR_YEAR, SET_CALENDAR_MONTH} from '../src/actions'

const initialState = {
  gregorian: {year: null, month: null, display: false},
  dekatrian: {year: null, month: null, display: false}
}

describe('calendars', function() {
  it('displays calendars', function() {
    const displayGregorian = {type: DISPLAY_CALENDAR, calendar: 'gregorian'}
    const displayDekatrian = {type: DISPLAY_CALENDAR, calendar: 'dekatrian'}

    const expected1 = {
      gregorian: {year: null, month: null, display: true},
      dekatrian: {year: null, month: null, display: false}
    }

    const expected2 = {
      gregorian: {year: null, month: null, display: false},
      dekatrian: {year: null, month: null, display: true}
    }

    expect(reducer(initialState, displayGregorian)).to.deep.equal(expected1)
    expect(reducer(initialState, displayDekatrian)).to.deep.equal(expected2)

  })

  it('change years', function() {
    const change = {type: SET_CALENDAR_YEAR, calendar: 'gregorian', year: 2013}

    const state = {
      gregorian: {year: 2000, month: 5, display: true},
      dekatrian: {year: 2000, month: null, display: false}
    }

    const expected = {
      gregorian: {year: 2013, month: 5, display: true},
      dekatrian: {year: 2000, month: null, display: false}
    }

    expect(reducer(state, change)).to.deep.equal(expected)
  })

  it('change months', function() {
    const change = {type: SET_CALENDAR_MONTH, calendar: 'dekatrian', month: 2}

    const state = {
      gregorian: {year: 2013, month: 5, display: true},
      dekatrian: {year: 2000, month: null, display: false}
    }

    const expected = {
      gregorian: {year: 2013, month: 5, display: true},
      dekatrian: {year: 2000, month: 2, display: false}
    }

    expect(reducer(state, change)).to.deep.equal(expected)
  })
})
