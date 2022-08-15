import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Nav = ({ countColor, setCountColor, setBgColor, bgColor }) => {
  const navigate = useNavigate();
  return (
    <div className="text-white  flex justify-between lg:mx-[32%] p-3 border-b-[0.5px] border-gray-400">
      <div  className="flex items-center hover:drop-shadow-md hover:text-gray-300">
        <h1 className="">
          <BsCheckCircleFill className="w-5 h-5" />
        </h1>
        <a href="/" className="ml-2 text-xl font-bold ">
          {" "}
          Pomofocus
        </a>
      </div>
      <div className="flex ml-5">
        <button
          className={`${countColor} mr-2 rounded flex items-center p-2 hover:drop-shadow-md`}
        >
          <VscGraph className="w-5 h-5" />
          <span className="hidden md:block ml-2 ">Report</span>
        </button>
        <button
          className={`${countColor} mr-2 rounded flex items-center p-2 hover:drop-shadow-md`}
        >
          <FiSettings className="w-5 h-5" />
          <span className="hidden md:block ml-2">Setting</span>
        </button>
        <button
          onClick={() => navigate("login")}
          className={`${countColor} mr-2 rounded flex items-center p-2 hover:drop-shadow-md`}
        >
          <BiUserCircle className="w-5 h-5" />
          <span className="hidden md:block ml-2">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
