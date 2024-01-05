// src/components/PasswordStrength.jsx
import React, { useState } from 'react';
import './PasswordStrength.css';

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    // You can add more sophisticated password strength logic here
    const calculatedStrength = calculatePasswordStrength(newPassword);
    setStrength(calculatedStrength);
  };

  const calculatePasswordStrength = (password) => {
    // Add your password strength calculation logic here
    // This is a simple example; you can use external libraries or more complex rules
    const strengthIndicator = {
      0: 'Weak',
      1: 'Weak',
      2: 'Moderate',
      3: 'Strong',
      4: 'Very Strong',
    };
    const strengthScore = calculateStrengthScore(password);
    return strengthIndicator[strengthScore];
  };

  const calculateStrengthScore = (password) => {
    // This is just a simple example; you can create more complex rules based on your requirements
    let score = 0;

    if (password.length >= 8) {
      score++;
    }

    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      score++;
    }

    if (password.match(/[0-9]/)) {
      score++;
    }

    if (password.match(/[$@#&!]/)) {
      score++;
    }

    return score;
  };

  return (
    <div>
      <h2>Password Strength</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div>
        <strong>Strength:</strong> {strength}
      </div>
    </div>
  );
};

export default PasswordStrength;
