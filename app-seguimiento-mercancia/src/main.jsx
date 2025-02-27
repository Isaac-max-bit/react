import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Encabezado from './Encabezado';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <h1>Hello Isaac, It's time to practice</h1> */}
    <Encabezado />
  </StrictMode>
);
