import React from 'react'
import Img1 from "../assets/images/logo.png";
import Img2 from "../assets/images/preloader-img.png";
const Preloader = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center mt-20 ">
      <img src={Img1} alt="" />
      <img src={Img2}  alt=""  className="mt-20 h-[100vh]" />
    </div>
  );
}

export default Preloader