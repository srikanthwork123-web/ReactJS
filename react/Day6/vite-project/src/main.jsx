import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import H, { PawanKalyan } from './index1.jsx' // default import
//import Header from './index1.jsx' // default import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <H></H> 
    <PawanKalyan/>
  </StrictMode>,
)
