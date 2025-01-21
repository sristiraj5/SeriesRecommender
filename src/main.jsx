import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
// import Profiles from './components/profiles'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profiles /> */}
  </StrictMode>,
);
