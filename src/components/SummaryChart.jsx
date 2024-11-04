import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function SummaryChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="averageTemp" stroke="#8884d8" />
        <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" />
        <Line type="monotone" dataKey="minTemp" stroke="#ffc658" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SummaryChart;
