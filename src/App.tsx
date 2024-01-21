import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from './pages/mainHeader';
import AuthHeader from './pages/authHeader';

console.log('Hello');

const App: React.FC = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/';
  const HeaderComponent = isLoginPage ? MainHeader : AuthHeader;

  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default App;
