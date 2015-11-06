import * as calendar from '../src/calendars/dekatrian'
import {expect} from 'chai'

describe('DekatrianCalendar', function() {
  it('lists days of month correctly', function() {
    const days = calendar.daysOfMonth({year: 2015, month: 11})

    expect(days[0]).to.deep.equal({day: 1, weekDay: 6})
    expect(days[8]).to.deep.equal({day: 9, weekDay: 7})
    expect(days.length).to.equal(28)
  })
})
