import React from "react";

const AddRecipe = () => {
  const handleSubmit = () => {
    const data = {
      data: {
        preparazione: "mettere il tacchino nel forno",
        titolo: "pino",
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
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <div className="flex flex-col items-center">
        <button className="w-full bg-green-700">Aggiungi un ingrediente</button>
        <input
          className="w-[60%] border-[2px] border-gray-400 rounded-md "
          type="text"
        />
      </div>
      <button className=" bg-slate-900 w-full p-5 text-[30px] font-semibold text-white " onClick={handleSubmit}>
        Salva ricetta
      </button>
    </div>
  );
};

export default AddRecipe;
