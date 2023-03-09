import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
const Outflow = () => {
  return (
    <DashboardLayout
      pageTitle={
        <>
          Bursary/
          <span className="text-blackText font-bold">Out-flow</span>
        </>
      }
      documentTitle="Bursary Out-flow"
    ></DashboardLayout>
  );
};

export default Outflow;
