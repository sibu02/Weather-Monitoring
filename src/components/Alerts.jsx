import React, { useEffect, useState } from 'react';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetch('/api/weather/alerts')
            .then(res => res.json())
            .then(data => setAlerts(data));
    }, []);

    return (
        <div>
            <h3>Recent Alerts</h3>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.message}</strong> - {alert.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;
