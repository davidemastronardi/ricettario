import React, { useEffect, useRef, useState } from "react";
import Delete from "../img/delete.svg";

const AddRecipe = () => {
  const [value, setValue] = useState("");
  const [valueIngredient, setValueIngredient] = useState("");
  const inputTitle = useRef();
  const inputIngredient = useRef();
  const [listIngredient, setListIngredient] = useState([]);

  function renderListIngredients() {
    return listIngredient.map((ingredient, i) => {
      return (
        <li className="flex justify-between  bg-slate-300 mt-3 p-2" key={i}>
          <p>{ingredient}</p>
          <p></p>
          <img
            className="w-[30px] ml-1"
            src={Delete}
            alt=""
          />
        </li>
      );
    });
  }

  const handleSubmit = () => {
    const data = {
      data: {
        preparazione: "mettere il tacchino nel forno",
        titolo: value,
        ingredients: [
          { name: {listIngredient}, qt: "500", unit: "g" }
        ],
      },
    };

    fetch(process.env.REACT_APP_BASE_PATH + "/ricettes", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <div className="flex flex-col items-center">
        <h1 className="w-full p-3 text-center text-[30px] text-white font-semibold bg-slate-500">
          Inserisci Titolo:
        </h1>
        <input
          ref={inputTitle}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md mt-5"
          type="text"
          placeholder="Titolo"
        />
        <div className="w-full mt-5 text-[30px] text-center font-semibold bg-slate-500 text-white p-4">
          Aggiungi ingredienti
        </div>
       
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-5 ">
          <input
            onChange={(e) => {
                  setValueIngredient(e.target.value);
            }}
            ref={inputIngredient}
            className="w-[80%] p-2 border-[2px] border-gray-500  rounded-md"
            type="text"
            placeholder="Ingrediente"
          />
           <button
          onClick={() => {
            setListIngredient([...listIngredient, valueIngredient]);
          }}
          className="text-[30px] text-center bg-gray-500 text-white px-10 rounded-md font-bold"
        >
          +
        </button>
        </div>
        <div className="text-[20px] w-full px-3">
          {/* render array ingredienti */}
          <ul>{renderListIngredients()}</ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
      <button
        className=" bg-slate-900 w-full p-5 text-[30px] font-semibold text-white "
        onClick={handleSubmit}
      >
        Salva ricetta
      </button>
    </div>
  );
};

export default AddRecipe;
