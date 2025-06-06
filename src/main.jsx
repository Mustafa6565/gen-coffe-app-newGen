import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StateCotrolProvider } from './Context/StateControl.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateCotrolProvider>
      <App />
    </StateCotrolProvider>
  </StrictMode>,
)
