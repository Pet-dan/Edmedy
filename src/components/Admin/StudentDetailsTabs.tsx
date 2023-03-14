import {
  singleStudentDetails,
  studentAttendance,
  studentAttendanceHeaders,
} from "../../static/data";
import {
  ContentBoxWithAvatar,
  ContentBoxWithAvatarHeader,
} from "../UI/ContentBox";
import { SingleProfileDetail } from "./StaffDetailsTabs";
import { BiCheck, BiUser } from "react-icons/bi";
import { GiBank } from "react-icons/gi";
import { BsPlusSquare } from "react-icons/bs";
import TableLayout, {
  SingleTableHeader,
  SingleTableRowItem,
  TableHeader,
  TableRow,
  TableRowsContainer,
} from "../TableLayout";
import { MdCancel } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

export const Profile = () => {
  const { user, parent, tuition, sickbayHistory } = singleStudentDetails;
  return (
    <>
      <div className="w-full flex gap-4 xl:flex-row flex-col">
        <div className="flex-[60%]">
          <ContentBoxWithAvatar
            avatar={<BiUser />}
            header={"General Information"}
            hasButton={false}
          >
            <section className={styles.content_rows}>
              <SingleProfileDetail title={"Name"} subtitle={user.name} />
              <SingleProfileDetail title={"Gender"} subtitle={user.gender} />
              <SingleProfileDetail
                title={"Date Of Birth"}
                subtitle={user.dob}
              />
              <SingleProfileDetail
                title={"Telephone"}
                subtitle={user.telephone}
              />
              <SingleProfileDetail title={"Email"} subtitle={user.email} />
              <SingleProfileDetail title={"Address"} subtitle={user.address} />
              <SingleProfileDetail title={"Class"} subtitle={user.class} />
            </section>
            <hr className="my-4 border-t-2 block w-[80%] mx-auto" />
            <section>
              <ContentBoxWithAvatarHeader
                avatar={<BiUser />}
                header={"Reference/Next of Kin Information"}
                hasButton={false}
              />
              <div className={styles.content_rows}>
                <SingleProfileDetail title={"Name"} subtitle={parent.name} />
                <SingleProfileDetail
                  title={"Gender"}
                  subtitle={parent.gender}
                />
                <SingleProfileDetail
                  title={"Date of Birth"}
                  subtitle={parent.dob}
                />
                <SingleProfileDetail
                  title={"Telephone"}
                  subtitle={parent.telephone}
                />
                <SingleProfileDetail title={"Email"} subtitle={parent.email} />
                <SingleProfileDetail
                  title={"Address"}
                  subtitle={parent.address}
                />
              </div>
            </section>
          </ContentBoxWithAvatar>
        </div>
        <div className="flex-[40%] space-y-4">
          <ContentBoxWithAvatar
            avatar={<GiBank />}
            header={"Tuition Details"}
            hasButton={true}
            buttonType={"OutlineBlack"}
            buttonLink={"/"}
            buttonText={"View Pay Advice"}
          >
            <section className={styles.content_rows}>
              <SingleProfileDetail
                title={"Total Tuition Due (N)"}
                subtitle={tuition.total.toLocaleString()}
              />
              <SingleProfileDetail
                title={"Total Paid (N)"}
                subtitle={tuition.paid.toLocaleString()}
              />
              <SingleProfileDetail
                title={"Tuition Balance (N)"}
                subtitle={tuition.balance.toLocaleString()}
              />
            </section>
          </ContentBoxWithAvatar>
          {/* --------- NOT IN MVP ----------- */}
          {/* <ContentBoxWithAvatar
            avatar={<BsPlusSquare />}
            header={"Sickbay History"}
            hasButton={false}
          >
            <section className={styles.content_rows}>
              <SingleProfileDetail
                title={"Number of visits"}
                subtitle={sickbayHistory.visits.toString()}
              />
              <SingleProfileDetail
                title={"Last Visit Date"}
                subtitle={sickbayHistory.lastVisited}
              />
              <SingleProfileDetail
                title={"Medical Issue Treated"}
                subtitle={sickbayHistory.issueTreated}
              />
              <SingleProfileDetail
                title={"Attending Nurse"}
                subtitle={sickbayHistory.nurse}
              />
            </section>
          </ContentBoxWithAvatar> */}
        </div>
      </div>
    </>
  );
};

export const EducationalHistory = () => {
  return <div></div>;
};

export const Attendance = () => {
  return (
    <>
      <div className="w-full sm:px-0 px-2">
        <TableLayout>
          <TableHeader>
            {studentAttendanceHeaders.map((header, index: number) => {
              return (
                <SingleTableHeader key={index} center={true} {...header} />
              );
            })}
          </TableHeader>
          <TableRowsContainer>
            {studentAttendance.map((attendance, index) => {
              return (
                <TableRow key={index}>
                  <SingleTableRowItem width={studentAttendanceHeaders[0].width}>
                    <p className="w-full bg-blackText text-white font-bold text-[1rem] py-3 text-center">
                      Week {attendance.week}
                    </p>
                  </SingleTableRowItem>
                  <>
                    {attendance.days.map((day, index) => {
                      return (
                        <SingleTableRowItem
                          key={index}
                          width={studentAttendanceHeaders[1].width}
                        >
                          <p className="text-center max-w-fit mx-auto">
                            {day.present ? (
                              <BiCheck className="text-[18px] text-green-600" />
                            ) : (
                              <FaTimes className="text-red-600" />
                            )}
                          </p>
                        </SingleTableRowItem>
                      );
                    })}
                  </>
                </TableRow>
              );
            })}
          </TableRowsContainer>
        </TableLayout>
      </div>
    </>
  );
};

const styles = {
  content_rows:
    "grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 p-4 gap-x-4 gap-y-5",
  content: "flex flex-col gap-y-[5px] block",
  content_title: "text-[0.94rem] text-darkGray capitalize font-bold",
  content_text: "text-blackText text-[1rem] capitalize",
  bold_font: "font-bold text-[16px] text-darkerGray",
};
