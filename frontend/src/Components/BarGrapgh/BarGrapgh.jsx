import React ,{useEffect,useState}from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import ApiConfig from '../../ApiConfig/ApiConfig';
const BarGrapgh = () => {
   
    const [dailyValue, setDailyValue] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        axios
        .get("/getAiDailyUsageValue", {
          baseURL: ApiConfig.baseURL,
          headers: ApiConfig.headers,
        })
          .then((res) => {
            setDailyValue(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, []);
    
  return (
    <div className='bargrapgh'>
      <div className='bar-grapgh title'>Daily usage (USD) </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={dailyValue}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="yellow" />
          
        </BarChart>
        </ResponsiveContainer>

    </div>
  )
}

export default BarGrapgh
