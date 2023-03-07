import React, { useState } from "react";
import { countryList } from "../../../assets/static";
import StaffForm from "../../../components/Admin/StaffForm";
import DashboardLayout from "../../../components/DashboardLayout";
import { InputFields } from "../../../types/componentsProps.types";

const EditStaff = () => {
  const [selection, setSelection] = useState<"Bulk" | "Individual">(
    "Individual"
  );
  const updateSelection = (selection: "Bulk" | "Individual") => {
    setSelection(selection);
  };

  return (
    <DashboardLayout
      pageTitle={
        <>
          Staff Memebers/
          <span className="text-blackText font-bold">Edit Staff Profile</span>
        </>
      }
      documentTitle={"Add Staff"}
    >
      <section>
        <header className="w-full flex items-center gap-4 justify-start flex-wrap">
          <div
            className={styles.radio_container}
            onClick={() => {
              updateSelection("Individual");
            }}
          >
            <span
              className={`radio ${selection === "Individual" && "checked"}`}
            ></span>
            Individual
          </div>
          {/* <div
            className={styles.radio_container}
            onClick={() => {
              updateSelection("Bulk");
            }}
          >
            <span
              className={`radio ${selection === "Bulk" && "checked"}`}
            ></span>
            Bulk
          </div> */}
        </header>
        <StaffForm
          firstStepTitle="Edit Staff Profile"
          secondStepTitle="Edit Staff Profile"
        />
      </section>
    </DashboardLayout>
  );
};

const styles = {
  radio_container:
    "flex items-center gap-x-2 flex-nowrap text-[20px] text-blackText font-bold cursor-pointer",
};

export default EditStaff;
