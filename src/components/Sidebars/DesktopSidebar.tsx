import React, { FC, useState } from "react";
import logo from "../../assets/images/logo.png";
import logoSmall from "../../assets/images/logo-small.png";
import { Link, useLocation } from "react-router-dom";
import { DesktopSidebarProps } from "../../types/componentsProps.types";
const DesktopSidebar: FC<DesktopSidebarProps> = ({ links }) => {
  const location = useLocation();
  const [descOpen, setDescOpen] = useState<boolean>(false);
  const [descPosition, setDescPosition] = useState<number>();
  const [descText, setDescText] = useState<string>("daniel");

  const showLinkDescription = (text: string, position: number) => {
    setDescOpen(true);
    setDescPosition(position);
    setDescText(text);
  };
  const closeLinkDescription = () => {
    setDescOpen(false);
    setDescPosition(0);
    setDescText("");
  };

  return (
    <>
      {descOpen && (
        <p
          className={`fixed left-[90px] lg:hidden sm:flex hidden ${descPosition} h-[48px] bg-black text-white cursor-pointer z-[5] p-4 rounded-md min-w-[150px] justify-center items-center`}
          style={{ top: `${descPosition}px` }}
        >
          {descText}
        </p>
      )}
      <aside className="lg:w-[280px] sm:min-h-screen sm:max-h-fit fixed top-0 left-0 z-[3] overflow-hidden overflow-y-scroll sm:py-8 py-4 px-4 lg:px-7 sm:border-r-2 sm:w-[80px] sm:shadow-none shadow-md sm:rounded-none rounded-md bg-mainBg lg:bg-white sm:block hidden">
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className="lg:w-[150px] lg:block hidden"
        />
        <img
          src={logoSmall}
          alt="logo"
          className="w-[80px] lg:hidden sm:block hidden"
        />
        <div className="mt-8 w-full flex flex-col gap-y-4">
          {links.map((link, index: number) => {
            return (
              <Link
                to={link.href}
                key={index}
                onMouseOver={(e: any) => {
                  showLinkDescription(
                    link.text,
                    e.currentTarget.getBoundingClientRect().top
                  );
                }}
                onMouseLeave={() => {
                  closeLinkDescription();
                }}
                className={`${
                  location.pathname === link.href
                    ? "bg-black text-mainBg"
                    : "bg-transparent text-gray-800 hover:bg-[rgba(0,0,0,.1)]"
                } p-3 rounded-md cursor-pointer text-center lg:text-start w-[50px] lg:min-w-[100%]`}
              >
                <span className="inline-block lg:mr-2 align-middle">
                  {link.icon}
                </span>{" "}
                {/* hover text */}
                <p className="lg:inline-block hidden">{link.text}</p>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default DesktopSidebar;
