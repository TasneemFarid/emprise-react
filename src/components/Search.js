import React from "react";

const Search = ({className,description,icon,title}) => {
  return (
    <div className= {`w-1/4 font-pop ${className} `}>
      <div>
        <h4 className="inline-block font-semibold text-[28px] text-[#212529] border-b-4 border-[#ced11b]">
          {title}
        </h4>
      </div>
      <div className="flex gap-7 mt-4">
        <p className="text-[18px] text-[#99A3AD]">{description}</p>
        <p className="text-[24px] pr-10">{icon}</p>
      </div>
    </div>
  );
};

export default Search;
