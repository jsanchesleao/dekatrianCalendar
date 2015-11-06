const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const DAYS_OF_MONTH = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31]

export const monthName = function(n) {
  return MONTHS[n+1]
}

const dayOfWeek = function(year, month, day) {
  return new Date(year, month - 1, day).getDay() + 1
}

export const daysOfMonth = function({year, month}) {
  let numberOfDays = DAYS_OF_MONTH[month - 1]

  let days = []
  for (let i = 1; i <= numberOfDays; i++) {
    days.push({day: i, weekDay: dayOfWeek(year, month, i)})
  }

  return days;
}
