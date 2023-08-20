import React from "react";
import SubTitle from "./SubTitle";
import TrendingCards from "./TrendingCards";

const Trend = () => {
  return (
    <div className="pt-[140px]">
      <div className="max-w-container m-auto">
        <SubTitle
          title="Trending 2021"
          subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <div className="flex justify-between">
          <TrendingCards
            img="images/trend-one.png"
            text="Mountain Hiking Tour"
            subtext="Hiking Tour | Stoke on Trent"
          />
          <TrendingCards
            img="images/trend-two.png"
            text="Train Tour Skyline"
            subtext="Hiking Tour | Stoke on Trent"
          />
          <TrendingCards
            img="images/trend-three.png"
            text="Forest Wild Life"
            subtext="Hiking Tour | Stoke on Trent"
          />
        </div>
      </div>
    </div>
  );
};

export default Trend;
