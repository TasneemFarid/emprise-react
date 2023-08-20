import React from "react";
import SubTitle from "./SubTitle";
import TopDestinationItem from "./TopDestinationItem";

const TopDestination = () => {
  return (
    <div className="pt-[140px]">
      <div className="max-w-container m-auto">
        <SubTitle
          title="Top Destinations"
          subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <div className="flex justify-between">
          <div>
            <TopDestinationItem
            className="w-[375px] h-[335px] overflow-hidden"
              img="images/top-destination-one.png"
              title="Vietnam"
              subtitle="Waterfall"
              discount="30%"
            />
            <TopDestinationItem
              img="images/top-destination-two.png"
              title="Old Rain"
              subtitle="Waterfall"
              discount="30%"
              className="w-[375px] h-[335px] overflow-hidden mt-8"
            />
          </div>
          <div>
            <TopDestinationItem
              img="images/top-destination-three.png"
              title="Old Rain"
              subtitle="Waterfall"
              discount="30%"
              className="w-[512px] h-[702px] overflow-hidden"
            />
          </div>
          <div>
            <TopDestinationItem
              img="images/top-destination-four.png"
              title="Old Rain"
              subtitle="Waterfall"
              discount="30%"
              className="w-[648px] h-[335px] overflow-hidden"
            />
            <div className="flex justify-between mt-8">
              <TopDestinationItem
                img="images/top-destination-five.png"
                title="Old Rain"
                subtitle="Waterfall"
                discount="30%"
                className="w-[240px] h-[335px] overflow-hidden"
              />
              <TopDestinationItem
                img="images/top-destination-six.png"
                title="Old Rain"
                subtitle="Waterfall"
                discount="30%"
                className="w-[376px] h-[335px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
