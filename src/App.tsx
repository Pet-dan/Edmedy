import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// General
import Landing from "./pages/Landing";
import FAQ from "./pages/Faq";
import Error from "./pages/404";
import Password from "./pages/PasswordReset";
import Preloader from "./components/Preloader";
import Signup from "./pages/SignUp";

// Admin
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Bursary from "./pages/Admin/Bursary";
import AdminCalendar from "./pages/Admin/AdminCalendar";
import AdminSettings from "./pages/Admin/AdminSettings";
import Sickbay from "./pages/Admin/Sickbay";
import Staffs from "./pages/Admin/Staffs/Staffs";
import AddStaff from "./pages/Admin/Staffs/AddStaff";
import EditStaff from "./pages/Admin/Staffs/EditStaff";
import AdminStore from "./pages/Admin/AdminStore";
import Students from "./pages/Admin/Students/Students";
import SingleStudent from "./pages/Admin/Students/SingleStudent";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Generators from "./pages/Admin/Generators";

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
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return loading && location.pathname === "/" ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Landing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/password-reset" element={<Password />} />
      <Route path="/admin/">
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="generator" element={<Generators />} />
        <Route path="staffs/">
          <Route index element={<Staffs />} />
          <Route path=":id" element={<SingleStaff />} />
          <Route path="new" element={<AddStaff />} />
          <Route path="edit/:id" element={<EditStaff />} />
        </Route>
        <Route path="students/">
          <Route index element={<Students />} />
          <Route path=":id" element={<SingleStudent />} />
        </Route>
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
