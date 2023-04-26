import './App.css'
import Router from './Routes'
import axios from 'axios';
import LoginPages from './Modules/Login/pages/LoginPages'


function App() {
//axios.defaults.baseURL="http://localhost:3000/api";  //ya cree  AxosInstance
  return (
    <div className="App">
   {/*    <Router/> */}
     <LoginPages/> 
    </div>
  )
}

export default App
