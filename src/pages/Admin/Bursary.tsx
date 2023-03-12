import React, { ReactElement, useState } from "react";
import {
  BiBook,
  BiCheckCircle,
  BiDotsVerticalRounded,
  BiTransfer,
  BiUser,
} from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { GiBank, GiCancel } from "react-icons/gi";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import TableLayout, {
  SingleTableHeader,
  SingleTableRowItem,
  TableHeader,
  TableRow,
  TableRowsContainer,
} from "../../components/TableLayout";
import {
  BlackOutlineButton,
  ButtonFilled,
  OutlineButton,
} from "../../components/UI/Buttons";
import {
  ContentBox,
  SmallContentBoxWIthAvatar,
} from "../../components/UI/ContentBox";
import ModalOverlay from "../../components/UI/ModalOverlay";
import {
  bursaryTransactions,
  recentTransactionsHeaders,
} from "../../static/data";

type transactionTypes = "all" | "in-flow" | "out-flow";

const Bursary = () => {
  const [transactionFilter, setTransactionFilter] =
    useState<transactionTypes>("all");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <DashboardLayout pageTitle="Bursary">
      <>
        {/* modal */}
        {modalOpen && (
          <ModalOverlay modalWidth={500}>
            <div>
              <h1 className="text-center text-[20px] text-blackText font-extrabold max-w-[300px] mx-auto mb-5">
                Are you sure you want to close transaction for the term?
              </h1>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  <BlackOutlineButton icon={<GiCancel />} text={"Cancel"} />
                </div>
                <div
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  <ButtonFilled icon={<BiCheckCircle />} text={"Positive"} />
                </div>
              </div>
            </div>
          </ModalOverlay>
        )}

        <section className="sm:p-6 py-6 min-h-screen">
          <div className={styles.flex_containers}>
            <SmallContentBoxWIthAvatar
              avatar={"₦"}
              title={"Expected Amount"}
              subtitle={"3,000,000"}
              iconBg={"#5151f536"}
              iconColor={"royalblue"}
              fullFlex={true}
            />
            <SmallContentBoxWIthAvatar
              avatar={"₦"}
              title={"Sum Total"}
              subtitle={"2,000,000"}
              iconBg={"#51f55f36"}
              iconColor={"#136837"}
              fullFlex={true}
            />

            <SmallContentBoxWIthAvatar
              avatar={"₦"}
              title={"Current Total"}
              subtitle={"1,000,000"}
              iconBg={"#14141436"}
              iconColor={"#242424"}
              fullFlex={true}
            />
            <SmallContentBoxWIthAvatar
              avatar={"₦"}
              title={"Out-flow"}
              subtitle={"1,000,000"}
              iconBg={"#f5515136"}
              iconColor={"darkred"}
              fullFlex={true}
            />
          </div>

          <ContentBox defaultPadding={false}>
            <header className="sm:px-6 px-4 pb-4 border-b-[1.5px] text-blackText font-bold">
              Transactions
            </header>
            <div className="py-6 sm:px-6 px-4 flex items-center flex-wrap gap-y-4 gap-x-6">
              {/* <div className={styles.bursary_icons}>
              <BiUser />
              Staff Salary
            </div> */}
              {/* <div className={styles.bursary_icons}>
              <FaExchangeAlt />
              Petty Cash
            </div> */}
              {/* <div className={styles.bursary_icons}>
              <GiBank />
              In-Flow
            </div> */}

              <div className={styles.bursary_icons}>
                <FaExchangeAlt />
                Withdrawal / Out-flow
              </div>
              <div className={styles.bursary_icons}>
                <BiBook />
                History
              </div>
            </div>
          </ContentBox>

          <article>
            <header className="mt-7 text-[18px] md:text-[24px] font-bold justify-between items-center text-darkerGray flex flex-wrap">
              <h1>Recent Transactions</h1>
              <Link to="/" className="underline">
                See all
              </Link>
            </header>
            <div className="my-4 overflow-x-scroll">
              <div className="flex items-center min-w-fit justify-center gap-x-3">
                {(
                  [
                    { text: "in-flow", icon: <GiBank /> },
                    { text: "out-flow", icon: <BiTransfer /> },
                    { text: "all" },
                  ] as { text: transactionTypes; icon?: ReactElement }[]
                ).map((transactionType, index: number) => {
                  return (
                    <div
                      key={index}
                      className="min-w-fit"
                      onClick={() => setTransactionFilter(transactionType.text)}
                    >
                      {transactionFilter === transactionType.text ? (
                        <ButtonFilled {...transactionType} />
                      ) : (
                        <OutlineButton {...transactionType} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full sm:px-0 px-2">
              <TableLayout>
                <TableHeader>
                  {recentTransactionsHeaders.map((header, index) => {
                    return <SingleTableHeader {...header} key={index} />;
                  })}
                </TableHeader>
                <TableRowsContainer>
                  {bursaryTransactions
                    ?.filter((transaction) => {
                      return transactionFilter === "all"
                        ? transaction
                        : transaction.transactionType.toLowerCase() ===
                            transactionFilter;
                    })
                    ?.map((transaction, index) => {
                      return (
                        <TableRow key={index}>
                          <SingleTableRowItem
                            width={recentTransactionsHeaders[0].width}
                          >
                            <p>
                              <p
                                className={`max-w-fit px-2 py-1 rounded-[20px] font-bold text-[14px] ${
                                  transaction.transactionType === "inflow"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {transaction.transactionType === "inflow" ? (
                                  <RiArrowRightUpLine />
                                ) : (
                                  <RiArrowRightDownLine />
                                )}
                              </p>
                            </p>
                          </SingleTableRowItem>
                          <SingleTableRowItem
                            width={recentTransactionsHeaders[1].width}
                          >
                            <p>{transaction.date}</p>
                          </SingleTableRowItem>

                          <SingleTableRowItem
                            width={recentTransactionsHeaders[2].width}
                          >
                            <p>{transaction.name}</p>
                          </SingleTableRowItem>
                          <SingleTableRowItem
                            width={recentTransactionsHeaders[3].width}
                          >
                            <p>{"₦ " + transaction.amount.toLocaleString()}</p>
                          </SingleTableRowItem>
                          <SingleTableRowItem
                            width={recentTransactionsHeaders[4].width}
                          >
                            <Link to={"/admin/dashboard"} className="underline">
                              View Details
                            </Link>
                          </SingleTableRowItem>
                        </TableRow>
                      );
                    })}
                </TableRowsContainer>
              </TableLayout>
            </div>

            <footer className="mt-6 text-right">
              <p
                className="underline cursor-pointer"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Close Transaction for the term
              </p>
            </footer>
          </article>
        </section>
      </>
    </DashboardLayout>
  );
};

const styles = {
  flex_containers:
    "flex items-center justify-center md:justify-start gap-6 flex-wrap w-full mb-6",
  bursary_icons:
    "flex items-center gap-x-3 text-darkGray font-bold hover:underline",
};

export default Bursary;
