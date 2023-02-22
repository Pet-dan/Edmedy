import React, { FC, ReactElement, useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { GiHamburgerMenu, GiMoneyStack } from "react-icons/gi";
import { BiBus, BiChevronDown } from "react-icons/bi";
import { RiStore2Line } from "react-icons/ri";
import { BsBellFill, BsGear } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import DesktopSidebar from "./Sidebars/DesktopSidebar";
import MobileSidebar from "./Sidebars/MobileSidebar";
import { Squash } from "hamburger-react";
const links = [
  { icon: <MdOutlineDashboard />, text: "Dashboard", href: "/admin/dashboard" },
  { icon: <FaRegUser />, text: "Staff Members", href: "/admin/staffs" },
  { icon: <FiUsers />, text: "Students", href: "/admin/students" },
  { icon: <FiCalendar />, text: "Calendar", href: "/admin/calendar" },
  { icon: <AiOutlinePlusSquare />, text: "Sick bay", href: "/admin/sick-bay" },
  { icon: <GiMoneyStack />, text: "Bursary", href: "/admin/bursary" },
  { icon: <RiStore2Line />, text: "Store", href: "/admin/store" },
  { icon: <BsGear />, text: "Settings", href: "/admin/settings" },
];

type DashboardProps = {
  children?: ReactElement[] | ReactElement;
  pageTitle: string;
};
const DashboardLayout: FC<DashboardProps> = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = `Edmedy | ${pageTitle}`;
  }, []);
  return (
    <section className="w-full min-h-screen bg-mainBg">
      {/* Sidebar */}
      <MobileSidebar
        links={links}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <DesktopSidebar links={links} />
      <div className="md:ml-[280px] sm:ml-[80px] ml-0">
        <nav className="w-full p-4 border-b-2 flex items-center gap-x-3 justify-between">
          <div className="flex items-center gap-x-3">
            <span className="text-[20px] sm:hidden cursor-pointer">
              <Squash toggled={false} size={23} toggle={setSidebarOpen} />
            </span>
            <h1 className="text-[24px] font-bold text-[#444] sm:block hidden">
              {pageTitle}
            </h1>
          </div>
          <div className="flex items-center gap-x-3 sm:gap-x-5">
            <span className="block text-[#666] cursor-pointer text-[21px]">
              <BsBellFill />
            </span>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <span className="font-bold bg-blue-200 text-blue-600 w-[35px] h-[35px] rounded-full flex justify-center items-center">
                SO
              </span>
              <div className="sm:block hidden">
                <h3 className="leading-[1] text-[16px] font-bold">
                  Sumbo Ozumba
                </h3>
                <p className="text-[14px] text-gray-700">Admin</p>
              </div>
              <span className="text-[25px]">
                <BiChevronDown />
              </span>
            </div>
          </div>
        </nav>
        <main className="py-8 px-6">
          <h1 className="text-[26px] font-bold text-[#444] sm:hidden mb-4">
            {pageTitle}
          </h1>

          {children}
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
