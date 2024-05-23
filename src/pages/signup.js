import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

export const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    var usersData = localStorage.getItem('users');

    var userObj = {
      email,
      pass: password,
    };

    if (usersData) {
      var oldData = JSON.parse(usersData);
      var res = oldData.filter(function (val) {
        return val.email === email;
      });

      if (res.length > 0) {
        alert('User email already exists');
      } else {
        signUpUser(userObj, oldData);
      }
    } else {
      signUpUser(userObj);
    }
  };

  const signUpUser = (userObj, oldData = []) => {
    oldData.push(userObj);
    localStorage.setItem('users', JSON.stringify(oldData));
    alert('Signup Successful');
    navigate('/login');
  };

  return (
    <div className="card-image2">
      <center>
        <div className="form-group text-box">
          <p>Signup Page</p>
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
          <button className="button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </center>
    </div>
  );
};
