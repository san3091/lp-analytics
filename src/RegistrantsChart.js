import React from "react"
import * as moment from 'moment'
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip
} from 'recharts'

const data = [
  {
    date: moment('2020-03-20').unix(),
    registrants: 536,
  },
  {
    date: moment('2020-03-25').unix(),
    registrants: 666,
  },
  {
    date: moment('2020-04-02').unix(),
    registrants: 676,
  }
]

const RegistrantsChart = () => (
  <ResponsiveContainer height={500} width="80%">
    <LineChart data={data}>
      <XAxis 
        dataKey="date"
        domain={['auto', 'auto']}
        name="Date"
        tickFormatter={ unixTime => moment.unix(unixTime).format("M/D") } />
      <YAxis 
        dataKey="registrants" 
        name="Registrants"
        label={{ value: "Number of Registrants", angle: -90, position: 'insideLeft' }} />

      <Line dataKey="registrants" stroke="#944dc4"/>
      <CartesianGrid stroke="#ccc" />
      <Tooltip labelFormatter={ value => moment.unix(value).format("M/D") }/>
    </LineChart>
  </ResponsiveContainer>
)

export default RegistrantsChart
