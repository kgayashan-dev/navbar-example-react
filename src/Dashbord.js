import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

function dashbord() {
  return (
    <div className="w-60 flex flex-col shadow h-screen pt-24 py-3 items-center gap-4 bg-white">
      <div className="border-x-black text-white font-bold border-b-0 py-0 ">
        <h1 className="text-2xl text-gray-600"> Dashboard</h1>
      </div>
      <div className="text-gray-500 flex flex-col gap-2 w-full text-xl">
        <button className=" hover:bg-indigo-600 hover:text-white py-5  rounded-r-lg ">
          {" "}
          Add new Iem
        </button>
        <button className=" hover:bg-indigo-600 hover:text-white py-5 rounded-r-lg ">
          {" "}
          Add new Iem
        </button>
        <button className=" hover:bg-indigo-600 hover:text-white py-5 rounded-r-lg ">
          {" "}
          Add new Iem
        </button>
        <button className=" hover:bg-indigo-600 hover:text-white py-5 rounded-r-lg ">
          {" "}
          Add new Iem
        </button>
        <button className=" hover:bg-indigo-600 hover:text-white py-5 rounded-r-lg ">
          {" "}
          Add new Iem
        </button>
      </div>
      <div className="mt-48">
        <button className="hover:bg-indigo-600 hover:text-white py-5 px-5 text-2xl rounded-full ">
          {" "}
          <AiOutlineSetting />
        </button>
      </div>
    </div>
  );
}

export default dashbord;
