import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./pages/Login.tsx";
import {Homepage} from "./pages/Homepage.tsx";

const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    },
  {
    path: '/',
    element: <Homepage />
  }
  ],{
    basename: "/vite-example"
  }
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
