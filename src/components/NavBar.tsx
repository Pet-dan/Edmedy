import React from "react";
import { Link } from "react-router-dom";
//images
import question from "../assets/images/Q&A.png";
import logo from "../assets/images/logo.png";
const NavBar = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center sm:justify-between w-full p-10 gap-4 items-center m-auto">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-40 " />
        </Link>
        <div className="flex items-center  ">
          <img src={question} alt="" />
          <Link to="/faq" className="ml-3 hover:underline hover:decoration-1  ">
            Frequently Asked Questions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
