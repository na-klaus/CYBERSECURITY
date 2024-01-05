// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import PasswordStrength from './components/PasswordStrength';
import DeviceSecurity from './components/DeviceSecurity';
import ThreatAlerts from './components/ThreatAlerts';
import AuthenticationForm from './components/AuthenticationForm';
import ProtocolsInfo from './components/ProtocolsInfo';

import './styles/CyberpunkTheme.css'; // Import the cyberpunk theme styles

import HomePage from './components/HomePage';

// Import other components as needed



const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
        <Route path="/" exact component={HomePage} />
          <Route path="/password-strength" component={PasswordStrength} />
          <Route path="/device-security" component={DeviceSecurity} />
          <Route path="/threat-alerts" component={ThreatAlerts} />
          <Route path="/authentication" component={AuthenticationForm} />
          <Route path="/protocols" component={ProtocolsInfo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
