import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFount from './pages/notFount.tsx';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import SignUp from './pages/signUp.tsx';
import Main from './pages/main.tsx';
import SelectTaste from './pages/selectTaste.tsx';
import Test from './pages/Test.tsx';
import MyFiend from './pages/manageFriends/myFiend.tsx';
import SelectPlace from './pages/selectPlace.tsx';
import ResultPlace from './pages/resultPlace.tsx';
import TotalList from './pages/totalList.tsx';
import WaitFriend from './pages/waitFriend.tsx';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFount />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/selecttaste',
        element: <SelectTaste />,
      },
      {
        path: '/myfriend',
        element: <MyFiend />,
      },
      {
        path: '/selectplace',
        element: <SelectPlace />,
      },
      {
        path: '/resultplace',
        element: <ResultPlace />,
      },
      {
        path: '/totallist',
        element: <TotalList />,
      },
      {
        path: '/waitfriend',
        element: <WaitFriend />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
