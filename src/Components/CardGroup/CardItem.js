import React from "react";

const CardItem = ({ name, type }) => {
  return (
    <div className="border-2 border-black h-auto md:w-1/4 sm:w-80 w-full cursor-pointer">
      <img
        className="h-64 p-4 mx-auto hover:scale-110"
        src={`./Images/${name}.svg`}
        alt="card"
      />
      <div className="px-6 py-6 bg-black text-white">
        <h3 className="text-2xl uppercase font-bold ">{name}</h3>
        <p className="mt-2 text-xl  font-bold">{type}</p>
      </div>
    </div>
  );
};

export default CardItem;
