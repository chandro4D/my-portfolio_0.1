import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
