import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LocalStorageProvider } from './Components/Contexto.jsx';
import { ToastWrapper } from 'keep-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LocalStorageProvider>
      <App />
      <ToastWrapper />
    </LocalStorageProvider>
  </React.StrictMode>,
);
