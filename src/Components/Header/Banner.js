import React, { Fragment } from "react";

const Banner = ({ searchSkill, setSearchSkill }) => {
  const handleInputChange = (e) => {
    setSearchSkill(e.target.value);
  };

  return (
    <Fragment>
      <div className="title md:px-32 px-16 pt-20 md:text-left text-left">
        <h3 className="text-5xl mt-8  font-bold  leading-snug">
          Hy I'm
          <br /> Software Developer
        </h3>
      </div>

      <div className="search-bar md:block flex flex-col lg:px-32 px-16 mt-6 md:h-12 h-36 w-100 text-center">
        <input
          onChange={handleInputChange}
          type="text"
          className="md:w-6/12 w-full h-full text-3xl text-black rounded-none"
        />
        <button className="md:w-2/12 mt-4 w-full h-full text-2xl font-bold bg-black rounded-none ml-0">
          {" "}
          Search{" "}
        </button>
      </div>
    </Fragment>
  );
};

export default Banner;
