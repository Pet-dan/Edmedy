import React, { FC, useEffect, useRef, useState } from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";
import DashboardLayout from "../../../components/DashboardLayout";
import TableLayout, {
  SingleTableHeader,
  SingleTableRowItem,
  TableHeader,
  TableRow,
  TableRowsContainer,
} from "../../../components/TableLayout";
import { Link } from "react-router-dom";
import { staffsHeader, staffsList } from "../../../static/data";
import { ButtonFilled, OutlineButton } from "../../../components/UI/Buttons";

const Staffs = () => {
  return (
    <DashboardLayout pageTitle="Staff Members">
      <section className="sm:p-6 py-6 min-h-screen">
        <header className={styles.header_container}>
          {/* search container */}
          <div className={styles.search_box}>
            <div className="flex-1">
              <input
                type="text"
                placeholder='Try "Ademola Osanyin"'
                className={styles.search_input}
              />
            </div>
            <span className={styles.search_icon}>
              <BiSearch />
            </span>
          </div>
          <div className="flex-[33%] flex gap-4 flex-wrap sm:flex-nowrap">
            {/* filter button */}
            <OutlineButton icon={<RiMenu2Line />} text={"Filter"} />

            <Link to={"/admin/staffs/new"} className="min-w-fit">
              <ButtonFilled icon={<BiPlus />} text={"Add Staff Members"} />
            </Link>
          </div>
        </header>
        {staffsList.length > 0 && (
          <div className="w-full sm:px-0 px-2">
            <TableLayout>
              <TableHeader>
                {staffsHeader.map((header, index) => {
                  return (
                    <SingleTableHeader
                      key={index}
                      text={header.text}
                      width={header.width}
                    />
                  );
                })}
              </TableHeader>

              <TableRowsContainer>
                {staffsList.map((rowItem, index) => {
                  return (
                    <TableRow key={index}>
                      <SingleTableRowItem width={staffsHeader[0].width}>
                        <Link
                          to={`/admin/staffs/${rowItem.id}`}
                          className="flex items-center gap-x-2 cursor-pointer"
                        >
                          <img
                            className="w-[25px] h-[25px] rounded-full"
                            alt={rowItem.name}
                            loading="lazy"
                            src={rowItem.image}
                          />
                          <p className="font-bold text-[#222] cursor-pointer hover:underline">
                            {rowItem.name}
                          </p>
                        </Link>
                      </SingleTableRowItem>
                      <SingleTableRowItem width={staffsHeader[1].width}>
                        <p>{rowItem.email}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem width={staffsHeader[2].width}>
                        <p>{rowItem.phoneNumber}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem width={staffsHeader[3].width}>
                        <p>{rowItem.position}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem width={staffsHeader[4].width}>
                        <p>{rowItem.location}</p>
                      </SingleTableRowItem>
                    </TableRow>
                  );
                })}
              </TableRowsContainer>
            </TableLayout>
          </div>
        )}
        {/* No Staff member */}
        {staffsList.length === 0 && (
          <div className="w-full h-[80vh] flex justify-center items-center flex-col gap-y-3">
            <h2 className="text-darkGray text-[1.7rem] font-bold">
              No staff member yet!
            </h2>
            <p className="text-blackText text-[1.1rem] font-bold">
              Kindly add staff members
            </p>
          </div>
        )}
      </section>
    </DashboardLayout>
  );
};

export default Staffs;

const styles = {
  header_container:
    "flex flex-wrap xl:flex-nowrap gap-[1.5rem] w-full items-center",
  search_box:
    "flex-[67%] flex w-full gap-[1rem] border-2 rounded-md hover:border-black bg-white",
  search_input:
    "w-full outline-none border-none h-[35px] px-4 placeholder:text-darkGray",
  search_icon:
    "flex-1 min-w-[40px] max-w-[40px] h-[35px] flex justify-center items-center text-darkGray",
  buttons:
    "px-4 py-2 flex items-center border-2 rounded-md font-bold gap-x-4 flex-nowrap min-w-fit",
};
