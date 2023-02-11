import React from 'react';

const Alert = ({ alert_data }) => {
  const properties = Object.entries(alert_data.properties.properties);

  return (
    <div className="alert">
      <h3><b>ALERT ID:</b> {alert_data.alertID}</h3>
      <p><b>CREATOR USER:</b> {alert_data.creatorID}</p>
      <p><b>GAME:</b> {alert_data.properties.game}</p>
      <p><b>REATION AT:</b> {alert_data.creationDate}</p>
      <h4><b>PROPERTIES:</b></h4>
      <div className="properties">
        {properties.map(([key, value]) => (
          <p key={key}>
            <b>{key}:</b> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Alert;
