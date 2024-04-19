import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LocalStorageProvider } from './Components/Contexto.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
  </React.StrictMode>,
);
