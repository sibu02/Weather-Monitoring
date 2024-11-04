import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const TemperatureTrend = () => {
    const [trendData, setTrendData] = useState([]);

    useEffect(() => {
        fetch('/api/weather/historical-trend')
            .then(res => res.json())
            .then(data => setTrendData(data));
    }, []);

    return (
        <LineChart width={600} height={300} data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" />
            <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" />
            <Line type="monotone" dataKey="minTemp" stroke="#ff7300" />
        </LineChart>
    );
};

export default TemperatureTrend;
