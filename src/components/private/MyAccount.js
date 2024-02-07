import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from '../../ProtectedRoute';
import "./MyAccount.css";
import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { RightBody } from "./components/RightBody";
import { Subscription } from "./components/Subscription";
import ReactGA from 'react-ga4';
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const context = useContext(AccountContext);
  const { accountContext, user, accessToken, refreshToken, refreshTheClock } = context
  const [activeOrders, setActiveOrders] = useState()
  const [monthlySavings, setMonthlySavings] = useState()
  const [totalSavings, setTotalSavings] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") {
        ReactGA.event('page_view', {
            page_title: window.location.pathname + window.location.search,
            page_location: window.location.pathname + window.location.search,
        });
    }
}, [])

useEffect(() => {
  accountContext && accountContext.activeOrders && setActiveOrders(accountContext.activeOrders)
}, [accountContext])

function monthsPassedSince(timestamp) {
  // Convert the timestamp to a Date object
  const startDate = new Date(timestamp);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in months
  const monthsPassed = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  console.log(monthsPassed)
  return monthsPassed;
}

useEffect(() => {
  if (activeOrders) {
    const monthly = activeOrders.reduce((a,b) => (a.og_monthly_cost - (a.og_jybe_cost/100)) + (b.og_monthly_cost - (b.og_jybe_cost/100)))
    const totalSavings = activeOrders.reduce((a,b) => ((a.og_monthly_cost - (a.og_jybe_cost/100)) * monthsPassedSince(a.created_at)) + ((b.og_monthly_cost - (b.og_jybe_cost/100))* monthsPassedSince(b.created_at)))
    setMonthlySavings(monthly)
    setTotalSavings(totalSavings)
  }
}, [activeOrders])

  return (
    <div class="container">
      <Header userInfo={accountContext} />

      <div class="content-wrapper">
        {totalSavings && <Aside totalSavings={totalSavings}/>}

        <div class="content">
          <div>
            <Subscription activeOrders={activeOrders} />
          </div>

          {monthlySavings && <RightBody {...{monthlySavings, activeOrders}} />}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;