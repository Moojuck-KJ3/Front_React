import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFount from './Pages/NotFount.tsx';
import Home from './Pages/Home.tsx';
import Login from './Pages/Login.tsx';
import SignUp from './Pages/SignUp.tsx';
import Main from './Pages/Main.tsx';
import SelectTaste from './Pages/SelectTaste.tsx';
import Test from './Pages/Test.tsx';
import MyFiend from './Pages/ManageFriends/MyFiend.tsx';
import SelectPlace from './Pages/SelectPlace.tsx';
import ResultPlace from './Pages/ResultPlace.tsx';
import TotalList from './Pages/TotalList.tsx';
import WaitFriend from './Pages/WaitFriend.tsx';
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
