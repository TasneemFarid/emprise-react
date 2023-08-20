import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import Check from "./Check";

const TrendingCards = (props) => {
  return (
    <div className="w-[512px] p-4 border border-[#DCE5EB] rounded-[20px] font-pop">
      <div>
        <img src={props.img} />
      </div>
      <div className="flex justify-between mt-8 p-4">
        <div>
          <h3 className="text-para text-subHeadText font-semibold pb-2">
            {props.text}
          </h3>
          <p className="text-base text-lightText">{props.subtext}</p>
        </div>
        <AiOutlineHeart className="text-2xl mt-1 text-subPara" />
      </div>
      <div className="flex justify-between p-4">
        <div>
          <h4 className="text-[14px] text-subPara">from</h4>
          <h3 className="text-3xl text-subHeadText font-semibold leading-[48px]">
            $895.00
          </h3>
          <h4 className="text-[14px] text-subPara">*Price varies</h4>
        </div>
        <div className="text-right flex flex-col justify-center">
          <h4 className="flex text-yellow">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </h4>
          <h4 className="text-[14px] text-subPara pt-2">4.7 (108)</h4>
        </div>
      </div>
      <div className="mt-6 text-base text-subPara p-4">
        <Check icon={<BiTime />} text="7 Days" />
        <div className="flex gap-6">
          <Check icon={<BsCheck />} text="Free Cancellation" />
          <Check icon={<BsCheck />} text="New on Entrada" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
