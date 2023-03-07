import {
  bursaryTransactionsProps,
  plansProps,
  StaffEmploymentRecordProps,
  StaffLessonNotesProps,
  staffsListProps,
  tableHeaders,
} from "../types/static.types";
import profileImage from "../assets/images/profile-img.jpg";

export const plans: plansProps[] = [
  {
    duration: "Month",
    plan: [
      {
        name: "Trial",
        description: "Ideal for schools who need access to basic features",
        price: 0,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: false },
          { name: "Feature 4", available: false },
          { name: "Feature 5", available: false },
          { name: "Feature 6", available: false },
        ],
      },
      {
        name: "Enterprise",
        description:
          "Ideal for schools who need personalized services and security for large teams",
        price: 11350,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: true },
          { name: "Feature 4", available: true },
          { name: "Feature 5", available: false },
          { name: "Feature 6", available: false },
        ],
      },
      {
        name: "Ultimate",
        description:
          "Ideal for schools who need advanced features and tools for client work",
        price: 45400,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: true },
          { name: "Feature 4", available: true },
          { name: "Feature 5", available: true },
          { name: "Feature 6", available: true },
        ],
      },
    ],
  },
  {
    duration: "Year",
    plan: [
      {
        name: "Trial",
        description: "Ideal for schools who need access to basic features",
        price: 0,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: false },
          { name: "Feature 4", available: false },
          { name: "Feature 5", available: false },
          { name: "Feature 6", available: false },
        ],
      },
      {
        name: "Enterprise",
        description:
          "Ideal for schools who need personalized services and security for large teams",
        price: 140000,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: true },
          { name: "Feature 4", available: true },
          { name: "Feature 5", available: false },
          { name: "Feature 6", available: false },
        ],
      },
      {
        name: "Ultimate",
        description:
          "Ideal for schools who need advanced features and tools for client work",
        price: 300000,
        features: [
          { name: "Feature 1", available: true },
          { name: "Feature 2", available: true },
          { name: "Feature 3", available: true },
          { name: "Feature 4", available: true },
          { name: "Feature 5", available: true },
          { name: "Feature 6", available: true },
        ],
      },
    ],
  },
];
export const staffsHeader: tableHeaders[] = [
  { text: "Full Name", width: 240 },
  { text: "Email Adress", width: 240 },
  { text: "Phone number", width: 180 },
  { text: "Position", width: 100 },
  { text: "Location", width: 100 },
];
export const staffsList: staffsListProps[] = [
  {
    id: 1,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 2,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 3,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 4,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 5,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 6,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 7,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 8,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 9,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 10,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 11,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 12,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 13,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 14,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 15,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 16,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
  {
    id: 17,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    position: "Teacher",
    location: "Lagos",
  },
];

export const singleStaffDetails = {
  user: {
    name: "Adedamola Alegbe-James",
    gender: "Male",
    dob: "23/09/1998",
    telephone: "08098309887",
    email: "Jaiyeolaosanyin@gmail.com",
    address: "5, Alade Crescent, Sabo, Kampala, Uganda",
    class: "JSS 2",
  },
  nextOfKin: {
    name: "Alage-James",
    gender: "Male",
    dob: "23/09/1998",
    telephone: "08098309887",
    email: "Jaiyeolaosanyin@gmail.com",
    address: "5, Alade Crescent, Sabo, Kampala, Uganda",
  },
  role: {
    role: "Teacher",
    class: "JSS 2",
    subject: ["Literature in English", "Yoruba"],
  },
  accountInfo: {
    bank: "Union Bank",
    account_name: "Adewale Ayuba",
    account_number: "0987654321",
  },
};

export const staffEmploymentRecordHeaders: tableHeaders[] = [
  { text: "Date", width: 200 },
  { text: "Title", width: 200 },
  { text: "Status", width: 200 },
];

export const staffEmploymentRecord: StaffEmploymentRecordProps[] = [
  { date: "02/09/2023", title: "Birth Certificate", link: "" },
  { date: "02/09/2023", title: "WAEC Certificate", link: "" },
  { date: "02/09/2023", title: "University Degree", link: "" },
  { date: "02/09/2023", title: "Change of name", link: "" },
];

export const staffLessonNoteHeaders: tableHeaders[] = [
  { text: "Session", width: 180 },
  { text: "Term", width: 120 },
  { text: "Subject", width: 200 },
  { text: "Status", width: 120 },
];

export const staffLessonNotes: StaffLessonNotesProps[] = [
  {
    session: "2022/2023",
    term: "First",
    subject: "English Language",
    completed: false,
  },
  {
    session: "2022/2023",
    term: "Second",
    subject: "Mathematics",
    completed: true,
  },
  {
    session: "2022/2023",
    term: "First",
    subject: "Biology",
    completed: true,
  },
  {
    session: "2022/2023",
    term: "Second",
    subject: "French",
    completed: false,
  },
  {
    session: "2022/2023",
    term: "First",
    subject: "Yoruba Language",
    completed: true,
  },
  {
    session: "2022/2023",
    term: "Second",
    subject: "Chemistry",
    completed: true,
  },
  {
    session: "2022/2023",
    term: "First",
    subject: "Physics",
    completed: false,
  },
];

export const recentTransactionsHeaders: tableHeaders[] = [
  { text: "Date", width: 120 },
  { text: "Transaction Name", width: 200 },
  { text: "Recepient", width: 200 },
  { text: "Amount(NGN)", width: 120 },
  { text: "Status", width: 160 },
];

export const bursaryTransactions: bursaryTransactionsProps[] = [
  {
    date: "14-08-23",
    transactionName: "Restocking of sick-bay",
    recepient: "Alpha-Zeus Pharmacy",
    amount: 100000,
    success: false,
  },
  {
    date: "14-08-23",
    transactionName: "Restocking of sick-bay",
    recepient: "Alpha-Zeus Pharmacy",
    amount: 100000,
    success: false,
  },
  {
    date: "14-08-23",
    transactionName: "Restocking of sick-bay",
    recepient: "Alpha-Zeus Pharmacy",
    amount: 100000,
    success: true,
  },
  {
    date: "14-08-23",
    transactionName: "Restocking of sick-bay",
    recepient: "Alpha-Zeus Pharmacy",
    amount: 100000,
    success: false,
  },
  {
    date: "14-08-23",
    transactionName: "Restocking of sick-bay",
    recepient: "Alpha-Zeus Pharmacy",
    amount: 100000,
    success: true,
  },
];
