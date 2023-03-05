import React, { FC, useState } from "react";
import { BiCheck, BiCheckCircle, BiLoader } from "react-icons/bi";
import ModalOverlay from "../UI/ModalOverlay";
import { StepProps } from "../../pages/SubscriptionPlans";
interface verificationModalProps extends StepProps {
  closeModal: () => void;
}

type inputValuesProps = { id: number; value: string };

const getInitialArrayItem = (): inputValuesProps[] => {
  return Array(5)
    .fill(null)
    .map((_, index: number) => ({ id: index, value: "" }));
};

const VerificationModal: FC<verificationModalProps> = ({
  increaseStep,
  closeModal,
}) => {
  const [inputValues, setInputValues] = useState<inputValuesProps[]>(
    getInitialArrayItem()
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [focused, setFocused] = useState<number>(0);

  const updateInputValues = (id: number, value: string) => {
    if (value.length === 1 && id < inputValues.length - 1) {
      setFocused(id + 1);
    }
    setInputValues(
      inputValues.map((input) => {
        if (input.id === id) {
          input.value = value;
        }
        return input;
      })
    );
  };

  return (
    <ModalOverlay modalWidth={700}>
      <header className="mb-3">
        {" "}
        <h1
          className={`text-[24px] font-bold text-center ${
            error ? "text-red-600" : "text-blackText"
          }`}
        >
          {!loading && !error && "Verify Account"}
          {loading && !error && "Verifying your account"}
          {!loading && error && "Account not verified"}
        </h1>
        <p className="text-center leading-[1.2] mt-2 text-darkerGray font-bold">
          {!loading && !error && (
            <>
              An email verification OTP has been sent to your email address{" "}
              <br /> Input the OTP to verify your account
            </>
          )}
        </p>
      </header>
      <div className="w-full flex items-center justify-center gap-4 flex-wrap mt-6">
        {inputValues.map((input, index: number) => {
          return (
            <input
              type={"text"}
              className={`w-[50px] h-[50px] rounded-md ${
                focused === input.id && "border-blackText"
              } border-2 outline-none p-2 text-[20px] text-center`}
              onFocus={() => {
                setFocused(input.id);
              }}
              onChange={(e) => {
                updateInputValues(input.id, e.target.value);
              }}
              value={input.value}
              autoFocus={focused === input.id}
              key={index}
              maxLength={1}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center flex-wrap w-full mt-6 gap-4">
        <button className={styles.button}>
          {loading ? "Verifying" : "Verify Account"}
          <span className={`text-[20px] ${loading && "animate-spin"}`}>
            {loading ? <BiLoader /> : <BiCheckCircle />}
          </span>
        </button>
        <button className={styles.button}>Resend OTP</button>
      </div>
    </ModalOverlay>
  );
};

const styles = {
  button:
    "block w-full min-w-[150px] max-w-[170px] text-center  bg-black text-white rounded-md p-3 flex items-center gap-x-3 justify-center",
};

export default VerificationModal;
