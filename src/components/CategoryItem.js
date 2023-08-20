import React from "react";

const CategoryItem = (props) => {
  return (
    <div>
      <div className="w-[375px] p-8 border border-[#DCE5EB] rounded-lg font-pop">
        <div className="flex justify-end">
          <h4 className="bg-[#FEF2DE] text-yellow font-medium text-sm py-1.5 px-4 rounded-2xl inline-block">
            4.9
          </h4>
        </div>
        <div className="mt-12">
          <h4 className="text-6xl text-primary">{props.icon}</h4>
          <h4 className="py-4 font-medium text-para text-subHeadText">
            {props.text}
          </h4>
          <p className="text-base text-lightText">{props.subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
