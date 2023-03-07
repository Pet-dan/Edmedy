import React, { ChangeEvent, FC, useState } from "react";
import { InputFields, StaffFormProps } from "../../types/componentsProps.types";
import { countryList } from "../../assets/static";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateRoleDetails,
  updateStaffDetails,
} from "../../store/slices/post/addStaffMemberSlice";
import SelectContainer from "../UI/SelectContainer";
import { OutlineButton } from "../UI/Buttons";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";

const personalInformation: InputFields[] = [
  {
    name: "firstname",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastname",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "dob",
    placeholder: "Date of birth (DD-MM-YYYY)",
    type: "text",
  },
  {
    name: "gender",
    placeholder: "Gender",
    type: "select",
    optionsList: ["Male", "Female"],
  },
];

const contactInfo: InputFields[] = [
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
  },
  {
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "number",
  },
  {
    name: "country",
    placeholder: "Country",
    type: "select",
    optionsList: countryList,
  },
  {
    name: "state",
    placeholder: "State",
    type: "text",
  },
  {
    name: "city",
    placeholder: "City",
    type: "text",
  },
  {
    name: "address",
    placeholder: "Address",
    type: "text",
  },
  {
    name: "passport",
    placeholder: "Upload Passport",
    type: "file",
  },
];

const bankInfo: InputFields[] = [
  {
    name: "bankName",
    placeholder: "Bank Name",
    type: "text",
  },
  {
    name: "accountName",
    placeholder: "Account Name",
    type: "text",
  },
  {
    name: "accountNumber",
    placeholder: "Account Number",
    type: "number",
  },
];

export const roles: InputFields[] = [
  {
    name: "position",
    placeholder: "Position E.g Teacher, Bus Driver",
    type: "text",
  },
  {
    name: "salary",
    placeholder: "Salary",
    type: "number",
  },
  {
    name: "signature",
    placeholder: "Upload Signature",
    type: "file",
  },
];

