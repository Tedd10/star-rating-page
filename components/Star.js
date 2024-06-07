// src/components/Star.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const Star = ({ selected = false, onClick = () => { } }) => (
  <FaStar
    className="star"
    color={selected ? 'gold' : 'grey'}
    onClick={onClick}
  />
);

export default Star;
