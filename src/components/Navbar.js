import React from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="absolute top-8 w-full">
      <div className="max-w-container m-auto">
        <div className="flex font-pop text-white text-xl content-center">
          <div className="w-1/5">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="w-3/5">
            <ul className="flex gap-x-10 items-center">
              <li>
                <a href="">Destination</a>
              </li>
              <li>
                <a href="">Activities</a>
              </li>
              <li>
                <a href="">Specials</a>
              </li>
              <li>
                <a href="">
                  <BiSearch />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/5">
            <ul className="flex gap-x-10 justify-end items-center">
              <li>
                <a href="">Login</a>
              </li>
              <li className="bg-white py-3.5 px-3 rounded-[28px] text-black">
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
