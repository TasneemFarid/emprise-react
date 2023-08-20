import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Search from "./Search";

const Banner = () => {
  return (
    <div
      style={{
        background: 'url("images/banner.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="pt-[250px] pb-[200px]"
    >
      <div className="max-w-container m-auto px-20 font-pop text-white">
        <div>
          <h4 className="text-para pb-3">- The Himalayan Mountain Ranges</h4>
          <h1 className="font-bold text-9xl">Nepal Country</h1>
        </div>
        <div className="flex justify-between text-para mt-12">
          <div className="w-3/12">
            <h4>-02° C Very Cold</h4>
            <div className="flex text-5xl mt-8">
              <BsArrowLeftCircle className="mr-3" />
              <BsArrowRightCircle />
            </div>
          </div>
          <div className="w-4/12 flex content-start">
            <div>
              <AiOutlineCreditCard className="bg-white p-2 rounded-full text-black text-5xl" />
            </div>
            <div className="pl-5">
              <p className="text-para">
                We Accept Payment Through All Cards & Banking
              </p>
              <a className="underline font-bold text-para mt-2" href="">
                Book Now!
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-white rounded-2xl mt-14 px-[72px] py-[32px]">
          <Search
            title="Location"
            className="border-r-2"
            description="Enter your destination"
            icon={<GrLocation />}
          />
          <Search
            title="Activity"
            className="border-r-2"
            description="Bungee jump"
            icon={<GrLocation />}
          />
          <Search title="Date" description="Set date" icon={<GrLocation />} />
          <div className="bg-primary p-10 rounded-2xl text-white text-4xl">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
