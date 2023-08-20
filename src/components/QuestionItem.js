import React from "react";


const QuestionItem = ({className, icon, title, text, email, phone}) => {
  return (
    <div className={`w-[648px] pt-[72px] pb-[56px] rounded-[12px] flex flex-col items-center ${className}`}>
      <div className="w-[104px] p-6 text-center bg-white rounded-full text-[56px]">
        {icon}
      </div>
      <div className="text-white font-pop mt-[56px] text-center">
        <h4 className="text-[32px] font-medium"> {title}</h4>
        <p className="pt-6 pb-12 px-20 text-para">{text}</p>
        <h5 className="text-para font-medium"> {email}</h5>
        <h5 className="text-para font-medium"> {phone}</h5>
      </div>
    </div>
  );
};

export default QuestionItem;
