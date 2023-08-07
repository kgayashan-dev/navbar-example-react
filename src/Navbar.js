import React from "react";
import { useState, useRef } from "react";
import { BsChatDots } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import Bing from "../src/BingWallpaper.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menus = ["Profile", "Your Apps", "Sign Out"];

  const menuRef = useRef();
  const imgRef  = useRef();


  window.addEventListener('click', (e)=>{
      if(e.target !== menuRef.current && e.target !== imgRef.current ) {
          setOpen(false);
      }
  })
  return (
    <nav className="w-full bg-white h-20 flex fixed justify-between items-center px-4 shadow-lg  ">
      <h1 className="text-2xl font-bold pl-14">Logo</h1>
      <ul className="flex items-center">
      
        <li className="px-4">Home</li>
       
        <li className="px-4">Services</li>
        <li className="px-4">Banking</li>
        <li className="px-4 text-xl">
          <BsChatDots className="" />
        </li>
        <li className="px-4 text-xl">
          <BsBell />
        </li>

        <li className="px-4 relative">
          <img
          ref={imgRef}
            src={Bing}
            alt="avatar"
            className="w-20 rounded-full hover:shadow-lg "
            onClick={()=> setOpen(!open)}
          />

          { open && 


            <div ref={menuRef} className="bg-white    shadow-lg flex flex-col items-center absolute -left-7 rounded-lg">
              <ul className="py-4">
                {menus.map((menu) => (
                  <li
                    key={menu}
                    className="px-6 py-2 cursor-pointer  hover:bg-gray-200 hover:text-gray focus:ring-blue-300 "
                  >
                    {" "}
                    {menu}{" "}
                  </li>
                ))}
              </ul>
            </div>
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
