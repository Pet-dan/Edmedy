import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import ContentBox from "../../components/UI/ContentBox";
import DashboardLayout from "../../components/DashboardLayout";
import ProgressBar from "../../components/ProgressBar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend,
} from "recharts";
import { areaChartData, barChartData } from "../../static/charts";
import { useState } from "react";
import { useEffect } from "react";

const getContainerWidth = (width: number): number => {
  return width > 1440
    ? 1200
    : width > 1280 && width < 1440
    ? 870
    : width > 1024 && width < 1280
    ? 750
    : width > 768 && width < 1024
    ? 640
    : width > 640 && width < 768
    ? 521
    : 400;
};

const AdminDashboard = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [containerWidth, setContainerWidth] = useState<number>(
    getContainerWidth(width)
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setContainerWidth(getContainerWidth(window.innerWidth));
    });
  }, []);

  return (
    <DashboardLayout pageTitle="Dashboard">
      <section className="sm:p-6 py-6">
        <div className={styles.main_container}>
          {/* staffs and students details */}
          <div className={styles.flex_containers}>
            <article className={styles.staffs_and_students}>
              <span
                className={styles.staffs_and_students_icon + "bg-[#5151f536]"}
              >
                <FaUser className="text-[royalblue]" />
              </span>
              <div>
                <p className="text-darkGray font-bold text-[1rem]">
                  Staff Members
                </p>
                <h2 className="text-[1.1rem] font-bold">24</h2>
              </div>
            </article>
            <article className={styles.staffs_and_students}>
              <span
                className={styles.staffs_and_students_icon + "bg-[#51f55f36]"}
              >
                <FaUsers className="text-[#136837]" />
              </span>
              <div>
                <p className="text-darkGray font-bold text-[1rem]">Students</p>
                <h2 className="text-[1.1rem] font-bold">240</h2>
              </div>
            </article>
          </div>

          {/* attendance containers */}
          <div
            className={`mt-8 flex-col md:flex-row ${styles.flex_containers}`}
          >
            <ContentBox defaultPadding={false}>
              <header className={styles.header}>
                <h2 className="text-[1.1rem] font-bold">Student Attendance</h2>
                <div className={styles.header_select}>Last 7 days</div>
              </header>
              <div className={styles.progressFlex}>
                <ProgressBar percent={80} title={"Repayment Rate"} />
                <div>
                  <p className="font-bold text-[16px] text-darkGray">
                    Total Students
                  </p>
                  <h2 className="text-black font-bold text-[20px]">234</h2>
                </div>
              </div>
              <footer className={styles.footer}>
                <p className="text-[1rem] text-darkGray font-bold">
                  Average Attendance
                </p>
                <h2 className="font-bold text-black text-[1rem] leading-[1] ">
                  230
                </h2>
              </footer>
            </ContentBox>
            <ContentBox defaultPadding={false}>
              <header className={styles.header}>
                <h2 className="text-[1.1rem] font-bold">Staff Attendance</h2>
                <div className={styles.header_select}>Last 7 days</div>
              </header>
              <div className={styles.progressFlex}>
                <ProgressBar percent={65} title={"Repayment Rate"} />
                <div>
                  <p className="font-bold text-[16px] text-darkGray">
                    Total Staff
                  </p>
                  <h2 className="text-black font-bold text-[20px]">24</h2>
                </div>
              </div>
              <footer className={styles.footer}>
                <p className="text-[1rem] text-darkGray font-bold">
                  Average Attendance
                </p>
                <h2 className="font-bold text-black text-[1rem] leading-[1] ">
                  20
                </h2>
              </footer>
            </ContentBox>
          </div>

          {/* Students Enrollment */}
          <ContentBox defaultPadding={true}>
            <header className={styles.header}>
              <h2 className="text-[1.1rem] font-bold">
                New Students Enrollment
              </h2>
              <div className={styles.header_select}>Last Month</div>
            </header>
            <div className="w-full max-w-full mt-6 overflow-hidden overflow-x-scroll">
              <div className="w-full min-w-fit  h-[300px] pb-2 xl:mb-2">
                <AreaChart
                  width={containerWidth}
                  height={300}
                  data={areaChartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stroke="#636363"
                    fill="#636363"
                  />
                </AreaChart>
              </div>
            </div>
          </ContentBox>

          <ContentBox defaultPadding={true}>
            <header className={styles.header}>
              <h2 className="text-[1.1rem] font-bold">Students Population</h2>
              <div className={styles.header_select}>Last Month</div>
            </header>
            <div className="w-full max-w-full mt-10 overflow-hidden overflow-x-scroll">
              <div className="w-full min-w-fit  pb-2 xl:mb-2">
                <BarChart
                  width={containerWidth}
                  height={250}
                  data={barChartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <CartesianGrid strokeDasharray="3" />

                  <XAxis dataKey="class" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amt" fill="#252525" />
                </BarChart>
              </div>
            </div>
          </ContentBox>
        </div>
      </section>
    </DashboardLayout>
  );
};

const styles = {
  main_container:
    "w-full min-h-screen shadow-xl bg-white rounded-md p-4 md:p-8",
  staffs_and_students:
    "p-3 border-[1.5px] flex items-center gap-x-4 rounded-md min-w-[200px]",
  staffs_and_students_icon:
    "w-[40px] h-[40px] text-[18px] font-lighter flex justify-center items-center rounded-full ",
  flex_containers:
    "flex items-center justify-center md:justify-start gap-6 flex-wrap w-full",
  header: "flex justify-between items-center gap-4 px-6 flex-wrap",
  header_select: "border-2 px-3 py-1 text-darkGray font-bold",
  progressFlex:
    "mt-4 flex justify-center gap-x-6 md:flex-row flex-col items-center px-6",
  footer: "w-full border-t-[1.5px] px-6 py-4",
};

export default AdminDashboard;
