import React, { useEffect, useRef, useState, Component  } from "react";

const AddRecipe = () => {
  const [value, setValue] = useState("");
  const [valueIngredient, setValueIngredient] = useState("");
  const [addIngredient, setAddIngredient] = useState(true);
  const inputTitle = useRef();
  const inputIngredient = useRef();
  const [listIngredient, setListIngredient] = useState([]);

  useEffect(() => {
    console.log(listIngredient);
  }, [listIngredient]);

  function renderListIngredients() {
    return listIngredient.map((ingredient, i) => {
      return (
        <li key={i}>
          {ingredient}
          <button onClick={() => {}}>elimina</button>
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
          { name: "cazzo di budda", qt: "500", unit: "g" },
          { name: "cazzo di budda", qt: "500", unit: "g" },
          { name: "cazzo di budda", qt: "500", unit: "g" },
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
        <button
          onClick={() => {
            setAddIngredient(!addIngredient);
          }}
          className="w-[70%] mt-5 text-[20px] font-semibold bg-slate-900 text-white p-3 rounded-3xl"
        >
          Aggiungi ingredienti
        </button>
        {!addIngredient && (
          <div className="w-full flex justify-center items-baseline gap-2 mt-5 ">
            <input
              ref={inputIngredient}
              className=" p-2 border-[2px] border-gray-500  rounded-md"
              type="text"
              placeholder="Ingrediente"
            />
            <button
              onClick={() => {
                setListIngredient([...listIngredient, valueIngredient]); 
              }}
            
              className=" text-[30px] bg-gray-500 text-white rounded-full px-3 font-bold flex items-center justify-center"
            >
              <span>+</span>
            </button>
          </div>
        )}
        <div className="mt-5 text-[20px] flex flex-wrap">
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
