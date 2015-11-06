const MONTHS = [
  'Auroran',
  'Borean',
  'Coronian',
  'Driadan',
  'Electran',
  'Faian',
  'Gaian',
  'Hermetian',
  'Irisian',
  'Kaosian',
  'Lunan',
  'Maian',
  'Nixian'
]

export const monthName = function(n) {
  return MONTHS[n+1]
}

const dayOfWeek = function(year, month, day) {
  let weekDay = (day + 5) % 7
  return weekDay === 0 ? 7 : weekDay
}

export const daysOfMonth = function({year, month}) {
  let days = []
  for (let i = 1; i <= 28; i++) {
    days.push({day: i, weekDay: dayOfWeek(year, month, i)})
  }
  return days
}
