// src/App.js
import './css/style.css'
import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import reactLogo from './img/react-img.jpg';
//import './App.css';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const toggleContent = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="app-container">
      {!showImage ? <StarRating /> : <img src={reactLogo} alt="React Logo" />}
      <button onClick={() => { setIsDialogOpen(true); toggleContent(); }} className="button">
        {showImage ? 'Show Stars' : 'Open Dialog'}
      </button>
      {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
};

export default App;
