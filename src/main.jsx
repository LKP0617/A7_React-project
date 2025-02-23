import { StrictMode } from 'react'
import './assets/scss/all.scss'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
