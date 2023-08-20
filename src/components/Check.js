import React from "react";

const Check = (props) => {
  return (
    <div className="flex gap-1 pb-2 items-center">
      <div className="text-primary text-[18px]">{props.icon}</div>
      <h4 className="font-medium">{props.text}</h4>
    </div>
  );
};

export default Check;
