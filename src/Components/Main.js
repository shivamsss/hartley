import React from "react";

import image1 from "./Welcome.jpg";
const Main = () => {
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={image1}
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default Main;
