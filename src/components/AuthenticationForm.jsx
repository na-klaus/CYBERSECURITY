// src/components/AuthenticationForm.jsx
import React, { useState } from 'react';
import './AuthenticationForm.css'; // Import the styles

const AuthenticationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear previous errors on input change
    });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };

    // Basic validation, you can customize based on your requirements
    if (!formData.username.trim()) {
      updatedErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      updatedErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Implement your authentication logic here (e.g., API call, validation, etc.)
      console.log('Form submitted:', formData);
      // Clear the form after submission
      setFormData({
        username: '',
        password: '',
      });
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="authentication-form-container">
      <h2>Authentication Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
          />
          <span className="error-message">{errors.username}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
          <span className="error-message">{errors.password}</span>
        </div>

        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthenticationForm;
