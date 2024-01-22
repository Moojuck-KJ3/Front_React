import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFount from './pages/notFoundpages/NotFountPage.tsx';
import Home from './pages/homePages/HomePage.tsx';
import Login from './pages/authPages/loginPage/LoginPage.tsx';
import SignUp from './pages/authPages/registerPage/RegisterPage.tsx';
import Main from './pages/mainPages/MainPage.tsx';
import SelectTaste from './pages/selectPages/SelectTaste.tsx';
import Test from './pages/testPages/TestPage.tsx';
import MyFiend from './pages/friendListPages/MyFiend.tsx';
import SelectPlace from './pages/selectPages/SelectPlacePage.tsx';
import ResultPlace from './pages/resultPages/ResultPlace.tsx';
import TotalList from './pages/totalListPages/TotalListPage.tsx';
import WaitFriend from './pages/loadingPages/WaitFriendPage.tsx';
import { Provider } from 'react-redux';
import store from './store/store';
import AlerltNotification from './shared/components/AlerltNotification.tsx';
import LiveModePage from './pages/liveModePages/liveModePage.tsx';

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
        path: '/livemode',
        element: <LiveModePage />,
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
      <AlerltNotification />
    </Provider>
  </React.StrictMode>,
);
