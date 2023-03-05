import React, { Dispatch, FC, SetStateAction } from "react";
import { useLocation, Link } from "react-router-dom";
import { MobileSidebarProps } from "../../types/componentsProps.types";
import { Squash } from "hamburger-react";
import logo from "../../assets/images/logo.png";

const MobileSidebar: FC<MobileSidebarProps> = ({
  links,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const location = useLocation();
  return (
    <aside
      className={`sm:hidden block fixed top-0 left-0 ${
        sidebarOpen ? "w-full" : "w-[0px]"
      } overflow-hidden min-h-screen bg-[rgba(0,0,0,0.6)] z-[5] transition-all duration-500`}
    >
      <div
        className={` bg-mainBg h-screen overflow-x-hidden overflow-y-scroll pb-6 pt-6  relative ${
          sidebarOpen ? "w-full" : "w-0"
        } transition-all duration-500 delay-500`}
      >
        <header className="flex items-center justify-between px-6">
          <img src={logo} alt="logo" loading="lazy" className="w-[120px]" />
          <span>
            <Squash toggled={true} size={23} toggle={setSidebarOpen} />
          </span>
        </header>
        <div className="w-full flex flex-col pt-6 gap-y-4 px-6">
          {links.map((link, index: number) => {
            return (
              <Link
                to={link.href}
                key={index}
                onClick={() => {
                  setSidebarOpen(false);
                }}
                className={`${
                  location.pathname === link.href
                    ? "bg-black text-mainBg"
                    : "bg-transparent text-gray-800 hover:bg-[rgba(0,0,0,.1)]"
                } p-3 rounded-md cursor-pointer text-start w-full flex items-center gap-x-4`}
              >
                <span>{link.icon}</span>
                <p className="">{link.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default MobileSidebar;