const StaffForm: FC<StaffFormProps> = ({
  firstStepTitle,
  secondStepTitle,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const addStaffSlice = useSelector((state: RootState) => state.addStaff);
  const dispatch = useDispatch();
  const editStaffDetails = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateStaffDetails({ key: e.target.name, value: e.target.value }));
  };
  const getStaffDetails = (name: string) => {
    return addStaffSlice[name as keyof typeof addStaffSlice] as string;
  };
  const editStaffRole = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRoleDetails({ key: e.target.name, value: e.target.value }));
  };
  const getStaffRole = (name: string) => {
    return addStaffSlice.role[
      name as keyof typeof addStaffSlice.role
    ] as string;
  };
  const updateGender = (value: string) => {
    dispatch(updateStaffDetails({ key: "gender", value }));
  };
  const updateCountry = (value: string) => {
    dispatch(updateStaffDetails({ key: "country", value }));
  };

  const updatePosition = (value: string) => {
    dispatch(updateRoleDetails({ key: "position", value }));
  };

  const updateSelectOptionsInRoles = {
    position: updatePosition,
  };

  return (
    <section className="w-full mt-8">
      <div className="w-full flex justify-between items-center gap-4 flex-wrap">
        <div>
          <h1 className="font-bold text-[20px] mb-1 text-blackText">
            {currentStep === 1 ? firstStepTitle : secondStepTitle}
          </h1>
          <p>Kindly provide the required details</p>
        </div>

        <div className="flex items-center flex-nowrap">
          <div
            className={
              styles.step1Container +
              ` ${
                currentStep === 2 ? "after:bg-blackText" : "after:bg-lightGray"
              }`
            }
          >
            <span className={styles.step + " border-blackText"}>1</span>
            <p className="max-w-[50px] text-[14px] text-center leading-[1.1]">
              Profile Set-up
            </p>
          </div>
          <div className="ml-[80px]">
            <span
              className={
                styles.step +
                ` ${
                  currentStep === 2
                    ? "border-blackText"
                    : "bg-lightGray text-gray-600"
                }`
              }
            >
              2
            </span>
            <p className="max-w-[50px] text-[14px] text-center leading-[1.1]">
              Role Details
            </p>
          </div>
        </div>
      </div>

      <form className="w-full border-2 rounded-md pt-8 pb-4 mt-8">
        {currentStep === 1 && (
          <div className="w-full max-w-[800px] mx-auto">
            <article className="px-6">
              <h1 className={styles.formSectionTitle}>Personal Information</h1>

              <div className={styles.gridContainer}>
                {personalInformation.map((input, index: number) => {
                  return !input.optionsList ? (
                    <Input
                      value={getStaffDetails(input.name)}
                      onChange={editStaffDetails}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                    />
                  ) : (
                    <SelectContainer
                      key={index}
                      list={input.optionsList}
                      currentItem={
                        addStaffSlice[
                          input.name as keyof typeof addStaffSlice
                        ] as string
                      }
                      fitContent={true}
                      updateItem={updateGender}
                    />
                  );
                })}
              </div>
            </article>
            <article className="px-6">
              <h1 className={styles.formSectionTitle}>Contact Information</h1>

              <div className={styles.gridContainer}>
                {contactInfo.map((input, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      {!input.optionsList && input.type !== "file" && (
                        <Input
                          type={input.type}
                          value={getStaffDetails(input.name)}
                          onChange={editStaffDetails}
                          placeholder={input.placeholder}
                          name={input.name}
                        />
                      )}
                      {input.optionsList && (
                        <SelectContainer
                          key={index}
                          list={countryList}
                          currentItem={getStaffDetails(input.name)}
                          fitContent={false}
                          updateItem={updateCountry}
                        />
                      )}
                      {input.type === "file" && (
                        <>
                          <label htmlFor="file" className="input-field">
                            {addStaffSlice?.passport
                              ? (addStaffSlice.passport as File)?.name?.length >
                                30
                                ? (addStaffSlice.passport as File)?.name?.slice(
                                    0,
                                    30
                                  ) + "..."
                                : (addStaffSlice.passport as File)?.name
                              : "Upload Passport"}
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            id="file"
                            onChange={(e) => {
                              const file = e?.target?.files?.[0];
                              console.log(file?.type.includes("image"));
                              if (file?.type.includes("image")) {
                                dispatch(
                                  updateStaffDetails({
                                    key: input.name,
                                    value: file,
                                  })
                                );
                              }
                            }}
                          />
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </article>

            <article className="px-6">
              <h1 className={styles.formSectionTitle}>Bank Information</h1>

              <div className={styles.gridContainer}>
                {bankInfo.map((input, index: number) => {
                  return (
                    <Input
                      key={index}
                      value={getStaffDetails(input.name)}
                      onChange={editStaffDetails}
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                    />
                  );
                })}
              </div>
            </article>
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full max-w-[800px] mx-auto">
            <article className="px-6">
              <div className={styles.gridContainer}>
                {roles.map((input, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      {!input.optionsList && input.type !== "file" && (
                        <Input
                          type={input.type}
                          value={getStaffRole(input.name)}
                          name={input.name}
                          onChange={editStaffRole}
                          placeholder={input.placeholder}
                        />
                      )}
                      {input.optionsList && (
                        <SelectContainer
                          key={index}
                          list={input.optionsList}
                          currentItem={getStaffRole(input.name)}
                          fitContent={false}
                          updateItem={
                            updateSelectOptionsInRoles[
                              input.name as keyof typeof updateSelectOptionsInRoles
                            ]
                          }
                        />
                      )}
                      {input.type === "file" && (
                        <>
                          <label htmlFor="file" className="input-field">
                            {addStaffSlice?.role?.signature
                              ? (addStaffSlice.role?.signature as File)?.name
                                  ?.length > 30
                                ? (
                                    addStaffSlice.role?.signature as File
                                  )?.name?.slice(0, 30) + "..."
                                : (addStaffSlice.role?.signature as File)?.name
                              : "Upload Passport"}
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            id="file"
                            onChange={(e) => {
                              const file = e?.target?.files?.[0];
                              console.log(file?.type.includes("image"));
                              if (file?.type.includes("image")) {
                                dispatch(
                                  updateRoleDetails({
                                    key: input.name,
                                    value: file,
                                  })
                                );
                              }
                            }}
                          />
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </article>
          </div>
        )}

        <div
          className={`w-full flex items-center ${
            currentStep === 1 ? "sm:justify-end" : "sm:justify-between"
          } justify-center mt-8 gap-4 flex-wrap pt-6 border-t-[1.5px] px-6`}
        >
          <button
            className={styles.buttons + " text-blackText"}
            type="button"
            onClick={() => {
              if (currentStep === 1) {
                navigate("/admin/staffs");
              } else {
                setCurrentStep(1);
              }
            }}
          >
            {currentStep === 1 ? "Cancel" : "Previous"}
          </button>
          <button
            className={styles.buttons + " text-white bg-blackText"}
            type="button"
            onClick={() => {
              if (currentStep === 1) {
                setCurrentStep(2);
              } else {
                onSubmit?.();
              }
            }}
          >
            {currentStep === 1 ? "Continue" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

const styles = {
  step1Container:
    "relative after:w-[93px] after:h-[2px] after:top-[25%] after:-translate-y-[50%] after:left-[90%]  after:absolute after:z-[2]",
  step: "w-[30px] h-[30px] border-2 rounded-full flex justify-center items-center mx-auto mb-1 font-bold",
  formSectionTitle: "text-[19px] font-bold text-blackText mb-3 mt-3",
  gridContainer: "w-full grid grid-cols-1 sm:grid-cols-2 gap-4",
  buttons:
    "px-4 py-2 flex items-center border-2 border-blackText rounded-md font-bold gap-x-4 flex-nowrap sm:min-w-[150px] text-center justify-center w-full sm:w-fit",
};

export default StaffForm;
