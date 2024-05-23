import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data from local storage
    localStorage.removeItem('users');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="logout-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
