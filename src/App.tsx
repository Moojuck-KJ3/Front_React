import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from './shared/components/headers/MainHeader';
import AuthHeader from './shared/components/headers/AuthHeader';

console.log('Hello');

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const location = useLocation();

  const isLoginPage = ['/login', '/signup', '/'].includes(location.pathname);
  const isLiveMode = location.pathname === '/livemode';

  let HeaderComponent: React.ReactNode;

  switch (true) {
    case isLiveMode:
      HeaderComponent = null;
      break;
    case isLoginPage:
      HeaderComponent = <MainHeader />;
      break;
    default:
      HeaderComponent = <AuthHeader />;
  }

  return (
    <>
      {HeaderComponent}
      <Outlet />
    </>
  );
};

export default App;
