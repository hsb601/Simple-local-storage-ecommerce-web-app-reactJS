import { useState } from 'react';
import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <footer className="footer">
        <button onClick={() => handleNavigate('/about')}>About</button>
      </footer>
    </div>
  );
};

export default Footer;
