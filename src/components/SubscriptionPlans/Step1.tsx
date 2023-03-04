import React, { FC, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { StepProps } from "../../pages/SubscriptionPlans";
import { plans } from "../../static/data";

const Step1: FC<StepProps> = ({ increaseStep }) => {
  const [paymentType, setPaymentType] = useState<"Month" | "Year">("Month");
  const togglePaymentType = () => {
    setPaymentType((paymentType) => {
      return paymentType === "Month" ? "Year" : "Month";
    });
  };
  return (
    <>
      <header className="text-darkGray text-center ">
        <h1 className="text-[27px] font-bold mb-2">Subscription Plan</h1>
        <p className="text-[18px] font-[500]">
          Select your organiztion's preferred plan
        </p>
        <div className="flex items-center gap-x-4 w-full justify-center font-bold mt-2">
          <p>Monthly</p>
          <span
            className={`switch ${paymentType === "Year" && "toggled"}`}
            onClick={togglePaymentType}
          />
          <p>Yearly</p>
        </div>
      </header>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8">
        {plans
          .find((item) => item.duration === paymentType)
          ?.plan.map((plan, index: number) => {
            return (
              <article
                key={index}
                className="min-w-fit p-6 bg-white flex-1 shadow-md rounded-md hover:shadow-lg"
              >
                <h1 className="text-[#333] text-[24px] font-[600]">
                  {plan.name}
                </h1>
                <p className="text-darkGray text-[16px] mt-1 max-w-[300px] mx-auto">
                  {plan.description}
                </p>
                <h2 className="text-[26px] mt-4 font-bold text-start">
                  ₦ {plan.price.toLocaleString()}{" "}
                  <sup className="text-[16px] text-darkGray mt-2 font-light">
                    / {paymentType}
                  </sup>
                </h2>
                <button className="mt-3 w-full font-[500] border-2 border-black rounded-md text-black cursor-pointer p-3 bg-white">
                  Get Started Now
                </button>
                <main className="w-full flex flex-col gap-y-3 mt-4">
                  {plan.features.map((feature, index: number) => {
                    return (
                      <div
                        className="w-full flex items-center gap-x-3"
                        key={index}
                      >
                        <span
                          className={`w-[25px] h-[25px] rounded-full flex justify-center items-center ${
                            feature.available
                              ? "bg-[#d1fae5] text-green-600 text-[20px]"
                              : "text-[14px] bg-lightGray text-[#666]"
                          }`}
                        >
                          {feature.available ? <BiCheck /> : <FaTimes />}
                        </span>
                        <p
                          className={`${
                            feature.available ? "text-[#333]" : "text-[#666]"
                          } text-[16px]`}
                        >
                          {feature.name}
                        </p>
                      </div>
                    );
                  })}
                </main>
              </article>
            );
          })}
      </div>
      <button
        className="max-w-full min-w-full sm:min-w-fit sm:max-w-fit ml-auto py-3 px-6 bg-black text-mainBg rounded-md block mt-6"
        onClick={increaseStep}
      >
        Proceed{" "}
        <span className="inline-block align-middle ml-2">
          <BsArrowRight />
        </span>
      </button>
    </>
  );
};

export default Step1;
