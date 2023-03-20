import { useEffect, useState } from "react";
import "./App.css";
import Ricette from "./components/Ricette";

function App() {
  const [ricette, setRicette] = useState([]);
  

  const getDati = () => {
    fetch("http://localhost:1337/api/ricettes?populate=*")
      .then((response) => response.json())
      .then((data) => {
        setRicette(data.data);
      });
  };

  useEffect(() => {
    getDati();
  }, []);

  function renderRicette() {
    return ricette.map((ricette, i) => {
      return <Ricette key={i} ricette={ricette} setRicette={setRicette} />;
    });
  }


  return (
    <div className="App ">
      <div className="p-4">
        <h1 className="text-center text-[40px] font-bold">Le mie Ricette</h1>
        {renderRicette()}
      </div>
    </div>
  );
}

export default App;
