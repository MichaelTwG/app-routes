import React, { useState, useEffect } from 'react';
import Alert from './alert';

const AlertList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://172.20.28.72:3050/alerts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'UserID': 'a2fd5d04-e2f9-45dd-a938-3866c4f18acd',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="alerts-container">
      {data.map(obj => (
        <Alert key={obj.alertID} alert_data={obj} />
      ))}
    </div>
  );
};

export default AlertList;