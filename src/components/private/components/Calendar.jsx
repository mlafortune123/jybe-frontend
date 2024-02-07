import React from 'react';
import CompanyLogo from './CompanyLogo';
function Calendar({ subscriptions }) {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const monthsToShow = months.slice(currentMonthIndex).concat(months.slice(0, currentMonthIndex));

  return (
    <div class="monthly-plan">
      {subscriptions && monthsToShow.map((month, index) => {
        const monthIndex = (currentMonthIndex + index) % 12; // Calculate the actual month index after wrapping around

        const monthSubscriptions = subscriptions.filter(subscription => {
            const createdAtDate = new Date(subscription.created_at);
            const createdAtMonth = createdAtDate.getMonth();
            const createdAtYear = createdAtDate.getFullYear();
  
            // Check if the month of created_at is within a year from the current month
            return createdAtYear === currentYear && Math.abs(createdAtMonth - monthIndex) <= 11;
          });
        
        return (
          <div key={index} className="plan-wrapper">
            <div>
              <h5>{month}</h5>
              <div className="line"></div>
              <div className="plan-content">
                {monthSubscriptions.map((subscription, subIndex) => (
                  <div key={subIndex} className="plan">
                    <div>
                      {/* <div className={`company-logo company-l1`}></div> */}
                      <CompanyLogo imagePath={subscription.merchant_logo ? subscription.merchant_logo : "/genericsub.png"}/>
                      <p>
                        ${(parseFloat(subscription.jybe_cost)/100).toFixed(2)} <br />
                        <span>Monthly</span>
                      </p>
                    </div>
                    <div className={`tick-img img9`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;