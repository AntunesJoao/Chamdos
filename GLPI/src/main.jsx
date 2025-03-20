import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Chamados from './components/Chamados.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path: "/Chamados",
    element: <Chamados/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
