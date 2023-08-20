import React from "react";

const TourGuidesItems = () => {
  return (
    <div className="flex gap-8 font-pop">
      <div className="relative w-[512px] h-[670px] rounded-[20px]">
        <img src="images/tour-guides-one.png" alt="" />
        <div className="absolute bottom-0 left-0 h-[72px] w-[72px] bg-white text-para rounded-tr-[20px] py-[18px] px-[25px]">
          <h4>01</h4>
        </div>
      </div>
      <div className="m-10">
        <h4 className="text-primary text-para pb-4">Adventure Guru</h4>
        <h2 className="text-subHeadText text-subHead font-medium">
          Martina <br />
          James Junior
        </h2>
        <div className="flex mt-24">
          <div className="w-[342px] mr-16">
            <h4 className="text-para pb-4">About</h4>
            <p className="text-base text-lightText">
              Check Out Daily Deals and Promotion on hotels. Easy & Fast
              Booking.
            </p>
          </div>
          <div className="w-[342px]">
            <h4 className="text-para pb-4">Journey</h4>
            <p className="text-base text-lightText">
              Check Out Daily Deals and Promotion on hotels. Easy & Fast
              Booking.
            </p>
          </div>
        </div>
        <div className="mt-[172px]">
          <ul className="flex gap-8 font-pop text-[18px]">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourGuidesItems;
