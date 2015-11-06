import React from 'react'
import {render} from 'react-dom'

import Calendar from './components/Calendar.jsx'

render(<Calendar type="dekatrian" year="2015" month="4" />, document.getElementById('content'))
