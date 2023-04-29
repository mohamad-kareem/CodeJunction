import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const BarGrapgh = () => {
  return (
    <div className='bargrapgh'>
      <div className='bar-grapgh title'>AI Usage</div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="/cents" />
          <YAxis dataKey="date"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default BarGrapgh
