import React from "react";
import { Route, Routes } from "react-router-dom";
// General
import Landing from "./pages/Landing";
import FAQ from "./pages/Faq";
import Error from "./pages/404";
// Admin
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Bursary from "./pages/Admin/Bursary";
import AdminCalendar from "./pages/Admin/AdminCalendar";
import AdminSettings from "./pages/Admin/AdminSettings";
import Sickbay from "./pages/Admin/Sickbay";
import Staffs from "./pages/Admin/Staffs/Staffs";
import AdminStore from "./pages/Admin/AdminStore";
import Students from "./pages/Admin/Students";
import SubscriptionPlans from "./pages/SubscriptionPlans";
// Parents
import Kids from "./pages/Parent/Kids";
import ParentCalendar from "./pages/Parent/ParentCalendar";
import ParentSettings from "./pages/Parent/ParentSettings";
import ParentStore from "./pages/Parent/ParentStore";
import Payment from "./pages/Parent/Payment";

// Student
import Profile from "./pages/Student/Profile";
import Scores from "./pages/Student/Scores";
import StudentCalendar from "./pages/Student/StudentCalendar";
import StudentSettings from "./pages/Student/StudentSettings";

// Teacher
import Class from "./pages/Teacher/Class";
import TeacherCalendar from "./pages/Teacher/TeacherCalendar";
import TeacherSettings from "./pages/Teacher/TeacherSettings";
import Teachings from "./pages/Teacher/Teachings";
import SingleStaff from "./pages/Admin/Staffs/SingleStaff";

function App() {
  return (
    <Routes>
      <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Landing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/admin/">
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="staffs/">
          <Route index element={<Staffs />} />
          <Route path=":id" element={<SingleStaff />} />
        </Route>
        <Route path="students" element={<Students />} />
        <Route path="calendar" element={<AdminCalendar />} />
        <Route path="sick-bay" element={<Sickbay />} />
        <Route path="bursary" element={<Bursary />} />
        <Route path="store" element={<AdminStore />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route path="/parent/">
        <Route path="kids" element={<Kids />} />
        <Route path="calendar" element={<ParentCalendar />} />
        <Route path="settings" element={<ParentSettings />} />
        <Route path="store" element={<ParentStore />} />
        <Route path="payment" element={<Payment />} />
      </Route>
      <Route path="/teacher/">
        <Route path="calendar" element={<TeacherCalendar />} />
        <Route path="settings" element={<TeacherSettings />} />
        <Route path="teachings" element={<Teachings />} />
        <Route path="class" element={<Class />} />
      </Route>
      <Route path="/student/">
        <Route path="calendar" element={<StudentCalendar />} />
        <Route path="settings" element={<StudentSettings />} />
        <Route path="scores" element={<Scores />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
