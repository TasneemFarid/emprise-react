import React from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

const SubTitle = ({title, subtitle, className, classNameOne}) => {
  return (
    <div className={`flex justify-between font-pop mb-16 ${className}`}>
      <div>
        <h3 className="text-subHead text-subHeadText font-bold pb-4">
          {title}
        </h3>
        <p className="text-para text-subPara">
          {subtitle}
        </p>
      </div>
      <div className={`flex ${classNameOne}`}>
        <HiArrowCircleLeft className="mr-1 text-7xl text-subPara hover:text-primary" />
        <HiArrowCircleRight className="text-7xl text-subPara hover:text-primary" />
      </div>
    </div>
  );
};

export default SubTitle;
