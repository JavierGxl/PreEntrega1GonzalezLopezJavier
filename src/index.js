import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Context/CartContext';
import './components/utils/functions'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App/>
  </CartProvider>
);
