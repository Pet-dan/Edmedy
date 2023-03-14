import {
  bursaryTransactionsProps,
  plansProps,
  StaffEmploymentRecordProps,
  StaffLessonNotesProps,
  staffsListProps,
  studentsListProps,
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

export const studentsHeader: tableHeaders[] = [
  { text: "Full Name", width: 240 },
  { text: "Email Adress", width: 240 },
  { text: "Phone number", width: 180 },
  { text: "Class", width: 100 },
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

export const studentsList: studentsListProps[] = [
  {
    id: 1,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 2,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 3,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 4,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 5,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 6,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 7,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 8,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 9,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 10,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 11,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 12,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 13,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 14,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 15,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 16,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
    location: "Lagos",
  },
  {
    id: 17,
    name: "Adedamola Alagbe-James",
    image: profileImage,
    email: "adedamolaalagbe@gmail.com",
    phoneNumber: "08075258288",
    class: "JSS 1",
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
    position: "Teacher",
    class: "JSS 2",
    subject: ["Literature in English", "Yoruba"],
  },
  accountInfo: {
    bank: "Union Bank",
    account_name: "Adewale Ayuba",
    account_number: "0987654321",
  },
};

export const singleStudentDetails = {
  user: {
    name: "Adedamola Alegbe-James",
    gender: "Male",
    dob: "23/09/1998",
    telephone: "08098309887",
    email: "Jaiyeolaosanyin@gmail.com",
    address: "5, Alade Crescent, Sabo, Kampala, Uganda",
    class: "JSS 2",
  },
  parent: {
    name: "Alage-James",
    gender: "Male",
    dob: "23/09/1998",
    telephone: "08098309887",
    email: "Jaiyeolaosanyin@gmail.com",
    address: "5, Alade Crescent, Sabo, Kampala, Uganda",
  },
  tuition: {
    total: 30000,
    paid: 25000,
    balance: 5000,
  },
  sickbayHistory: {
    visits: 15,
    lastVisited: "21/02/2023",
    issueTreated: "Sport Injury",
    nurse: "Jaiye Cynthia",
  },
};

export const studentAttendanceHeaders: tableHeaders[] = [
  { text: "", width: 100 },
  { text: "Mon", width: 70 },
  { text: "Tue", width: 70 },
  { text: "Wed", width: 70 },
  { text: "Thur", width: 70 },
  { text: "Fri", width: 70 },
];

export const studentAttendance = [
  {
    week: 1,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 2,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 3,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 4,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 5,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 6,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 7,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
  {
    week: 8,
    days: [
      { day: "Monday", present: true },
      { day: "Tuesday", present: false },
      { day: "Wednesday", present: true },
      { day: "Thursday", present: true },
      { day: "Friday", present: false },
    ],
  },
];

export const staffEmploymentRecordHeaders: tableHeaders[] = [
  { text: "Title", width: 300 },
  { text: "Status", width: 300 },
];

export const staffEmploymentRecord: StaffEmploymentRecordProps[] = [
  { title: "Birth Certificate", link: "" },
  { title: "WAEC Certificate", link: "" },
  { title: "University Degree", link: "" },
  { title: "Change of name", link: "" },
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
  { text: "", width: 40 },
  { text: "Date", width: 80 },
  { text: "Name", width: 160 },
  { text: "Amount", width: 80 },
  { text: "", width: 100 },
];

export const bursaryTransactions: bursaryTransactionsProps[] = [
  {
    date: "14-08-23",
    name: "Alpha-Zeus Pharmacy",
    amount: 10000,
    transactionType: "in-flow",
  },
  {
    date: "14-08-23",
    name: "Alpha-Zeus Pharmacy",
    amount: 10000,
    transactionType: "in-flow",
  },
  {
    date: "14-08-23",
    name: "Alpha-Zeus Pharmacy",
    amount: 10000,
    transactionType: "out-flow",
  },
  {
    date: "14-08-23",
    name: "Alpha-Zeus Pharmacy",
    amount: 10000,
    transactionType: "in-flow",
  },
  {
    date: "14-08-23",
    name: "Alpha-Zeus Pharmacy",
    amount: 10000,
    transactionType: "out-flow",
  },
];
