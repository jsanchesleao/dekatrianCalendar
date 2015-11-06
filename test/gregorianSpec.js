import * as calendar from '../src/calendars/gregorian'
import {expect} from 'chai'

describe('GregorianCalendar', function() {
  it('lists days of month correctly', function() {
    const days = calendar.daysOfMonth({year: 2015, month: 11})

    expect(days[0]).to.deep.equal({day: 1, weekDay: 1})
    expect(days[8]).to.deep.equal({day: 9, weekDay: 2})
    expect(days.length).to.equal(30)
  })
})
