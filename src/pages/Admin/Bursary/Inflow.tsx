import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
const Inflow = () => {
  return (
    <DashboardLayout
      pageTitle={
        <>
          Bursary/
          <span className="text-blackText font-bold">In-flow</span>
        </>
      }
      documentTitle={"Bursary In-flow"}
    ></DashboardLayout>
  );
};

export default Inflow;
