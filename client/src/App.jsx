import { useState } from "react";
import "./App.css";

import RoutesAll from "./RoutesAll";

function App() {
  //axios.defaults.baseURL="http://localhost:3000/api";  //ya cree  AxosInstance

  return (
    <div className="App">
      <RoutesAll />
    </div>
  );
}

export default App;
