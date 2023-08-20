import React from "react";
import { CiMail } from "react-icons/ci";

const Email = () => {
  return (
    <div>
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
    </div>
  );
};

export default Email;
