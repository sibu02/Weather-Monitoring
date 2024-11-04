import React, { useState, useEffect } from 'react';
import { fetchAlerts, fetchWeatherData } from '../weatherService/WeatherApi';
import { MenuItem, Select, Typography, CircularProgress, Box } from '@mui/material';
import WeatherCard from './WeatherCard';
import toast from 'react-hot-toast';
import WeeklySummary from './WeeklySummary';

function Dashboard() {
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const cities = ["Delhi", "Mumbai", "Chennai", "Bengaluru", "Kolkata", "Hyderabad"];

  useEffect(() => {
    if (selectedCity) {
      fetchCityData();
      const alertInterval = setInterval(fetchAlert, 300000); 

        return () => clearInterval(alertInterval); 
    }
  }, [selectedCity]);

  const fetchCityData = async () => {
    setLoading(true);
    const city = selectedCity.toLowerCase();
    const data = await fetchWeatherData(city);
    setWeatherData(data);
    setLoading(false);
  };

  const fetchAlert = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
      data.forEach(alert => {
        toast.error(alert);
      })
  };

  return (
    <div 
      className="relative flex flex-col items-center min-w-screen bg-cover bg-center p-1 w-full" 
      style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg?semt=ais_hybrid")' }}
    >
      <Typography 
        variant="h4" 
        className="text-center text-blue-800 font-bold mb-8 tracking-wide"
      >
        Weather Dashboard
      </Typography>

      {/* City Selection Dropdown */}
      <Box className="mb-8 w-full max-w-lg">
        <Typography variant="body1" className="mb-2 text-gray-700 text-center font-medium">
          Select City
        </Typography>
        <Select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: 3,
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: "#0077B6" },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: "#023E8A" },
            '& .MuiSelect-icon': { color: "#0077B6" },
          }}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city} sx={{ fontSize: "1rem", padding: "10px" }}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Weather Data Display */}
      <div className="flex justify-center items-center max-w-lg w-full bg-transparent rounded-lg mt-4">
        {loading ? (
          <Box className="flex justify-center py-8">
            <CircularProgress color="primary" />
          </Box>
        ) : weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <Typography variant="body1" className="text-gray-800 text-center mt-4">
            No data available for {selectedCity}
          </Typography>
        )}
      </div>
      <div className='w-full'>
        <WeeklySummary city={selectedCity}/>
      </div>
    </div>
  );
}

export default Dashboard;
