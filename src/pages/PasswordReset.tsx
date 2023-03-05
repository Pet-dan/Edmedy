import React, { useState, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Swal from "sweetalert2";
import swal from "sweetalert";

const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const disable = () => {
    if (userName && password && password === confirmPassword) {
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Password Reset Successful",
      showConfirmButton: false,
      text: "Click proceed below to go to dashboard",
      footer:
        ' <a href= "/admin/dashboard" className="bg-black">Go To Dashboard</a> ',
    });
  };

  return (
    <div className="min-h-[100vh] flex  items-center  max-w-[1300px] flex-wrap  mx-auto justify-between">
      <div className="hidden md:flex">
        <img src={logo} alt="" />
      </div>
      <form className="flex justify-center w-[100%] md:w-[450px]  ">
        <div className="bg-[#FFFFFF] shadow-xl h-[600px] w-[450px] flex  flex-col pl-5 md:pl-12 pr-9  ">
          <h3 className="font-extrabold mt-9">USER PASSWORD RESET </h3>
          <div className="bg-[#D9E2EC] h-[3px] max-w-[350px] mt-2">
            <div className="h-[100%] bg-black relative max-w-[80px]"></div>
          </div>
          <div className="mt-16 max-w-[350px] ">
            <p className="text-[#636363] text-[15px]">Email/Username</p>
            <input
              className={`input-field ${
                userName ? "border-[#000000]" : "border-[#2277c038]"
              }`}
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email/username"
            />
          </div>

          <div className="mt-12 max-w-[350px]">
            <p className="text-[#636363] text-[15px]">New Password </p>
            <input
              className={`input-field ${
                password ? "border-[#000000]" : "border-[#2277c038]"
              }`}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**************"
            />
          </div>
          <div className="mt-12 max-w-[350px]">
            <p className="text-[#636363] text-[15px]">Confirm New Password</p>
            <input
              className={` input-field ${
                confirmPassword ? "border-[#000000]" : "border-[#2277c038]"
              }`}
              type="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="**************"
            />
            {confirmPassword.length > 0 && confirmPassword !== password && (
              <p className="text-[15px] text-red-500 mt-1">
                Passwords do not match
              </p>
            )}
          </div>
          <button
            disabled={
              userName && password && password === confirmPassword
                ? false
                : true
            }
            className="bg-[#000000] text-white mt-16 py-2 rounded-lg disabled:bg-[#AAAAAA] font-semibold cursor-pointer"
            onClick={handleClick}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
