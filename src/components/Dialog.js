// src/components/Dialog.js
import React from 'react';
//import '../App.css';

const Dialog = ({ onClose }) => (
  <div className="dialog">
    <h2>Dialog Box</h2>
    <button className="button" onClick={onClose}>Close</button>
  </div>
);

export default Dialog;
