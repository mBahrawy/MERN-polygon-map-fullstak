import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-toastify/dist/ReactToastify.css';

import AppReduxProvider from '@/componenets/AppReduxProvider/AppReduxProvider.component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <AppReduxProvider>
      <App />
    </AppReduxProvider>
  </React.StrictMode>,
)
