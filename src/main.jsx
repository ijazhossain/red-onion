import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';
import CartProvider from './providers/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>

)
