import React from "react";
import { BiDotsVerticalRounded, BiUser } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
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
  ContentBox,
  SmallContentBoxWIthAvatar,
} from "../../components/UI/ContentBox";
import {
  bursaryTransactions,
  recentTransactionsHeaders,
} from "../../static/data";
const Bursary = () => {
  return (
    <DashboardLayout pageTitle="Bursary">
      <section className="sm:p-6 py-6 min-h-screen">
        <div className={styles.flex_containers}>
          <SmallContentBoxWIthAvatar
            avatar={"₦"}
            title={"Total Amount"}
            subtitle={"2,000,000"}
            iconBg={"#5151f536"}
            iconColor={"royalblue"}
            fullFlex={true}
          />
          <SmallContentBoxWIthAvatar
            avatar={"₦"}
            title={"Expected Amount"}
            subtitle={"3,000,000"}
            iconBg={"#51f55f36"}
            iconColor={"#136837"}
            fullFlex={true}
          />
          <SmallContentBoxWIthAvatar
            avatar={"₦"}
            title={"Outflow"}
            subtitle={"1,000,000"}
            iconBg={"#f5515136"}
            iconColor={"darkred"}
            fullFlex={true}
          />
        </div>

        <ContentBox defaultPadding={false}>
          <header className="sm:px-6 px-4 pb-4 border-b-[1.5px] text-blackText font-bold">
            Start a transaction
          </header>
          <div className="py-6 sm:px-6 px-4 flex items-center flex-wrap gap-y-4 gap-x-6">
            {/* <div className={styles.bursary_icons}>
              <BiUser />
              Staff Salary
            </div> */}
            <div className={styles.bursary_icons}>
              <FaExchangeAlt />
              Petty Cash
            </div>
            <div className={styles.bursary_icons}>
              <GiBank />
              In-Flow
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
          <div className="w-full sm:px-0 px-2">
            <TableLayout>
              <TableHeader>
                {recentTransactionsHeaders.map((header, index) => {
                  return <SingleTableHeader {...header} key={index} />;
                })}
              </TableHeader>
              <TableRowsContainer>
                {bursaryTransactions.slice(0, 4).map((transaction, index) => {
                  return (
                    <TableRow key={index}>
                      <SingleTableRowItem
                        width={recentTransactionsHeaders[0].width}
                      >
                        <p>{transaction.date}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem
                        width={recentTransactionsHeaders[1].width}
                      >
                        <p>{transaction.transactionName}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem
                        width={recentTransactionsHeaders[2].width}
                      >
                        <p>{transaction.recepient}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem
                        width={recentTransactionsHeaders[3].width}
                      >
                        <p>{transaction.amount}</p>
                      </SingleTableRowItem>
                      <SingleTableRowItem
                        width={recentTransactionsHeaders[4].width}
                      >
                        <p
                          className={`max-w-fit px-2 py-1 rounded-[20px] font-bold text-[14px] ${
                            transaction.success
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.success ? "Successful" : "Unsuccessful"}
                        </p>
                      </SingleTableRowItem>
                    </TableRow>
                  );
                })}
              </TableRowsContainer>
            </TableLayout>
          </div>
        </article>
      </section>
    </DashboardLayout>
  );
};

const styles = {
  flex_containers:
    "flex items-center justify-center md:justify-start gap-6 flex-wrap w-full mb-6",
  bursary_icons: "flex items-center gap-x-3 text-darkGray font-bold",
};

export default Bursary;
