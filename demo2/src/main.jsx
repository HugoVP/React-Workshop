import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App6.jsx'
// import "./styles1.css"
import "./styles2.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
