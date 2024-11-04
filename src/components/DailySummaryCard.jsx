import { CardContent, Typography } from '@mui/material'
import { Card } from 'antd'
import React from 'react'

const DailySummaryCard = ({data}) => {
  return (
    <Card 
  className="w-[13rem] min-h-[7rem] bg-opacity-70 bg-blue-800 shadow-xl rounded-xl" 
  style={{ 
    backgroundImage: 'url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg?semt=ais_hybrid")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
<Typography 
                  variant="h5" 
                  className="text-center text-white font-semibold mb-4 tracking-wide"
                >
                    {data.date}
                </Typography>
  <CardContent >
    {/* Weather Data */}
    <div className="text-gray-200 text-center">
      <p>
        <span className="font-bold text-sm">Avg temp: <span className="text-sm">{data.avgTemperature}°C</span></span>
      </p>
      <p>
        <span className="font-bold text-sm">Max temp: <span className="text-sm">{data.maxTemperature}°C</span></span>
      </p>
      <p>
        <span className="font-bold text-sm">Min temp: <span className="text-sm">{data.minTemperature}°C</span></span>
      </p>
      <p>
        <span className="font-bold text-sm">Dominant Condition: <span className="text-sm">{data.dominantCondition}</span></span>
      </p>
    </div>
  </CardContent>
</Card>
  )
}

export default DailySummaryCard