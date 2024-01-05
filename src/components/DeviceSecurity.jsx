// src/components/DeviceSecurity.jsx
import React from 'react';
import './DeviceSecurity.css'; // Import the styles

const DeviceSecurity = () => {
  const deviceInfo = {
    os: 'Windows 10',
    antivirus: 'Windows Defender',
    firewall: 'Enabled',
    encryption: 'BitLocker',
    lastScan: 'January 15, 2024',
  };

  const securityStatus = calculateSecurityStatus(deviceInfo);

  return (
    <div className="device-security-container">
      <h2>Device Security</h2>
      <div className="device-security-info">
        <p>
          <strong>Operating System:</strong> {deviceInfo.os}
        </p>
        <p>
          <strong>Antivirus:</strong> {deviceInfo.antivirus}
        </p>
        <p>
          <strong>Firewall:</strong> {deviceInfo.firewall}
        </p>
        <p>
          <strong>Encryption:</strong> {deviceInfo.encryption}
        </p>
        <p>
          <strong>Last Scan:</strong> {deviceInfo.lastScan}
        </p>
      </div>

      <div className="device-security-status">
        <h3>Security Status:</h3>
        <p className={`security-status-${securityStatus.toLowerCase()}`}>
          {securityStatus}
        </p>
      </div>

      <ul className="device-security-list">
        <li className="device-security-item">
          <strong>Actions:</strong>
          <ul>
            <li>Run Full Scan</li>
            <li>Update Antivirus</li>
            <li>Review Firewall Settings</li>
            <li>Change Password</li>
          </ul>
        </li>
        <li className="device-security-item">
          <strong>Security Recommendations:</strong>
          <ul>
            <li>Keep your operating system up-to-date.</li>
            <li>Regularly update your antivirus definitions.</li>
            <li>Enable automatic system updates.</li>
            <li>Use strong, unique passwords.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const calculateSecurityStatus = (deviceInfo) => {
  // Logic to calculate security status based on device information
  // Example: If antivirus is up-to-date and firewall is enabled, consider the security status as "Secure"
  if (
    deviceInfo.antivirus.toLowerCase() === 'windows defender' &&
    deviceInfo.firewall.toLowerCase() === 'enabled'
  ) {
    return 'Secure';
  } else {
    return 'At Risk';
  }
};

export default DeviceSecurity;
