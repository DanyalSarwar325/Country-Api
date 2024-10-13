import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx';
import CountryDetailsPage from './CountryDetailPage.jsx';
import Home from './Home.jsx'


import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import CardContainer from './CardContainer.jsx';
import CustomError from './CustomError.jsx';
import Contact from './Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
     
      {
          path:  '/:country',
        element: <CountryDetailsPage/>,
      },
      {
        path: '/contact',
        element:<Contact/> ,
      },
    
  
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
