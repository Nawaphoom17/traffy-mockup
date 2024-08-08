import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import LoginPage from "./Pages/LoginPage/LoginPage.jsx"
import HomePage from "./Pages/HomePage/HomePage.jsx"
import ReportPage from './Pages/ReportPage/ReportPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "Home",
    element: <HomePage/>
  },
  {
    path: "report",
    element: <ReportPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
