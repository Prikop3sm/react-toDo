import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import "./styles/main.scss"
import {TodosProvider} from "./context/todosContext/context.jsx";
import {UserSettingsProvider} from "./context/userSettingsContext/context.jsx";


/* eslint-disable react/prop-types */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserSettingsProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </UserSettingsProvider>
  </React.StrictMode>
)
