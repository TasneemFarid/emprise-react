import React from "react";
import SubTitle from "./SubTitle";
import BestSellerItems from "./BestSellerItems";
import Button from "./Button";

const BestSeller = () => {
  return (
    <div className="pt-[140px]">
      <div className="max-w-container m-auto">
        <div className="flex justify-between">
          <SubTitle
            classNameOne="hidden"
            title="Best Seller"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
          <Button
            text="Check All"
            className="self-start py-5 px-10 bg-primary font-pop text-white text-para rounded-[40px]"
          />
        </div>
        <div className="flex justify-between">
          <BestSellerItems />
          <BestSellerItems />
          <BestSellerItems />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
