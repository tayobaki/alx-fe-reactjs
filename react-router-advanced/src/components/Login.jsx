import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    const origin = location.state?.from?.pathname || '/profile';
    navigate(origin);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;
