import { ReactElement } from "react";

export interface plansProps {
  duration: "Month" | "Year";
  plan: {
    name: string;
    description: string;
    price: number;
    features: Array<{
      name: string;
      available: boolean;
    }>;
  }[];
}

export interface areaChartsProps {
  day: string;
  amt: number;
}
export interface barChartProps {
  class: string;
  amt: number;
}

export interface staffsListProps {
  id: number;
  name: string;
  image: string;
  email: string;
  phoneNumber: string;
  position: string;
  location: string;
}

export interface tableHeaders {
  text: string;
  width: number;
}

export interface TabsProps {
  title: string;
  component: ReactElement;
}

export interface StaffEmploymentRecordProps {
  date: string;
  title: string;
  link: string;
}

export interface StaffLessonNotesProps {
  session: string;
  term: string;
  subject: string;
  completed: boolean;
}

export interface bursaryTransactionsProps {
  date: string;
  transactionName: string;
  recepient: string;
  amount: number;
  success: boolean;
}
