import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from './shared/components/headers/MainHeader';
import AuthHeader from './shared/components/headers/AuthHeader';

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
