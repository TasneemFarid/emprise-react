import React from "react";

const TopDestinationItem = ({className, img, title, subtitle, discount}) => {
  return (
    <div className={`relative font-pop rounded-[32px] ${className}`}>
      <img src={img} alt="" />
      <h4 className="absolute top-8 left-8 bg-[#FEF2DE] text-[#EE5879] font-medium text-[18px] py-1.5 px-4 rounded-2xl inline-block">
        {discount}
      </h4>
      <div className="absolute bottom-8 left-8">
        <h4 className="text-para text-white font-medium ">{title}</h4>
        <h4 className="text-base text-white">{subtitle}</h4>
      </div>
    </div>
  );
};

export default TopDestinationItem;
