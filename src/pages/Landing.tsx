import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

import { FaHandPointRight } from "react-icons/fa";
const Landing = () => {
    return (
      <div className="border border-[ #1E1E1E] max-w-[1450px] m-auto">
        <div className="text-center my-16">
          <img className="m-auto " src={logo} alt=""  />
          <h1 className="text-[#636363] text-[50px] font-extrabold mt-10">
            Welcome to the <span className="text-[#000000] ">Edmedy</span>
          </h1>
          <p className="mt-2 text-[#636363]">
            The school management core engine that seamlessly manages both staff
            members, parents and students of <br /> the school.
          </p>
          <div className="mt-36 flex items-center justify-center">
            <Link to="/" className=" text-[#636363]">
              Get started by choosing a subscription plan
            </Link>
            <span className="ml-4">
              <FaHandPointRight />
            </span>
          </div>
        </div>
      </div>
    );
}

export default Landing