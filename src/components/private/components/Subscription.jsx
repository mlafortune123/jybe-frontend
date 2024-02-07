import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from './CompanyLogo';
export const Subscription = ({activeOrders}) => {
  const navigate = useNavigate();
  function calculateNextPaymentDate(date) {
    // Get the current date
    const currentDate = new Date();
  
    // Assuming the original date of purchase is hardcoded as '2024-01-18T04:24:21.856Z'
    const originalDateOfPurchase = new Date(date);
  
    // Get the day of the month of the original purchase
    const originalDayOfMonth = originalDateOfPurchase.getDate();
  
    // Calculate the next payment date
    let nextPaymentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), originalDayOfMonth);
  
    // If the next payment date has already passed, move to the next month
    if (currentDate > nextPaymentDate) {
      nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
    }
  
    // Format the date to display as "dd MMM"
    const options = { day: 'numeric', month: 'short' };
    return nextPaymentDate.toLocaleDateString('en-US', options);
  }

  //const [nextPaymentDate, setNextPaymentDate] = useState();
  function getDayOfMonth(dateString) {
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    return dayOfMonth;
  }

  return (
    <div class="subscription-wrapper">
      <h1>Your Subscriptions</h1>
      
      {activeOrders && activeOrders.map(order => (
      <div class="subscription">
        <div class="company-info">
        <CompanyLogo imagePath={order.merchant_logo ? order.merchant_logo : "/genericsub.png"}/>
          <div class="company-name">
            <h2>{order.merchant_name}</h2>
          </div>
        </div>
        <div class="plan-saving">
          <div>
            <p>Plan</p>
            <div>
              <p>Monthly</p>
            </div>
          </div>

          <div>
            <p>Charges</p>
            <div>
              <p>
                ${(parseFloat(order.jybe_cost)/100).toFixed(2)} <span>/ month</span>
              </p>
            </div>
          </div>

          <div>
            <p>Next Payment</p>
            <div>
              <p>{calculateNextPaymentDate(order.created_at)}</p>
            </div>
          </div>

          <div>
            <p>Saving</p>
            <div>
              <p>
                ${(order.og_monthly_cost - (order.og_jybe_cost/100)).toFixed(2)} <span>/ month</span>
              </p>
            </div>
          </div>
        </div>
      </div>))}

      {/* <div class="subscription">
        <div class="company-info">
          <div class="company-logo company-l2"></div>
          <div class="company-name">
            <h2>Netflix</h2>
          </div>
        </div>
        <div class="plan-saving">
          <div>
            <p>Plan</p>
            <div>
              <p>3 Monthly</p>
            </div>
          </div>

          <div>
            <p>Charges</p>
            <div>
              <p>
                $13.99 <span>/ month</span>
              </p>
            </div>
          </div>

          <div>
            <p>Next Payment</p>
            <div>
              <p>25th Oct</p>
            </div>
          </div>

          <div>
            <p>Saving</p>
            <div>
              <p>
                $2.59 <span>/ month</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <button onClick={() => navigate("/userinfo") } class="new-sub">Add New Subscription</button>
    </div>
  );
};
