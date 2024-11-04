import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function WeatherCard({ weather }) {
    const weatherImage = {
        Haze: "./src/assets/haze.png",
        Clear: "./src/assets/clear1.png",
        Rain: "./src/assets/rain1.png",
    };

    const condition = weather.mainCondition;
    const currWeatherImage = 
        condition === "Haze" ? weatherImage.Haze :
        condition === "Rain" ? weatherImage.Rain :
        weatherImage.Clear;

    return (
        <Card 
          className="w-full max-w-sm bg-opacity-70 bg-blue-800 shadow-xl rounded-xl p-6 mx-auto" 
          style={{  backgroundImage: 'url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg?semt=ais_hybrid")',backgroundSize: "cover" }}
        >
            <CardContent>
                {/* City and Title */}
                <Typography 
                  variant="h5" 
                  className="text-center text-white font-semibold mb-4 tracking-wide"
                >
                    Weather in {weather.city}
                </Typography>

                {/* Weather Icon */}
                <div className="flex justify-center my-4">
                    <img 
                      className="w-40 h-40 object-cover opacity-90" 
                      src={currWeatherImage} 
                      alt={`${weather.mainCondition}`} 
                    />
                </div>

                {/* Weather Data */}
                <div className="text-gray-200 text-center space-y-2">
                    <p>
                      <span className="font-bold text-lg">Condition:</span> {weather.mainCondition}
                    </p>
                    <p>
                      <span className="font-bold text-lg">Temperature:</span> {weather.temp}°C
                    </p>
                    <p>
                      <span className="font-bold text-lg">Feels Like:</span> {weather.feelsLike}°C
                    </p>
                    <p>
                      <span className="font-bold text-lg">Timestamp:</span> 
                      {new Date(weather.timestamp).toLocaleString()}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;
