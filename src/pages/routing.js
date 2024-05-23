import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

export const PublicRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('users');
    if (login) {
      navigate('/');
    }
  }, [navigate]);

  return <Component />;
};

export const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('users');
    if (!login) {
      navigate('/login');
    }
  }, [navigate]);

  return <Component />;
};
