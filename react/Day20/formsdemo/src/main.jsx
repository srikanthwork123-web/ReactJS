import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LazyLoading from './LazyLoading.jsx'

createRoot(document.getElementById('root')).render(
    <LazyLoading />
)
