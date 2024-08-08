import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import "./styles/main.scss"
import {TodosProvider} from "./context/todosContext.jsx";


/* eslint-disable react/prop-types */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
)
