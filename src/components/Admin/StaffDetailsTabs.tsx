import React, { ReactElement } from "react";
import { BiUser } from "react-icons/bi";
import { GiBank, GiTie } from "react-icons/gi";
import {
  singleStaffDetails,
  staffEmploymentRecord,
  staffEmploymentRecordHeaders,
  staffLessonNoteHeaders,
  staffLessonNotes,
} from "../../static/data";
import TableLayout, {
  SingleTableHeader,
  SingleTableRowItem,
  TableHeader,
  TableRow,
  TableRowsContainer,
} from "../TableLayout";
import {
  ContentBoxWithAvatar,
  ContentBoxWithAvatarHeader,
} from "../UI/ContentBox";

const getDetails = (list: any, keyPair: string): ReactElement => {
  return (
    <>
      {Object.keys(list[keyPair as keyof typeof list]).map(
        (user_details: any, index: number) => {
          const element = list[keyPair as keyof typeof list]?.[user_details];
          return (
            <span key={index} className={styles.content}>
              <p className={styles.content_title}>{user_details}</p>
              <h2 className={styles.content_text}>
                {typeof element === "string" || typeof element === "number"
                  ? element
                  : element.join(", ")}
              </h2>
            </span>
          );
        }
      )}
    </>
  );
};

export const Profile = () => {
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
              {getDetails(singleStaffDetails, "user")}
            </section>
            <hr className="my-4 border-t-2 block w-[80%] mx-auto" />
            <section>
              <ContentBoxWithAvatarHeader
                avatar={<BiUser />}
                header={"Reference/Next Of Kin Information"}
                hasButton={false}
              />
              <div className={styles.content_rows}>
                {getDetails(singleStaffDetails, "nextOfKin")}
              </div>
            </section>
          </ContentBoxWithAvatar>
        </div>
        <div className="flex-[40%] space-y-4">
          <ContentBoxWithAvatar
            avatar={<GiTie />}
            header={"Role Details"}
            hasButton={false}
          >
            <section className={styles.content_rows}>
              {getDetails(singleStaffDetails, "role")}
            </section>
          </ContentBoxWithAvatar>
          <ContentBoxWithAvatar
            avatar={<GiBank />}
            header={"Account Information"}
            hasButton={false}
            buttonType={"Fill"}
            buttonLink={"/"}
            buttonText={"View Salary Record"}
          >
            <section className={styles.content_rows}>
              {getDetails(singleStaffDetails, "accountInfo")}
            </section>
          </ContentBoxWithAvatar>
        </div>
      </div>
    </>
  );
};

export const EmploymentRecord = () => {
  return (
    <>
      <div className="w-full sm:px-0 px-2">
        <TableLayout>
          <TableHeader>
            {staffEmploymentRecordHeaders.map((header, index: number) => {
              return <SingleTableHeader key={index} {...header} />;
            })}
          </TableHeader>
          <TableRowsContainer>
            {staffEmploymentRecord.map((employmentRecord, index: number) => {
              return (
                <TableRow>
                  <SingleTableRowItem
                    width={staffEmploymentRecordHeaders[0].width}
                  >
                    <p className="text-[16px] text-darkerGray">
                      {employmentRecord.title}
                    </p>
                  </SingleTableRowItem>
                  <SingleTableRowItem
                    width={staffEmploymentRecordHeaders[1].width}
                  >
                    <a
                      href={employmentRecord.link}
                      target="_blank"
                      className="text-[17px] text-darkerGray underline"
                    >
                      View document
                    </a>
                  </SingleTableRowItem>
                </TableRow>
              );
            })}
          </TableRowsContainer>
        </TableLayout>
      </div>
    </>
  );
};

export const LessonNotes = () => {
  return (
    <>
      <div className="w-full sm:px-0 px-2">
        <TableLayout>
          <TableHeader>
            {staffLessonNoteHeaders.map((header, index: number) => {
              return <SingleTableHeader key={index} {...header} />;
            })}
          </TableHeader>
          <TableRowsContainer>
            {staffLessonNotes.map((note, index: number) => {
              return (
                <TableRow>
                  <SingleTableRowItem width={staffLessonNoteHeaders[0].width}>
                    <p className={styles.bold_font}>{note.session}</p>
                  </SingleTableRowItem>
                  <SingleTableRowItem width={staffLessonNoteHeaders[1].width}>
                    <p className={"text-[16px] text-darkerGray"}>{note.term}</p>
                  </SingleTableRowItem>
                  <SingleTableRowItem width={staffLessonNoteHeaders[2].width}>
                    <p className={"text-[16px] text-darkerGray"}>
                      {note.subject}
                    </p>
                  </SingleTableRowItem>
                  <SingleTableRowItem width={staffLessonNoteHeaders[3].width}>
                    <p
                      className={`text-[14px] py-1 px-3 rounded-[30px] max-w-fit min-w-fit font-bold ${
                        note.completed
                          ? "text-green-700 bg-green-200"
                          : "text-orange-700 bg-orange-200"
                      }`}
                    >
                      {note.completed ? "Completed" : "In progress"}
                    </p>
                  </SingleTableRowItem>
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
