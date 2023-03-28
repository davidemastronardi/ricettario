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
    return ricette.sort((a, b) => a.attributes.titolo.localeCompare(b.attributes.titolo)).map((ricetta, i) => {
      
      return <Ricette getDati={getDati} key={i} ricette={ricetta} setRicette={setRicette} />;
    });
  }

  
  return (
    <div className="w-full">
    <div className="h-screen xl:flex xl:flex-col xl:items-center bg-slate-800">
        <h1 className="text-center text-[50px] text-white font-bold font-titolo pt-5">Le mie Ricette</h1>
      <div className=" flex flex-wrap xl:w-[1440px] bg-white mt-5 mb-28">
        {renderRicette()}
      </div>
      <button className="fixed bottom-0 bg-blue-600 w-full p-5 text-[30px] font-semibold text-white " onClick={() => navigate("/addRecipe/")}>CREA NUOVA</button>
    </div>
    </div>
  );
};

export default Home;
