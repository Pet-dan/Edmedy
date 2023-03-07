import React, { FC, useState } from "react";
import { StepProps } from "../../pages/SubscriptionPlans";
import { adminDetailsProps } from "../../types/states.types";
import { InputFields } from "../../types/componentsProps.types";
import { BsArrowRight } from "react-icons/bs";

const Step2: FC<StepProps> = ({ increaseStep }) => {
  const [adminDetails, setAdminsDetails] = useState<adminDetailsProps>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const updateAdminDetails = (key: string, value: string) => {
    setAdminsDetails({ ...adminDetails, [key]: value });
  };

  const inputFields: InputFields[] = [
    {
      placeholder: "Enter First Name",
      name: "firstName",
      type: "text",
      value: adminDetails.firstName,
      label: "Create Firstname",
    },
    {
      placeholder: "Enter Last Name",
      name: "lastName",
      type: "text",
      value: adminDetails.lastName,
      label: "Create Last Name",
    },
    {
      placeholder: "Enter your email",
      name: "email",
      type: "email",
      value: adminDetails.email,
      label: "Email",
    },
    {
      placeholder: "Enter your password",
      name: "password",
      type: "password",
      value: adminDetails.password,
      label: "Password",
    },
    {
      placeholder: "Confirm your password",
      name: "confirm_password",
      type: "password",
      value: adminDetails.confirm_password,
      label: "Confirm password",
    },
  ];

  return (
    <>
      <header className="text-darkGray text-center">
        <h1 className="text-[27px] font-bold mb-2">
          Super Administrator Details
        </h1>
        <p className="text-[16px] font-[500]">
          Provide your details as the super admin of this organization
        </p>
      </header>
      <form className="mt-8 sm:px-3 mb-6 w-full max-w-[600px] mx-auto ">
        <div className="w-full p-6 rounded-md bg-white shadow-md">
          {inputFields.map((field, index: number) => {
            return (
              <div key={index} className="mb-4">
                <label
                  htmlFor={field.name}
                  className="text-[17px] font-bold mb-2 block cursor-pointer"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  className="input-field"
                  onChange={(e) => {
                    updateAdminDetails(field.name, e.target.value);
                  }}
                />
                {field.name === "confirm_password" &&
                  adminDetails?.confirm_password.length > 0 &&
                  adminDetails.password !== adminDetails.confirm_password && (
                    <p className="font-bold text-[15px] text-red-600 mt-1">
                      Passwords do not match
                    </p>
                  )}
              </div>
            );
          })}
        </div>
      </form>
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

export default Step2;
