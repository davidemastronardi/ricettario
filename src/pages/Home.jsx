import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ricette from "../components/Ricette";

const Home = () => {
  const navigate = useNavigate();

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
      return <Ricette getDati={getDati} key={i} ricette={ricette} setRicette={setRicette} />;
    });
  }

  
  return (
    <div>
      <div className="p-4 relative mb-[85px]">
        <h1 className="text-center text-[40px] font-bold">Le mie Ricette</h1>
        {renderRicette()}
      </div>
      <button className="fixed bottom-0 bg-slate-900 w-full p-5 text-[30px] font-semibold text-white " onClick={() => navigate("/addRecipe")}>CREA NUOVA</button>
    </div>
  );
};

export default Home;
