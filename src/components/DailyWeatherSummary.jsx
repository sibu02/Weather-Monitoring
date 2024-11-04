import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getDailySummary } from '../weatherService/WeatherApi';

const DailyWeatherSummary = ({city}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await getDailySummary(city);
        setDailyData(data)
    }

    const columns = [
        { title: 'City', dataIndex: 'city', key: 'city' },
        { title: 'Avg Temp (°C)', dataIndex: 'avgTemp', key: 'avgTemp' },
        { title: 'Max Temp (°C)', dataIndex: 'maxTemp', key: 'maxTemp' },
        { title: 'Min Temp (°C)', dataIndex: 'minTemp', key: 'minTemp' },
        { title: 'Dominant Condition', dataIndex: 'dominantCondition', key: 'dominantCondition' }
    ];

    return (
        <Table dataSource={dailyData} columns={columns} rowKey="city" />
    );
};

export default DailyWeatherSummary;
