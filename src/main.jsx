import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ApiProvider from './context/context';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
    <App />
    </ApiProvider>
  </StrictMode>,
);
