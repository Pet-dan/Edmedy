import React, { ChangeEvent, FC, useState } from "react";
import { InputFields, StaffFormProps } from "../../types/componentsProps.types";
import { countryList } from "../../assets/static";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateNextOfKinDetails,
  updateRoleDetails,
  updateStaffDetails,
} from "../../store/slices/post/addStaffMemberSlice";
import SelectContainer from "../UI/SelectContainer";
import { OutlineButton } from "../UI/Buttons";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";

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
  const editStaffRole = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRoleDetails({ key: e.target.name, value: e.target.value }));
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
  const updateClass = (value: string) => {
    dispatch(updateRoleDetails({ key: "class", value }));
  };
  const editNextOfKinDetails = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateNextOfKinDetails({ key: e.target.name, value: e.target.value })
    );
  };

  return (
    <section className="w-full mt-8 pb-8">
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
                <Input
                  value={addStaffSlice.firstname}
                  onChange={editStaffDetails}
                  type={"text"}
                  name={"firstname"}
                  placeholder={"First Name"}
                />
                <Input
                  value={addStaffSlice.lastname}
                  onChange={editStaffDetails}
                  type={"text"}
                  name={"lastname"}
                  placeholder={"Last Name"}
                />
                <Input
                  value={addStaffSlice.dob}
                  onChange={editStaffDetails}
                  type={"text"}
                  name={"dob"}
                  placeholder={"Date of birth (DD-MM-YYYY)"}
                />

                <SelectContainer
                  list={["Male", "Female"]}
                  currentItem={addStaffSlice.gender}
                  fitContent={true}
                  updateItem={updateGender}
                />
              </div>
            </article>
            <article className="px-6">
              <h1 className={styles.formSectionTitle}>Contact Information</h1>

              <div className={styles.gridContainer}>
                <Input
                  type={"email"}
                  value={addStaffSlice.email}
                  onChange={editStaffDetails}
                  placeholder={"Email Address"}
                  name={"email"}
                />
                <Input
                  type={"number"}
                  value={addStaffSlice.phoneNumber}
                  onChange={editStaffDetails}
                  placeholder={"Phone Number"}
                  name={"phoneNumber"}
                />
                <SelectContainer
                  list={countryList}
                  fitContent={false}
                  currentItem={addStaffSlice.country}
                  updateItem={updateCountry}
                />
                <Input
                  type={"text"}
                  value={addStaffSlice.state}
                  onChange={editStaffDetails}
                  placeholder={"State"}
                  name={"state"}
                />
                <Input
                  type={"text"}
                  value={addStaffSlice.city}
                  onChange={editStaffDetails}
                  placeholder={"City"}
                  name={"city"}
                />
                <Input
                  type={"text"}
                  value={addStaffSlice.address}
                  onChange={editStaffDetails}
                  placeholder={"Address"}
                  name={"address"}
                />
                <label htmlFor="file" className="input-field">
                  {addStaffSlice?.picture
                    ? (addStaffSlice.picture as File)?.name?.length > 30
                      ? (addStaffSlice.picture as File)?.name?.slice(0, 30) +
                        "..."
                      : (addStaffSlice.picture as File)?.name
                    : "Upload Picture"}
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="file"
                  onChange={(e) => {
                    const file = e?.target?.files?.[0];

                    if (file?.type.includes("image")) {
                      dispatch(
                        updateStaffDetails({
                          key: "picture",
                          value: file,
                        })
                      );
                    }
                  }}
                />
              </div>
            </article>

            <article className="px-6">
              <h1 className={styles.formSectionTitle}>Bank Information</h1>

              <div className={styles.gridContainer}>
                <Input
                  type={"text"}
                  value={addStaffSlice.bankName}
                  name={"bankName"}
                  onChange={editStaffDetails}
                  placeholder={"Bank Name"}
                />
                <Input
                  type={"text"}
                  value={addStaffSlice.accountName}
                  name={"accountName"}
                  onChange={editStaffDetails}
                  placeholder={"Account Name"}
                />

                <Input
                  type={"number"}
                  value={addStaffSlice.accountNumber}
                  name={"accountNumber"}
                  onChange={editStaffDetails}
                  placeholder={"Account Number"}
                />
              </div>
            </article>

            <article className="px-6">
              <h1 className={styles.formSectionTitle}>
                Next Of Kin information
              </h1>

              <div className={styles.gridContainer}>
                <Input
                  type="text"
                  name="name"
                  value={addStaffSlice.nextOfKin.name}
                  placeholder="Enter Name"
                  onChange={editNextOfKinDetails}
                />
                <Input
                  type="email"
                  name="email"
                  value={addStaffSlice.nextOfKin.email}
                  placeholder="Enter Email"
                  onChange={editNextOfKinDetails}
                />
                <Input
                  type="dob"
                  name="dob"
                  value={addStaffSlice.nextOfKin.dob}
                  placeholder="Date of Birth (DD-MM-YYYY)"
                  onChange={editNextOfKinDetails}
                />
                <Input
                  type="number"
                  name="phoneNumber"
                  value={addStaffSlice.nextOfKin.phoneNumber}
                  placeholder="Enter Phone Number"
                  onChange={editNextOfKinDetails}
                />
                <Input
                  type="text"
                  name="address"
                  value={addStaffSlice.nextOfKin.address}
                  placeholder="Enter Address"
                  onChange={editNextOfKinDetails}
                />
              </div>
            </article>
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full max-w-[800px] mx-auto">
            <article className="px-6">
              <div className={styles.gridContainer}>
                <SelectContainer
                  list={[
                    "Teacher",
                    "Cleaner",
                    "Bus Driver",
                    "Security",
                    "Bursar",
                    "Nurse",
                    "Chef",
                    "Bus Assistant",
                    "Nanny",
                    "Gardener",
                    "Others",
                  ]}
                  currentItem={addStaffSlice.role.position}
                  fitContent={false}
                  updateItem={updatePosition}
                />
                {addStaffSlice.role.position === "Others" && (
                  <Input
                    type="text"
                    value={addStaffSlice.role.otherPosition}
                    name="otherPosition"
                    placeholder="Kindly specify the position"
                    onChange={editStaffRole}
                  />
                )}
                {addStaffSlice.role.position === "Teacher" && (
                  <SelectContainer
                    list={[
                      "JSS 1",
                      "JSS 2",
                      "JSS 3",
                      "SS 1",
                      "SS 2",
                      "SS 3",
                      "Others",
                    ]}
                    currentItem={addStaffSlice.role.class}
                    updateItem={updateClass}
                    fitContent={false}
                  />
                )}
                {addStaffSlice.role.position === "Teacher" &&
                  addStaffSlice.role.class === "Others" && (
                    <Input
                      type="text"
                      placeholder="Kindly Specify Class"
                      value={addStaffSlice.role.otherClass}
                      name="otherClass"
                      onChange={editStaffRole}
                    />
                  )}
                {addStaffSlice.role.position === "Teacher" && (
                  <Input
                    type="text"
                    placeholder="Subjects (Seperate with commas e.g Yoruba, English)"
                    value={addStaffSlice.role.subject}
                    name="subject"
                    onChange={editStaffRole}
                  />
                )}
                <Input
                  type={"number"}
                  value={addStaffSlice.role.salary}
                  name={"salary"}
                  onChange={editStaffRole}
                  placeholder={"Salary"}
                />
                <>
                  <label htmlFor="file" className="input-field">
                    {addStaffSlice?.role?.signature
                      ? (addStaffSlice.role?.signature as File)?.name?.length >
                        30
                        ? (addStaffSlice.role?.signature as File)?.name?.slice(
                            0,
                            30
                          ) + "..."
                        : (addStaffSlice.role?.signature as File)?.name
                      : "Upload Signature"}
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    id="file"
                    onChange={(e) => {
                      const file = e?.target?.files?.[0];
                      if (file?.type.includes("image")) {
                        dispatch(
                          updateRoleDetails({
                            key: "signature",
                            value: file,
                          })
                        );
                      }
                    }}
                  />
                </>
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
