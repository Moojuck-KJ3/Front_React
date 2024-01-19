import React from 'react';
import Header from './Pages/Header';
import { Outlet } from 'react-router-dom';

console.log('Hello');

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
