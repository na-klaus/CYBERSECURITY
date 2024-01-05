// src/components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/password-strength">Password Strength</Link></li>
        <li><Link to="/device-security">Device Security</Link></li>
        <li><Link to="/threat-alerts">Threat Alerts</Link></li>
        <li><Link to="/authentication">Authentication Form</Link></li>
        <li><Link to="/protocols">Protocols</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
