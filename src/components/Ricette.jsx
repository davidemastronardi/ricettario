import React from "react";

const Ricette = ({ ricette }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-[20px] font-semibold">
          {ricette.attributes.titolo}
        </h1>
        <p>{ricette.attributes.preparazione}</p>
      </div>
    </div>
  );
};

export default Ricette;
