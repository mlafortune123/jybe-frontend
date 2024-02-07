import React from "react";
import home from "../images/Home.svg";
import wallet from "../images/Wallet.svg";
import calender from "../images/Calendar.svg";
import chat from "../images/Chat.svg";
import saving from "../images/saving.svg";
import saved from "../images/yearly-saved.svg";
export const Aside = ({totalSavings}) => {
  return (
    <div class="pages-wrapper">
      <div>
        <div class="page-link active">
          <div class="border"></div>
          <a href="/">
            <img className="ma-img" src={home} alt="svg" /> Home
          </a>
        </div>

        <div class="page-link">
          <a href="/card">
            <img className="ma-img" src={wallet} alt="svg" />
            My Card
          </a>
        </div>

        <div class="page-link">
          <a href="/myaccount">
            <img className="ma-img" src={calender} alt="svg" />
            Subscriptions
          </a>
        </div>

        <div class="page-link">
          <a onClick={() => window.open("mailto:michaeltiller@jybe.ca")}>
            <img className="ma-img" src={chat} alt="svg" />
            Get Help
          </a>
        </div>
      </div>
      <div class="yousaved">
        <div>
          <img className="ma-img" src={saving} alt="svg" />
          <p>
            You've saved <span>${totalSavings.toFixed(2)}</span> to date
          </p>
        </div>
        {/* <div>
          <img className="ma-img" src={saved} alt="svg" />
          <p>
            You've saved <span>$567</span> Yearly
          </p>
        </div> */}
      </div>
    </div>
  );
};
