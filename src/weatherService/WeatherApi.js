import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:8080/api/weather';

export const getWeatherData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    toast.error("Error fetching weather data:", error);
  }
};

export const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`${API_URL}/${city}`);
      return response.data;
    } catch (error) {
        toast.error("Error fetching weather data:", error);
    }
  };

export const getDailySummary = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/dailySummary/${city}`);
    return response.data;
  } catch (error) {
    toast.error("Error fetching weather data:", error);
  }
};

export const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${API_URL}/alerts`);
      return response.data;
    } catch (error) {
        toast.error("Error fetching weather data:", error);
    }
  };

  export const fetchWeeklySummaries = async (city) => {
    try {
      const response = await axios.get(`${API_URL}/weekly/${city}`);
      return response.data;
      
    } catch (error) {
        toast.error("Error fetching weather data:", error);
    } 
  };
