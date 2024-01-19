import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from './Pages/MainHeader';
import AuthHeader from './Pages/AuthHeader';

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
