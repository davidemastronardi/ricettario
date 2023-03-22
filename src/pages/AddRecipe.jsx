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

    fetch(process.env.REACT_APP_BASE_PATH+"/ricettes", {
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
    <div>
      <button className="bg-green-700">Aggiungi un ingrediente</button>

      <button className="bg-red-600" onClick={handleSubmit}>
        Salva ricetta
      </button>
    </div>
  );
};

export default AddRecipe;
