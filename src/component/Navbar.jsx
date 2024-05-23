import { useState } from 'react';
import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="links">
        <button onClick={() => handleNavigate('/signup')}>Signup</button>
        <button onClick={() => handleNavigate('/login')}>Login</button>
        {/* <button onClick={() => handleNavigate('/about')}>About</button> */}
        <button onClick={() => handleNavigate('/')}>Shop</button>
        <button onClick={() => handleNavigate('/purchased')}>Purchased</button>
        <button onClick={() => handleNavigate('/cart')}>
          Cart <ShoppingCart size={25} />
          <span>{cartCount}</span>
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
