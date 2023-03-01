import React,{useState, Dispatch, SetStateAction} from 'react'
import logo from "../assets/images/logo.png"




const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("")

  // let value = userName && pas

  return (
    <div className="h-[100vh] flex  items-center  max-w-[1300px] flex-wrap  mx-auto justify-between">
      <div className="hidden md:flex">
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-center w-[100%] md:w-[450px]  ">
        <div className="bg-[#FFFFFF] shadow-xl h-[500px] w-[450px] flex  flex-col pl-5 md:pl-12 pr-9  ">
          <h3 className="font-extrabold mt-9">SUPER ADMIN LOG IN</h3>
          <div className="bg-[#D9E2EC] h-[3px] max-w-[350px] mt-2">
            <div className="h-[100%] bg-black relative max-w-[80px]"></div>
          </div>
          <div className="mt-16 max-w-[350px] ">
            <p className="text-[#636363] text-[15px]">Admin Email/Username</p>
            <input
              className={`border-[#2277c038]  text-[13px]  border-2 rounded-md py-2 px-4 outline-none w-[100%] ${
                userName && "border-[#000000]"
              }`}
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email/username"
            />
          </div>

          <div className="mt-12 max-w-[350px]">
            <p className="text-[#636363] text-[15px]">Admin Password</p>
            <input
              className={`border-[#2277c038] text-[13px] border-2 rounded-md py-2 px-4 outline-none w-[100%] ${
                password && "border-[#000000]"
              }`}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**************"
            />
          </div>

          <button
            disabled={userName && password ? false : true}
            className="bg-[#000000] text-white mt-16 py-2 rounded-lg disabled:bg-[#AAAAAA] font-semibold cursor-pointer"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp