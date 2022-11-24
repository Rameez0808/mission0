import React from "react";

const ButtonList = ({ button, fetchButton }) => {
  return (
    <div className="flex gap-x-2">
      {button.map((buttonName, index) => {
        return (
          <button
            requestintent={buttonName.value}
            onClick={fetchButton}
            className="text-white rounded-full uppercase font-semibold px-4 py-0.5 text-sm my-2 w-auto bg-red-800"
            key={index}
          >
            {buttonName.name}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
