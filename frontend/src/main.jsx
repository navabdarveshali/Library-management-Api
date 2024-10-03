import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
  </StrictMode>,
)