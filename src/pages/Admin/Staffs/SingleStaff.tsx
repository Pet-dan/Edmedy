import React, { useState } from "react";
import { BiChevronLeft, BiPaperPlane, BiPlus } from "react-icons/bi";
import DashboardLayout from "../../../components/DashboardLayout";
import image from "../../../assets/images/profile-img.jpg";
import { ButtonFilled, OutlineButton } from "../../../components/UI/Buttons";
import { TabsProps } from "../../../types/static.types";
import {
  EmploymentRecord,
  LessonNotes,
  Profile,
} from "../../../components/Admin/StaffDetailsTabs";
import { Link } from "react-router-dom";

const tabs: TabsProps[] = [
  { title: "Profile", component: <Profile /> },
  { title: "Employment Documents", component: <EmploymentRecord /> },
];

const SingleStaff = () => {
  const [openedTab, setOpenedTab] = useState<TabsProps>({
    title: "Profile",
    component: <Profile />,
  });

  const switchTab = (tab: TabsProps) => {
    setOpenedTab(tab);
  };

  return (
    <DashboardLayout
      documentTitle="Staff Profile"
      pageTitle={
        <>
          Staff Members/
          <span className="font-bold text-black">Staff Profile</span>
        </>
      }
    >
      <section className="sm:p-6 py-6 min-h-screen">
        <Link to={"/admin/staffs"} className={styles.back_icon}>
          <i className="text-[20px]">
            <BiChevronLeft />
          </i>
          <p>Back</p>
        </Link>

        <header className={styles.header}>
          <div className="flex items-center gap-x-3">
            <img
              className="w-[80px] h-[80px] rounded-full object-fit object-cover"
              alt=""
              src={image}
              loading="lazy"
            />
            <div className="flex-col gap-y-1">
              <h2 className="text-[1.2rem] font-bold text-blackText">
                Adedamola Alegbe James
              </h2>
              <p className="text-darkGray text-[1rem]">Teacher</p>
              <p className="text-[0.8rem] mt-1">
                <i>Started</i>
                <span className="font-bold inline-block ml-[6px]">
                  February, 2022
                </span>
              </p>
            </div>
          </div>
          <div className=" flex gap-4 flex-wrap sm:flex-nowrap items-end justify-end">
            {/* <OutlineButton icon={<BiPaperPlane />} text={"Send Notification"} /> */}
            <Link to={"/admin/staffs/edit/1"}>
              <ButtonFilled icon={<BiPlus />} text={"Edit Staff Ptofile"} />
            </Link>
          </div>
        </header>

        {/* tabs */}
        <div className="mt-8 sm:px-0 px-4">
          <div className="w-full max-w-full overflow-x-scroll border-b-[1.5px] flex items-center gap-x-4 pb-2">
            {tabs?.map((tab, index) => {
              return (
                <h3
                  key={index}
                  className={`pb-1 mb-0  leading-[1] border-b-2 cursor-pointer ${
                    index === 0 ? "min-w-[120px]" : "min-w-fit"
                  } font-bold text-center ${
                    openedTab.title === tab.title
                      ? "border-black text-blackText"
                      : "border-transparent text-darkerGray"
                  }`}
                  onClick={() => {
                    switchTab(tab);
                  }}
                >
                  {tab.title}
                </h3>
              );
            })}
          </div>
        </div>
        <section className="w-full mt-8">{openedTab.component}</section>
      </section>
    </DashboardLayout>
  );
};

const styles = {
  back_icon: "flex items-center gap-x- text-[16px] font-bold",
  header:
    "mt-8 flex lg:items-center gap-4 md:flex-row flex-col justify-between",
};

export default SingleStaff;
