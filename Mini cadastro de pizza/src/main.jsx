import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Cadastro from "./routes/Cadastro"
import Error from "./routes/Error"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
  },
  {
    path:"/cadastro",
    element:<Cadastro />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
