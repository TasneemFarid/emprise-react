import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiEarthAfricaEurope } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="pt-[136px]">
      <div className="max-w-container m-auto">
        <div className="flex justify-between border-b-2 border-[#E9ECEF] pb-10">
          <div className="flex gap-4 items-center">
            <AiOutlinePlusCircle className="h-[33px] w-[33px]" />
            <h4 className="font-pop text-para font-bold text-subHeadText">
              QUICK LINKS
            </h4>
            <h4 className="font-pop text-para text-subPara pl-12">
              Explore more categories
            </h4>
          </div>
          <div className="flex gap-5">
            <h4 className="font-pop text-para text-[#212529]">
              0123-456-324-54
            </h4>
            <h4 className="font-pop text-para text-[#212529]">|</h4>
            <h4 className="font-pop text-para text-[#212529]">
              hello@entrada.com
            </h4>
          </div>
        </div>
        <div className="flex justify-between text-left mt-8 border-b-2 border-[#E9ECEF]">
          <div className="w-[470px]">
            <h4 className="font-pop text-para text-primary">Subscribe For Offers</h4>
            <h2 className="font-pop text-[48px] font-semibold pt-2 pb-6">
              Adventures Calling You Guys!
            </h2>
          </div>
          <div className="flex gap-7">
            <div className="bg-primary rounded-full text-white text-[56px] h-[80px] w-[80px] flex justify-center items-center ">
              <GiEarthAfricaEurope />
            </div>
            <div>
              <h5 className="font-pop text-para text-subHeadText">
                Our Offices
              </h5>
              <h5 className="font-pop text-para text-subHeadText font-medium pt-2 pb-7">
                Nepal, USA, India
              </h5>
              <div className="font-pop text-subHead text-subHeadText font-medium">
                <HiOutlineArrowNarrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[120px]">
          <div className="flex gap-[169px]">
            <div>
              <h4 className="font-pop text-para text-subHeadText font-medium pt-8 pb-4">
                Services
              </h4>
              <ul className="font-pop text-base text-subPara">
                <li className="leading-10">Budget Tours</li>
                <li className="leading-10">Expert Insight</li>
                <li className="leading-10">Independent</li>
                <li className="leading-10">Luxury Tours</li>
                <li className="leading-10">Safety Tips</li>
                <li className="leading-10">Tips n Tricks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-pop text-para text-subHeadText font-medium pt-8 pb-4">
                Adventures
              </h4>
              <ul className="font-pop text-base text-subPara">
                <li className="leading-10">Budget Tours</li>
                <li className="leading-10">Expert Insight</li>
                <li className="leading-10">Independent</li>
                <li className="leading-10">Luxury Tours</li>
                <li className="leading-10">Safety Tips</li>
                <li className="leading-10">Tips n Tricks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-pop text-para text-subHeadText font-medium pt-8 pb-4">
                Country
              </h4>
              <ul className="font-pop text-base text-subPara">
                <li className="leading-10">Budget Tours</li>
                <li className="leading-10">Expert Insight</li>
                <li className="leading-10">Independent</li>
                <li className="leading-10">Luxury Tours</li>
                <li className="leading-10">Safety Tips</li>
                <li className="leading-10">Tips n Tricks</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="mt-8">
            <h4 className="font-pop text-para text-subHeadText">
              Get In Touch
            </h4>
            <div className="flex gap-5 items-center mt-4 mb-10">
              <h3 className="font-pop text-subHead text-subHeadText font-medium">
                Let’s Talk
              </h3>
              <div className="text-subHead">
                <HiOutlineArrowNarrowRight />
              </div>
            </div>

            <div className="flex items-center relative">
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
        </div>
        <div className="flex justify-between pb-6 border-b-2 border-[#E9ECEF]">
          <h5 className="font-pop text-para">Privacy Policy</h5>
          <div className="flex gap-5 font-pop text-para">
            <h5>Linkedin</h5>
            <h5>/</h5>
            <h5>Facebook</h5>
            <h5>/</h5>
            <h5>Instagram</h5>
          </div>
        </div>
        <div className="flex justify-between py-6">
          <h5 className="font-pop text-sm">2016-2021 © Emprise</h5>
          <div className="">
            <img src="images/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
