import React from "react";
import Img1 from "../assets/images/logo.png";
import Img2 from "../assets/images/preloader-img.png";
const Preloader = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center ">
      <div className="h-[40vh] w-full flex justify-center items-center">
        <img
          src={Img1}
          alt=""
          className="w-[160px] sm:w-[200px] md:w-[300px]"
        />
      </div>
      <img
        src={Img2}
        alt=""
        className="h-[60vh] w-full object-cover object-center"
      />
    </div>
  );
};

export default Preloader;
