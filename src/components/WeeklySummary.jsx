import React, { useEffect, useRef, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import DailySummaryCard from './DailySummaryCard';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import { fetchWeeklySummaries } from '../weatherService/WeatherApi';

function WeeklySummary({city}) {
  const [summaries, setSummaries] = useState([1,2,3,4,5,6,7]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [city]);

  const fetchData = async()=>{
    setLoading(true);
    const data = await fetchWeeklySummaries(city);
    setSummaries(data);
    setLoading(false);
  }

    
const responsive = {
    0: { items: 1.5 },
    560: { items: 3.5 },
    800: { items: 3.5 },
    1024: { items: 5.5 },
  };
   const items = summaries.map((item)=>{
    return <DailySummaryCard data={item} />
   })

  return (
    <Box className="relative w-full mx-auto p-4">
      <Typography variant="h1" className="text-center text-xl text-blue-800 font-semibold mb-4">
        Past 7 Days Weather Summary
      </Typography>
      {loading ? (
        <Box className="flex justify-center py-6">
          <CircularProgress color="secondary" />
        </Box>
      ) :summaries.length > 0 ? (
        <div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          disableButtonsControls
          disableDotsControls
          infinite={false}
        />
          </div>
      ):(
        <Typography variant="body1" className="text-gray-800 text-center mt-4">
            No data available for {city}
          </Typography>
      )}
    </Box>
  );
}

export default WeeklySummary;
