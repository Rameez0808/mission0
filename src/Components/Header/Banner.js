import React, { Fragment } from "react";

const Banner = ({ searchSkill, setSearchSkill }) => {
  const handleInputChange = (e) => {
    setSearchSkill(e.target.value);
  };

  return (
    <Fragment>
      <div className="title md:px-32 px-16 pt-20 md:text-left text-center">
        <h3 className="text-5xl font-bold">Hy I'm</h3>
        <h3 className="text-5xl font-bold mt-4">Software Developer</h3>
      </div>

      <div className="search-bar lg:px-32 px-16 mt-12 h-12 w-100 text-center">
        <input
          onChange={handleInputChange}
          type="text"
          className="w-6/12 h-full text-2xl text-black"
        />
        <button className="w-3/12 h-full text-2xl bg-black"> Search </button>
      </div>
    </Fragment>
  );
};

export default Banner;
