import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    "_id": "june",
    "count": 800
},
{
    "_id": "May",
    "count": 250
},
{
  "_id": "April",
  "count": 1000
},
{
  "_id": "october",
  "count": 115
}
];
const Chart = () => {
  
  return (
    <div className='chart'>
      <div className="title">Last Time Coded</div>
      <ResponsiveContainer width="100%" aspect={4/1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="_id" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Chart
