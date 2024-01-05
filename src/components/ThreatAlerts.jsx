// src/components/ThreatAlerts.jsx
import React, { useState } from 'react';
import './ThreatAlerts.css'; // Import the styles

const ThreatAlerts = () => {
  const [threats, setThreats] = useState([
    {
      id: 1,
      title: 'Malware Detected',
      description: 'A malware threat has been detected on your device.',
      severity: 'High',
      date: 'January 20, 2024',
      status: 'Unresolved',
    },
    {
      id: 2,
      title: 'Phishing Attempt',
      description: 'An attempt to phish your credentials was blocked.',
      severity: 'Medium',
      date: 'January 18, 2024',
      status: 'Resolved',
    },
    {
      id: 3,
      title: 'Suspicious Activity',
      description: 'Unusual activity detected on your account.',
      severity: 'Low',
      date: 'January 15, 2024',
      status: 'Unresolved',
    },
  ]);

  const handleResolveThreat = (threatId) => {
    // Logic to mark a threat as resolved
    setThreats((prevThreats) =>
      prevThreats.map((threat) =>
        threat.id === threatId ? { ...threat, status: 'Resolved' } : threat
      )
    );
  };

  return (
    <div className="threat-alerts-container">
      <h2>Threat Alerts</h2>
      {threats.length === 0 ? (
        <p>No threats to display.</p>
      ) : (
        <ul className="threat-alerts-list">
          {threats.map((threat) => (
            <li key={threat.id} className="threat-alert">
              <h3>{threat.title}</h3>
              <p>{threat.description}</p>
              <p>
                <strong>Severity:</strong> {threat.severity}
              </p>
              <p>
                <strong>Date:</strong> {threat.date}
              </p>
              <p>
                <strong>Status:</strong> {threat.status}
              </p>
              {threat.status === 'Unresolved' && (
                <button onClick={() => handleResolveThreat(threat.id)}>
                  Resolve Threat
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThreatAlerts;
