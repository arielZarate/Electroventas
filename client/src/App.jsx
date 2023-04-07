import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './Routes'
import axios from 'axios';
import LoginPage from './pages/Login Pages/LoginPages'
function App() {
axios.defaults.baseURL="http://localhost:3000/api";
  return (
    <div className="App">
   {/*    <Router/> */}
     <LoginPage/>
    </div>
  )
}

export default App
