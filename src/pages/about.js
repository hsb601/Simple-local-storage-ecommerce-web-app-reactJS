import React from "react"
import { useNavigate } from "react-router-dom"
export const About = () => {
    const navigate = useNavigate();
  
    const navlogin = () => {
      navigate("/login");
    };
  
    return (
      <div>
        <p>About page</p>
        <button className="button" onClick={navlogin}>Go to login</button>
      </div>
    );
  };