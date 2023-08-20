import React from "react";
import Button from "./Button";
import { BsShareFill } from "react-icons/bs";

const BestSellerItems = () => {
  return (
    <div className="w-[512px] font-pop">
      <div className="relative group">
        <img src="images/bestseller-one.png" alt="" />
        <div className="absolute top-0 left-0 p-8 w-full bg-black bg-opacity-10 rounded-[32px] opacity-0 group-hover:opacity-100 duration-300">
          <h4 className="bg-[#FEF2DE] text-[#EE5879] font-medium text-[18px] py-1.5 px-4 rounded-2xl inline-block float-right">
            30%
          </h4>
          <div className="mt-[180px]">
            <h4 className="text-[18px] text-white">10 Days | 09 Night</h4>
            <div className="flex justify-between mt-6">
              <h3 className="text-3xl text-white font-bold border-b-4 border-white leading-[48px] -tracking-[0.48px]">
                $895.00
              </h3>
              <div className="flex gap-4">
                <a href="" className="py-4 px-[19px] bg-white rounded-full">
                  <BsShareFill />
                </a>
                <Button
                  text="Explore"
                  className="py-2 px-9 bg-primary text-white text-[18px] align-middle rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-12">
        <h3 className="text-para text-subHeadText font-semibold pt-8 pb-4">
          Train Tour Skyline
        </h3>
        <p className="text-base text-lightText">
          Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking
        </p>
      </div>
    </div>
  );
};

export default BestSellerItems;
