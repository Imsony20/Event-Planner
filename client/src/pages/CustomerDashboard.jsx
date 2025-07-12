import React, { useState } from "react";
import Sidebar from "../components/customer/Sidebar";
import Overview from "../components/customer/Overview.jsx";
import Profile from "../components/customer/Profile";
import Bookings from "../components/customer/Bookings";
import Support from "../components/customer/Support";
import Feedback from "../components/customer/Feedback";

const CustomerDashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        
        <div className="border w-full mt-8">
          {active === "overview" && <Overview />}
          {active === "profile" && <Profile />}
          {active === "bookings" && <Bookings />}
          {active === "support" && <Support />}
          {active === "feedback" && <Feedback />}
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;