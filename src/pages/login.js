import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    var usersData = localStorage.getItem('users');

    var userObj = {
      email,
      pass: password,
    };

    if (usersData) {
      var oldData = JSON.parse(usersData);
      var res = oldData.filter(function (val) {
        return val.email === email && val.pass === password;
      });

      if (res.length > 0) {
        alert('Login Successful');
        navigate('/');
      } else {
        alert('Login Failed');
      }
    } else {
      alert("User doesn't exist. Please sign up first.");
      navigate('/signup');
    }
  };

  return (
    <div className="card-image2">
      <center>
        <div className="form-group text-box">
          <p>Login Page</p>
          <hr className="hr1" />
        </div>
        <div className="row">
          <div className="col label-text">
            <label>Email or Phone number</label>
            <div className="form-group text-box">
              <input
                className="text-box"
                type="email"
                placeholder="Enter username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col label-text">
            <label>Password</label>
            <div className="form-group text-box">
              <input
                className="text-box"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="pass"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group text-box">
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </center>
    </div>
  );
};
