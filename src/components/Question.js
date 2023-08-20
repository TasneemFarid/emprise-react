import React from "react";
import SubTitle from "./SubTitle";
import QuestionItem from "./QuestionItem";
import { CiHeadphones, CiCircleQuestion } from "react-icons/ci";

const Question = () => {
  return (
    <div>
      <div className="max-w-container m-auto">
        <div className="flex justify-center">
          <SubTitle
            className="text-center"
            title="Still have a question?"
            subtitle="The Brilliant reasons Entrada should be your one-stop-shop!"
            classNameOne="hidden"
          />
        </div>
        <div className="flex justify-center gap-8">
          <QuestionItem
            className="bg-primary  text-primary"
            icon={<CiHeadphones />}
            title="For Sales"
            text="The Brilliant reasons Entrada be
your one-stop-shop!"
            email="sales@entrada.com"
            phone="+977(985) 456-32-12"
          />
          <QuestionItem
            className="bg-subHeadText text-subHeadText"
            icon={<CiCircleQuestion />}
            title="Help & Support"
            text="The Brilliant reasons Entrada be
your one-stop-shop!"
            email="help@entrada.com"
            phone="+977(985) 456-32-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
