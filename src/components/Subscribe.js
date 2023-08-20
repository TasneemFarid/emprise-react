import React from "react";
import { CiMail } from "react-icons/ci";

const Subscribe = () => {
  return (
    <div className="pt-[136px] font-pop">
      <div className="max-w-container m-auto">
        <div className="flex gap-8">
          <div className="flex gap-8 justify-between">
            <div className="w-[376px] h-[624px] rounded-[8px]">
              <img src="images/subscribe-one.png" alt="" />
            </div>
            <div>
              <div className="w-[376px] h-[296px] mb-8 rounded-[8px]">
                <img src="images/subscribe-two.png" alt="" />
              </div>
              <div className="w-[376px] h-[296px] rounded-[8px]">
                <img src="images/subscribe-three.png" alt="" />
              </div>
            </div>
          </div>
          <div className="text-left mt-8">
            <div className="pr-[300px]">
              <h4 className="text-para text-primary">Subscribe For Offers</h4>
              <h2 className="text-[48px] font-semibold pt-2 pb-6">
                Adventures Calling You Guys!
              </h2>
              <p className="text-para">
                The Brilliant reasons Entrada should be your one-stop-shop!
              </p>
            </div>
            <div className="flex items-center mt-[72px] mb-[48px] relative">
              <CiMail className="absolute left-8 text-[18px] text-lightText" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-[648px] py-[30px] pl-[70px] shadow-xl text-lightText text-[18px]"
              />
              <button className="absolute top- right-0 bg-primary text-para font-pop text-white py-[25px] px-[32px] outline-none">
                Send Now!
              </button>
            </div>
            <p className="font-pop text-subPara text-sm">
              Expect a reply in 2-3 working days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
