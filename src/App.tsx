import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/404";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Bursary from "./pages/Admin/Bursary";
import Calendar from "./pages/Admin/Calendar";
import Settings from "./pages/Admin/Settings";
import Sickbay from "./pages/Admin/Sickbay";
import Staffs from "./pages/Admin/Staffs";
import Store from "./pages/Admin/Store";
import Students from "./pages/Admin/Students";
import SubscriptionPlans from "./pages/SubscriptionPlans";

import Landing from "./pages/Landing";
import FAQ from "./pages/Faq";
import SignUp from "./pages/SignUp";
import Password from "./pages/PasswordReset"
import Preloader from "./components/Preloader";
function App() {
const [loading, setLoading] = useState(true);
 useEffect(() => {
   setTimeout(() => {
     setLoading(false);
   }, 5000);
 });
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="password-reset" element={<Password />} />
          <Route path="/admin/">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="staffs" element={<Staffs />} />
            <Route path="students" element={<Students />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="sick-bay" element={<Sickbay />} />
            <Route path="bursary" element={<Bursary />} />
            <Route path="store" element={<Store />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
