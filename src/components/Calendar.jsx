import React from 'react'

import * as dekatrianCalendar from '../calendars/dekatrian'
import * as gregorianCalendar from '../calendars/gregorian'

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export default React.createClass({
  displayName: 'Calendar',
  calendar() {
    if (this.props.type === 'gregorian') {
      return gregorianCalendar
    }
    else if (this.props.type === 'dekatrian') {
      return dekatrianCalendar
    }
  },
  yearMonthDisplay () {
    return `${this.calendar().monthName(Number(this.props.month))} - ${this.props.year}`
  },
  displayDays() {
    return this.calendar().daysOfMonth({year: Number(this.props.year), month: Number(this.props.month)})
  },
  render () {
    let days = this.displayDays().map(d => <li key={d.day}>{weekDays[d.weekDay - 1]} {d.day}</li>)

    return (
      <div>
        <h1>{this.yearMonthDisplay()}</h1>
        <ul>
          {days}
        </ul>
      </div>
    )
  }
})
