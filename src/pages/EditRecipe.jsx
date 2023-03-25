import React, { useEffect, useState } from "react";
import Delete from "../img/delete.svg";
import Return from "../img/return.svg";
import { useNavigate } from "react-router-dom";

const EditRecipe = () => {
  const navigate = useNavigate();




  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <div className="flex flex-col items-center relative">
        <img
          onClick={() => navigate("/")}
          className="w-[30px] absolute left-0 top-2 m-2"
          src={Return}
          alt="return"
        />

        <h1 className="w-full p-3 text-center text-[25px] text-white font-semibold bg-slate-500">
          Inserisci Titolo:
        </h1>
        <input
          className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md mt-5"
          type="text"
          placeholder="Titolo"
        />
        <div className="w-full mt-5 text-[25px] text-center font-semibold bg-slate-500 text-white p-4">
          Aggiungi ingredienti
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-2 mt-5 ">
          <input
            className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md"
            type="text"
            placeholder="Ingrediente"
          />
          <input
            className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md"
            type="number"
            placeholder="Quantità/peso"
          />

          <select
            className="border-gray-500 border-[2px] p-1 rounded-md w-[80%]"
            name="Misure"
            id="Misure"
          >
            <option value=""></option>
            <option value="pezzo/i">pezzo/i</option>
            <option value="gr">gr</option>
            <option value="L">L</option>
            <option value="ml">ml</option>
          </select>

          <button className="text-[30px] text-center bg-blue-600 text-white px-10 rounded-md font-bold">
            +
          </button>
        </div>

        <div className="text-[20px] w-full px-3 ">
          <ul></ul>
        </div>
        <div className=" w-full mt-5 text-[25px] text-center font-semibold bg-slate-500 text-white p-4">
          <h1>Aggiungi preparazione</h1>
        </div>
        <textarea
          className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md mb-[100px] mt-5"
          cols="30"
          rows="10"
          placeholder="Scrivi la preparazione..."
        ></textarea>
      </div>
      <button className=" bg-green-600 w-full p-5 text-[30px] font-semibold text-white fixed bottom-0">
        Salva ricetta
      </button>
    </div>
  );
};

export default EditRecipe;
