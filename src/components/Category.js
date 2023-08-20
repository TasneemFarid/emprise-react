import React from "react";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { GiJumpAcross, GiHiking } from "react-icons/gi";
import CategoryItem from "./CategoryItem";
import SubTitle from "./SubTitle";

const Category = () => {
  return (
    <div className="pt-[140px]">
      <div className="max-w-container m-auto">
        <SubTitle
          title="Select Category"
          subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
        />
        <div className="flex justify-between">
          <CategoryItem
            icon={<FaUmbrellaBeach />}
            text="Beach Activity"
            subtext="196 Activities"
          />
          <CategoryItem
            icon={<GiJumpAcross />}
            text="Bungee Jump"
            subtext="196 Activities"
          />
          <CategoryItem
            icon={<FaCity />}
            text="City Tours"
            subtext="196 Activities"
          />
          <CategoryItem
            icon={<GiHiking />}
            text="Hiking trips"
            subtext="196 Activities"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
