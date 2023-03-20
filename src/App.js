import { useState } from "react";
import "./App.css";
import Ricette from "./components/Ricette";

function App() {

  const [ricette, setRicette]= useState([]);

  const getRicette = ()=>{
    fetch("http://localhost:1337/api/ricettes?populate=*")
  .then((response) => response.json())
  .then((data) => console.log(data));
  }

  return (
    <div className="App ">
      <div className="p-4">
        <h1 className="text-center text-[40px] font-bold">Le mie Ricette</h1>
        <div>
          <Ricette/>
        </div>
      </div>
    </div>
  );
}

export default App;
