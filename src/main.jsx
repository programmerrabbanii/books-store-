import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Home from './components/home/Home.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
