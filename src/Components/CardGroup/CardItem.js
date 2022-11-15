import React from "react";

const CardItem = ({ name, type }) => {
  return (
    <div className="border-2 border-black h-auto md:w-90 sm:w-80 w-full">
      <img
        className="h-64 p-4 mx-auto"
        src={`./Images/${name}.svg`}
        alt="card"
      />
      <div className="px-6 py-6 bg-black text-white">
        <h3 className="text-xl uppercase font-bold ">{name}</h3>
        <p className="mt-2">{type} </p>
      </div>
    </div>
  );
};

export default CardItem;
