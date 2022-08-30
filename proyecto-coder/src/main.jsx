import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { fireBaseConnections } from './firebase/config'
import './index.css'

fireBaseConnections()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
