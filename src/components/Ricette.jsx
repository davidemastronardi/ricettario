import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { conversCapitalize } from "../utils";
import ArrowBotton from "../img/arrowbotton.svg"
import ArrowTop from "../img/arrowtop.svg"

const Ricette = ({ ricette, setRicette, getDati }) => {
  const navigate = useNavigate();
  const [openPreparazione, setOpenPreparazione] = useState(true);



  function renderIngredienti() {
    return ricette.attributes.ingredients.sort((a, b) => a.name.localeCompare(b.name)).map((ingrediente, i) => {
      return (
        <li className="text-[20px] mb-3 md:w-[50%]" key={i}>
          <div className="flex gap-2 md:justify-center">
            {"- " + conversCapitalize(ingrediente.name)}
            <div className="flex gap-1 text-[13px] items-center">
              {ingrediente.qt}
              <div>{ingrediente.unit}</div>
            </div>
          </div>
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
    <div className="w-full md:w-[50%]  xl:w-1/3 md:p-2 lg:p-4 xl:p-5">
      <ul className="w-full bg-slate-300 mb-5 p-3 sm:min-h-[460px]">
        <li>
          <h1 className="text-[20px] font-bold text-center">
            {conversCapitalize(ricette.attributes.titolo)}
          </h1>
          <ul className="w-full text-white  bg-slate-600 p-3 mt-4 rounded-md text-[12px] flex flex-col items-center md:flex md:flex-row  md:flex-wrap md:min-h-[300px]">
            {renderIngredienti()}
          </ul>
          <div onClick={()=>setOpenPreparazione(!openPreparazione)} className="flex justify-center mt-5">
            <h1 className="font-bold cursor-pointer">Info preparazione </h1>
            {openPreparazione?<img className="w-[25px] cursor-pointer" src={ArrowBotton} alt="arrowBotton" />:
            <img className="w-[25px] cursor-pointer" src={ArrowTop} alt="" />}
          </div>
           {!openPreparazione&& <p className="text-center text-[18px] mt-4">
              {conversCapitalize(ricette.attributes.preparazione)}
            </p>}
        </li>
        <div className="flex justify-between mt-5 text-white font-semibold">
          <button
            onClick={() => {
              navigate(`/editRecipe/${ricette.id}`);
            }}
            className="w-full mx-4 p-2 bg-slate-900 rounded-md"
          >
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
