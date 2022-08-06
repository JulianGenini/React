import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { fireBaseConnection } from './firebase/config'
import './index.css'



fireBaseConnection()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
