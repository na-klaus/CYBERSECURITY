// src/components/ProtocolsInfo.jsx
import React, { useState } from 'react';
import '../styles/CyberpunkTheme.css';
import '../styles/FuturisticTheme.css';

const ProtocolsInfo = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="section">
      <h2>Networking Protocols</h2>

      {/* HTTP Protocol Section */}
      <div
        className={`protocol-section ${activeSection === 1 ? 'active' : ''}`}
        onClick={() => toggleSection(1)}
      >
        <h3>HTTP - Hypertext Transfer Protocol</h3>
        <p>
          HTTP is an application layer protocol for transmitting hypermedia documents, commonly used for web communication.
        </p>
        <p>
          <strong>Common Use:</strong> Loading web pages, transferring data between a client and a server.
        </p>
        <p>
          <strong>Security Considerations:</strong> Vulnerable to man-in-the-middle attacks and data interception.
        </p>
      </div>
      {/* BGP Protocol Section */}
        <div
            className={`protocol-section ${activeSection === 7 ? 'active' : ''}`}
            onClick={() => toggleSection(7)}
        >
            <h3>BGP - Border Gateway Protocol</h3>
            <p>
        BGP is a standardized exterior gateway protocol used to exchange routing and reachability information between autonomous systems on the internet.
        </p>
        <p>
        <strong>Common Use:</strong> Inter-domain routing, connecting different autonomous systems.
        </p>
        <p>
        <strong>Security Considerations:</strong> BGP hijacking, route manipulation.
        </p>
        </div>
        {/* SNMP Protocol Section */}
<div
  className={`protocol-section ${activeSection === 8 ? 'active' : ''}`}
  onClick={() => toggleSection(8)}
>
  <h3>SNMP - Simple Network Management Protocol</h3>
  <p>
    SNMP is an Internet standard protocol for managing and monitoring devices on IP networks.
  </p>
  <p>
    <strong>Common Use:</strong> Monitoring and managing network devices (routers, switches, servers).
  </p>
  <p>
    <strong>Security Considerations:</strong> SNMPv3 introduces security features, but earlier versions are vulnerable to attacks.
  </p>
</div>

    {/* ICMP Protocol Section */}
    <div
    className={`protocol-section ${activeSection === 9 ? 'active' : ''}`}
    onClick={() => toggleSection(9)}
    >
    <h3>ICMP - Internet Control Message Protocol</h3>
    <p>
        ICMP is an integral part of the Internet Protocol Suite, used for error reporting and diagnostics.
    </p>
    <p>
        <strong>Common Use:</strong> Ping and traceroute operations, network error reporting.
    </p>
    <p>
        <strong>Security Considerations:</strong> ICMP can be exploited for certain types of attacks (e.g., ICMP flooding).
    </p>
    </div>
        {/* HTTPS Protocol Section */}
        <div
            className={`protocol-section ${activeSection === 2 ? 'active' : ''}`}
            onClick={() => toggleSection(2)}
        >
            <h3>HTTPS - Hypertext Transfer Protocol Secure</h3>
            <p>
            HTTPS is a secure version of HTTP, providing encrypted communication between the client and the server.
            </p>
            <p>
            <strong>Common Use:</strong> Secured data transfer, online transactions, secure logins.
            </p>
            <p>
            <strong>Security Considerations:</strong> SSL/TLS vulnerabilities, phishing with fake certificates.
            </p>
        </div>

      {/* OSI Model Section */}
      <div
        className={`protocol-section ${activeSection === 3 ? 'active' : ''}`}
        onClick={() => toggleSection(3)}
      >
        <h3>OSI Model</h3>
        <p>
          The OSI model is a conceptual framework that standardizes communication functions into seven abstraction layers.
        </p>
        <p>
          <strong>Layers:</strong> Physical, Data Link, Network, Transport, Session, Presentation, Application.
        </p>
        <p>
          <strong>Security Considerations:</strong> Layer-specific attacks, protocol spoofing.
        </p>
      </div>

      {/* ARP Protocol Section */}
      <div
        className={`protocol-section ${activeSection === 4 ? 'active' : ''}`}
        onClick={() => toggleSection(4)}
      >
        <h3>ARP - Address Resolution Protocol</h3>
        <p>
          ARP is used to map an IP address to a physical (MAC) address on a local network.
        </p>
        <p>
          <strong>Common Use:</strong> Resolving IP addresses to MAC addresses in local networks.
        </p>
        <p>
          <strong>Security Considerations:</strong> ARP spoofing, MAC flooding.
        </p>
      </div>

      {/* Ethernet Protocol Section */}
      <div
        className={`protocol-section ${activeSection === 5 ? 'active' : ''}`}
        onClick={() => toggleSection(5)}
      >
        <h3>Ethernet</h3>
        <p>
          Ethernet is a family of networking technologies commonly used in local area networks (LANs).
        </p>
        <p>
          <strong>Common Use:</strong> Wired LAN connections.
        </p>
        <p>
          <strong>Security Considerations:</strong> Eavesdropping, MAC spoofing.
        </p>
      </div>

      {/* TCP/IP Protocol Section */}
      <div
        className={`protocol-section ${activeSection === 6 ? 'active' : ''}`}
        onClick={() => toggleSection(6)}
      >
        <h3>TCP/IP - Transmission Control Protocol/Internet Protocol</h3>
        <p>
          TCP and IP are foundational protocols for internet communication, providing reliable data transfer and addressing.
        </p>
        <p>
          <strong>Common Use:</strong> Internet communication, data transmission.
        </p>
        <p>
          <strong>Security Considerations:</strong> Denial of Service (DoS), IP spoofing.
        </p>
      </div>
    </div>
  );
};

export default ProtocolsInfo;
