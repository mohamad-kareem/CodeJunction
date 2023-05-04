import React , {useState,useEffect}from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import "./chart.css"
const Chart = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get("http://127.0.0.1:8000/grapghdata", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          
          setData(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  
  return (
    <div className='chart'>
        <div className="chart-title">coded per month</div>
        <ResponsiveContainer width="100%" aspect={4/1}>

          <AreaChart 
            width={730} 
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <XAxis dataKey="month" />
            <YAxis dataKey="count"/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
             type="monotone"
             dataKey="count" 
             stroke="#8884d8" 
             fillOpacity={1} 
             fill="url(#colorUv)" />

          </AreaChart>

        </ResponsiveContainer>
    </div>
  )
}

export default Chart
