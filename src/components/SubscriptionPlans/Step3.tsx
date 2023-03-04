import React, { ChangeEvent, FC, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { countryList } from "../../assets/static";
import { StepProps } from "../../pages/SubscriptionPlans";
import {
  InputFields,
  paymentDetailsProps,
} from "../../types/componentsProps.types";

const Step3: FC<StepProps> = ({ increaseStep }) => {
  const [details, setDetails] = useState<paymentDetailsProps>({
    schoolEmail: "",
    country: "Select",
    state: "",
    zipCode: "",
    city: "",
    address: "",
  });
  const [countrySelectorOpen, setCountrySelectorOpen] =
    useState<boolean>(false);

  const updatePaymentDetails = (key: string, value: string | number) => {
    setDetails(() => {
      return { ...details, [key as keyof paymentDetailsProps]: value };
    });
  };

  const toggleCountrySelector = () => {
    setCountrySelectorOpen((prev: boolean) => !prev);
  };
  const closeCountrySelector = () => {
    setCountrySelectorOpen(false);
  };

  const inputFields: InputFields[] = [
    {
      placeholder: "Enter Email",
      name: "schoolEmail",
      type: "email",
      value: details.schoolEmail,
      label: "School Email",
    },
    {
      placeholder: "Country",
      name: "country",
      type: "country-select",
      value: details.country,
      label: "Country",
    },
    {
      placeholder: "Enter State/Province",
      name: "state",
      type: "text",
      value: details.state,
      label: "State/Province",
    },
    {
      placeholder: "Enter zip code",
      name: "zipCode",
      type: "number",
      value: details.zipCode,
      label: "Zip Code",
    },
    {
      placeholder: "Enter City",
      name: "city",
      type: "text",
      value: details.city,
      label: "City",
    },
    {
      placeholder: "Enter Address",
      name: "address",
      type: "text",
      value: details.address,
      label: "Address Line",
    },
  ];

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    increaseStep();
  };

  return (
    <>
      <header className="text-darkGray text-center">
        <h1 className="text-[27px] font-bold mb-2">Payment</h1>
        <p className="text-[16px] font-[500]">
          Make payment for your chosen plan{" "}
          <span className="font-bold text-black">{"[Ultimate]"}</span>
        </p>
        <div className="my-4 w-full relative after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 after:bg-lightGray after:h-[2px] after:sm:w-[30%] after:w-[22%]  before:absolute before:top-[50%] before:-translate-y-[50%] before:left-0 before:bg-lightGray before:h-[2px] before:sm:w-[30%] before:w-[22%] font-bold max-w-[600px] mx-auto">
          School Verfication
        </div>
      </header>
      <form
        className="mt-8 mb-6 w-full max-w-[600px] mx-auto"
        onSubmit={handleSubmit}
      >
        {inputFields.map((input, index: number) => {
          return (
            <div key={index} className="w-full mb-4">
              {input.type !== "country-select" && (
                <>
                  <label
                    htmlFor={input.name}
                    className="text-[17px] font-bold mb-2 block cursor-pointer"
                  >
                    {input.label}
                  </label>
                  <input
                    className="input-field"
                    placeholder={input.placeholder}
                    id={input.name}
                    type={input.type}
                    name={input.name}
                    value={input.value}
                    onChange={(e) => {
                      updatePaymentDetails(e.target.name, e.target.value);
                    }}
                  />
                </>
              )}
              {input.type === "country-select" && (
                <>
                  <label
                    htmlFor={input.name}
                    className="text-[17px] font-bold mb-2 block cursor-pointer"
                  >
                    {input.label}
                  </label>
                  <div className={`w-full relative`}>
                    <header
                      className={`w-full cursor-pointer border-[1.5px] flex justify-between items-center gap-x-4 p-3 rounded-md bg-white ${
                        countrySelectorOpen && "border-black"
                      }`}
                      onClick={toggleCountrySelector}
                    >
                      <p>{input.value}</p>
                      <span>
                        {countrySelectorOpen ? (
                          <BiChevronUp />
                        ) : (
                          <BiChevronDown />
                        )}
                      </span>
                    </header>
                    {countrySelectorOpen && (
                      <div className="absolute top-[115%] shadow-md left-0 w-full max-h-[300px] overflow-hidden overflow-y-scroll rounded-md z-[5] bg-white">
                        {countryList.map((country, index) => {
                          return (
                            <p
                              key={index}
                              className="p-3 text-darkGray hover:text-black w-full cursor-pointer"
                              onClick={() => {
                                updatePaymentDetails("country", country);
                                closeCountrySelector();
                              }}
                            >
                              {country}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md font-[500] p-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Step3;
