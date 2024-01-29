import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFount from './pages/notFoundpages/NotFountPage.tsx';
import Home from './pages/homePages/HomePage.tsx';
import Login from './pages/authPages/loginPage/LoginPage.tsx';
import SignUp from './pages/authPages/registerPage/RegisterPage.tsx';
import Main from './pages/Unused/mainPages/MainPage_before.tsx';
import SelectTaste from './pages/Unused/selectPages/SelectTaste.tsx';
import Test from './pages/Unused/testPages/TestPage.tsx';
import MyFiend from './pages/Unused/friendListPages/MyFiend.tsx';
import SelectPlace from './pages/Unused/selectPages/SelectPlacePage.tsx';
import ResultPlace from './pages/Unused/resultPages/ResultPlace.tsx';
import TotalList from './pages/Unused/totalListPages/TotalListPage.tsx';
import WaitFriend from './pages/loadingPages/WaitFriendPage.tsx';
import { Provider } from 'react-redux';
import store from './store/store';
import AlerltNotification from './shared/components/AlerltNotification.tsx';
import LiveModePage from './pages/mainPages/MainPage.tsx';
import Room from './pages/mainPages/room/room/Room.tsx';

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
        element: <LiveModePage />,
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
        path: '/livemode',
        element: <LiveModePage />,
      },
      {
        path: '/livemode/:roomnumber',
        element: <Room />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
    <AlerltNotification />
  </Provider>,
);
