import React, { useEffect, useState } from "react";
import { RiMessageFill } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import NavBar from "../components/NavBar";
import Step1 from "../components/SubscriptionPlans/Step1";
import Step2 from "../components/SubscriptionPlans/Step2";
import Step3 from "../components/SubscriptionPlans/Step3";
import Step4 from "../components/SubscriptionPlans/Step4";
import Step5 from "../components/SubscriptionPlans/Step5";
import VerificationModal from "../components/SubscriptionPlans/VerificationModal";

export interface StepProps {
  increaseStep: () => void;
  openModal?: () => void;
}

const SubscriptionPlans = () => {
  const [step, setStep] = useState<number>(0);
  const [verificationModalOpened, setVerificationModalOpened] =
    useState<boolean>(false);

  const openModal = () => {
    setVerificationModalOpened(true);
  };
  const closeModal = () => {
    setVerificationModalOpened(false);
  };

  const increaseStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    document.title = "Edmedy | Subscription Plans";
  }, []);

  return (
    <section className="w-full min-h-screen bg-mainBg">
      {verificationModalOpened && (
        <VerificationModal
          increaseStep={increaseStep}
          closeModal={closeModal}
        />
      )}
      <div className="max-w-[1300px] mx-auto">
        <NavBar />

        <div className="flex items-center gap-x-4 justify-center w-full mt-14 py-[1rem] md:px-[3rem] sm:px-[2rem] px-[1rem]">
          {Array(5)
            .fill(null)
            .map((steps, index: number) => {
              return (
                <span
                  className={`w-[50px]  h-[6px] rounded-[20px] cursor-pointer ${
                    index === step ? "bg-black" : "bg-lightGray"
                  }`}
                  key={index}
                  onClick={() => {
                    index < step && setStep(index);
                  }}
                />
              );
            })}
        </div>

        <div className="mt-14 w-full min-h-[400px] sm:p-8 py-8 px-4 rounded-md bg-[rgba(235,232,232,0.2)] shadow-md border border-[rgba(175,175,175,0.6)]">
          {step === 0 && <Step1 increaseStep={increaseStep} />}
          {step === 1 && (
            <Step2 increaseStep={increaseStep} openModal={openModal} />
          )}
          {step === 2 && <Step3 increaseStep={increaseStep} />}
          {step === 3 && <Step4 increaseStep={increaseStep} />}
          {step === 4 && <Step5 increaseStep={increaseStep} />}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
