import { BsCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  document.title = "Login";
  return (
    <div className="flex justify-center text-white flex-raw bg-red-500 w-full h-screen">
      <div>
        <div
          onClick={() => navigate("/")}
          className="font-bold flex mt-[100px] cursor-pointer"
        >
          <BsCheckCircleFill className="w-[45px] h-[45px]" />
          <h1 className="ml-2 text-5xl"> Pomofocus</h1>
        </div>
        <div className=" mt-5 text-xl">
          <p className=" flex justify-center">Login</p>
        </div>
      </div>
      <div className="absolute mt-60 ">
        <div className="h-[420px] w-[360px] rounded-xl bg-white text-gray-500 flex justify-center flex-col ">
          <div className="border-b-2 h-[80px] w-80 flex justify-center items-center mt-[-40px] ml-[20px] ">
            <button className="rounded  border-b-4 border-[1px] h-10 w-80  flex justify-center items-center focus:outline-0">
              {" "}
              <FcGoogle className="mr-2" />
              Login with Google
            </button>
            <div className="w-10 h-10 bg-white absolute mt-20 flex justify-center items-center text-gray-300">
              {" "}
              <p>or</p>
            </div>
          </div>
          <div className="flex justify-center flex-col mt-10 w-80 ml-[20px]">
            <p className="text-sm text-gray-400">EMAIL</p>
            <input
              type="email"
              placeholder="  example@mail.com"
              className="bg-gray-100 h-10 rounded mt-2 focus:outline-0"
            />
            <p className="text-sm text-gray-400 mt-4">PASSWORD</p>

            <input
              type="password"
              className="bg-gray-100 h-10 rounded mt-2 focus:outline-0    "
            />
            <button className="rounded  border-[1px] h-10 w-80 bg-gray-800 text-white text-sm mt-6 flex justify-center items-center ">
              Log in with Email
            </button>
            <a href="/" className="underline mt-6 ml-[100px]">
              Forgot Password{" "}
            </a>
          </div>
        </div>
      </div>
        <div className="bg-red-500 absolute mt-[670px]">
          <div className="w-screen mt-4 flex justify-center text-white mb-6">
            <div>
              <h1>Do not have an account?</h1>
              <a href="/" className="ml-8 underline ">Create account</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
