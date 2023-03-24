import React, { useState } from "react";
import { conversCapitalize } from "../utils";


const Ricette = ({ ricette, setRicette, getDati }) => {
  
  function renderIngredienti() {
    return ricette.attributes.ingredients.map((ingrediente, i) => {
      return (
        <li className="text-[15px]" key={i}>
          {conversCapitalize(ingrediente.name)}
        </li>
      );
    });
  }

  const deleteRicetta = () => {
    fetch(process.env.REACT_APP_BASE_PATH + `/ricettes/${ricette.id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    })
      .then((res) => {
        if (res.status == 200) {
          getDati();
        }
        res.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="">
      <ul className="w-full mt-5 bg-slate-300 p-3">
        <li>
          <h1 className="text-[20px] font-semibold text-center">
            {conversCapitalize(ricette.attributes.titolo)}
            
          </h1>
          <ul className="  w-full text-white bg-slate-500 p-3 mt-4 rounded-md text-[12px]">
            {renderIngredienti()}
          </ul>
          <p className="text-center mt-4">{ricette.attributes.preparazione}</p>
        </li>
        <div className="flex justify-between mt-5 text-white font-semibold">
          <button className="w-full mx-4 p-2 bg-slate-900 rounded-md">
            MODIFICA
          </button>
          <button
            onClick={deleteRicetta}
            className="w-full mx-4 p-2 bg-red-700 rounded-md"
          >
            ELIMINA
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Ricette;
