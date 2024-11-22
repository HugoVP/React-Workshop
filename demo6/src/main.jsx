import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App1.jsx'
import './styles1.css'
// import App from "./components/App/App6";
// import "./styles2.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
