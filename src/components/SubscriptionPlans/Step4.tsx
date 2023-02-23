import React, { FC, useState } from "react";
import { StepProps } from "../../pages/SubscriptionPlans";
import { InputFields } from "../../types/types";

type adminDetailsProps = {
  id: number;
  username: string;
  email: string;
  confirm_email: string;
};

const Step4: FC<StepProps> = ({ increaseStep }) => {
  const [numberOfAdmins, setNumberOfAdmins] = useState<number>(1);
  const [adminsDetails, setAdminsDetails] = useState<adminDetailsProps[]>([
    { id: 0, username: "", email: "", confirm_email: "" },
  ]);
  const addNewAdmin = () => {
    setAdminsDetails([
      ...adminsDetails,
      {
        id: new Date().getTime(),
        username: "",
        email: "",
        confirm_email: "",
      },
    ]);
    setNumberOfAdmins(numberOfAdmins + 1);
  };
  const removeAdmin = (id: number) => {
    setAdminsDetails((prev) => prev.filter((admin) => admin.id !== id));
  };

  const updateAdminDetails = (id: number, key: string, value: string) => {
    console.log(adminsDetails);
    setAdminsDetails(() => {
      return adminsDetails.map((detail) => {
        if (detail.id === id) {
          return { ...detail, [key]: value };
        }
        return detail;
      });
    });
  };

  return (
    <>
      <header className="text-darkGray text-center">
        <h1 className="text-[27px] font-bold mb-2">Organization Preference</h1>
        <p className="text-[16px] font-[500]">
          We recommend that the super admin's priviledge should be split between
          at least two receipients.
        </p>
        <p className="mt-2">
          Super administrator password will be split amongst specified
          recipients
        </p>
      </header>
      <form className="mt-8 sm:px-3 mb-6 w-full max-w-[600px] mx-auto max-h-[500px] overflow-hidden overflow-y-scroll">
        {adminsDetails.map((singleAdmin, index: number) => {
          const inputFields: InputFields[] = [
            {
              placeholder: "Enter Username",
              name: "username",
              type: "text",
              value: singleAdmin.username,
              label: "Create Username",
            },
            {
              placeholder: "Enter your email",
              name: "email",
              type: "email",
              value: singleAdmin.email,
              label: "Email",
            },
            {
              placeholder: "Confirm your email",
              name: "confirm_email",
              type: "email",
              value: singleAdmin.confirm_email,
              label: "Create email",
            },
          ];
          return (
            <article key={index} className="mb-4">
              <header className="w-full flex items-center justify-between gap-x-4 mb-3">
                <p className=" font-bold">Super administrator {index + 1}</p>
                {adminsDetails.length > 1 && (
                  <button
                    className="py-3 px-4 bg-black text-white cursor-pointer rounded-md"
                    onClick={() => {
                      removeAdmin(singleAdmin.id);
                    }}
                  >
                    Remove
                  </button>
                )}
              </header>{" "}
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
                          updateAdminDetails(
                            singleAdmin.id,
                            field.name,
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </form>
      <div className="flex items-center justify-center w-full gap-4 sm:flex-row flex-col max-w-[600px] mx-auto">
        <button
          className="w-full border-2 rounded-md text-[16px] text-black border-black hover:text-white hover:bg-black cursor-pointer p-3 transition"
          onClick={addNewAdmin}
        >
          Add New Admin
        </button>
        <button
          className="w-full border-2 rounded-md text-[16px] border-black text-white bg-black cursor-pointer p-3"
          onClick={increaseStep}
        >
          Proceed
        </button>
      </div>
    </>
  );
};

export default Step4;
