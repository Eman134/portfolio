import React from 'react';
import '../styles/Background.css';

const CircuitBackground = () => {
  return (
    <div className="circuit-container">
      <div className="circuit-element circuit-1"></div>
      <div className="circuit-element circuit-2"></div>
      <div className="circuit-element chip-1"></div>
      <div className="circuit-element chip-2"></div>
      <div className="circuit-element chip-3"></div>
      <div className="circuit-overlay"></div>
    </div>
  );
};

export default CircuitBackground;
