import React from "react";
import Button from "./Button";

const Experience = () => {
  return (
    <div className="bg-primary max-w-container m-auto rounded-[20px] relative font-pop pt-[72px] pb-[56px] overflow-hidden">
      <div className="absolute top-[-1850px] left-[-160px]">
        <img src="images/overlay-one.png" alt="" />
      </div>
      <div className="absolute top-[-145px] right-[-240px]">
        <img src="images/overlay-two.png" alt="" />
      </div>
      <div className="text-center mx-[262px]">
        <h2 className="text-[56px] text-white font-medium pb-[28px]">
          Tour the World from Your Couch with #ExperienceLive!
        </h2>
        <h4 className="text-[32px] text-white pb-[56px]">
          To kickstart your digital adventures with Entrada
        </h4>
        <Button
        text="Check All"
        className="py-5 px-10 text-primary bg-white text-para rounded-[40px] inline-block"
      />
      </div>

    </div>
  );
};

export default Experience;
