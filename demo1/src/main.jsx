import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App3';
// import "./styles.css";
// import { App } from "./components/App5.1";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
