import React from "react";
import month from "../images/month.svg";
import calender from "../images/calender.svg";
import Calendar from "./Calendar";
export const RightBody = ({monthlySavings, activeOrders}) => {

  return (
    <div class="right">
      <div class="right-top">
        <p>
          <span>Hi,</span> Michael! You save
        </p>
        {monthlySavings && <div>
          <div>
            <div class="img-wrapper">
              <img className="ma-img" src={month} alt="" />
            </div>
            <div class="rt-content">
              <p>${monthlySavings.toFixed(2)}</p>
              <p>Each Month</p>
            </div>
          </div>

          <div>
            <div class="img-wrapper">
              <img className="ma-img" src={calender} alt="" />
            </div>
            <div class="rt-content">
              <p>${(monthlySavings*12).toFixed(2)}</p>
              <p>Each Year</p>
            </div>
          </div>
        </div>}
      </div>
      <Calendar subscriptions={activeOrders}/>
      {/* <div class="monthly-plan">
        <div class="plan-wrapper">
          <div>
            <h5>January</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>

              <div class="plan">
                <div>
                  <div class="company-logo company-l2"></div>
                  <p>
                    $9.99 <br />
                    <span>3 Monthly</span>
                  </p>
                </div>
                <div class="tick-img img9"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>February</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>March</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>April</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>

              <div class="plan">
                <div>
                  <div class="company-logo company-l2"></div>
                  <p>
                    $9.99 <br />
                    <span>3 Monthly</span>
                  </p>
                </div>
                <div class="tick-img img9"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>May</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>June</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>July</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>

              <div class="plan">
                <div>
                  <div class="company-logo company-l2"></div>
                  <p>
                    $9.99 <br />
                    <span>3 Monthly</span>
                  </p>
                </div>
                <div class="tick-img img9"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>August</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>September</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>October</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>

              <div class="plan">
                <div>
                  <div class="company-logo company-l2"></div>
                  <p>
                    $9.99 <br />
                    <span>3 Monthly</span>
                  </p>
                </div>
                <div class="tick-img img9"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>November</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="plan-wrapper">
          <div>
            <h5>December</h5>
            <div class="line"></div>
            <div class="plan-content">
              <div class="plan">
                <div>
                  <div class="company-logo company-l1"></div>
                  <p>
                    $9.99 <br />
                    <span>Monthly</span>
                  </p>
                </div>
                <div class="tick-img img8"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
