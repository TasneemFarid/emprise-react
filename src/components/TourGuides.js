import React from "react";
import TourGuidesItems from "./TourGuidesItems";
import SubTitle from "./SubTitle";

const TourGuides = () => {
  return (
    <div className="p-[140px]">
      <div className="max-w-container m-auto">
        <SubTitle
          title="Tour Guides"
          subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <TourGuidesItems />
      </div>
    </div>
  );
};

export default TourGuides;
