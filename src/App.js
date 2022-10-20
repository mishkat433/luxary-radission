import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Blog from './Pages/Blog/Blog';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Rooms from './Pages/Rooms/Rooms';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/rooms',
          loader: () => fetch("room.json"),
          element: <Rooms />,
        },
        {
          path: '/booking',
          element: <PrivateRoute><Booking /></PrivateRoute>,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
};

export default App;