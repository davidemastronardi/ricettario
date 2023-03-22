import React from "react";

const Ricette = ({ ricette }) => {
  return (
    <>
      <ul className="w-full mt-5 bg-slate-300 p-3">
        <li>
          <h1 className="text-[20px] font-semibold text-center">
            {ricette.attributes.titolo}
          </h1>
          <ul className="flex flex-wrap  w-full text-white bg-slate-500 p-3 mt-4 rounded-md text-[12px]">
            <li className="w-[50%] font-semibold ">
              - Aglio <span className="font-normal">20g</span>
            </li>
            <li className="w-[50%] font-semibold ">
              - Olio <span className="font-normal">10ml</span>
            </li>
            <li className="w-[50%] font-semibold mt-3">
              - Cime di rapa <span className="font-normal">300g</span>
            </li>
            <li className="w-[50%] font-semibold mt-3">
              - Peperoncino <span className="font-normal">5g</span>
            </li>
            <li className="w-[50%] font-semibold mt-3">
              - Orecchiette <span className="font-normal">100g</span>
            </li>
          </ul>
          <p className="text-center mt-4">{ricette.attributes.preparazione}</p>
        </li>
      </ul>

    </>
  );
};

export default Ricette;
