import React, { useState, useEffect, useContext } from 'react';
import { Button } from "../elements/Button";
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { AccountContext } from '../../ProtectedRoute';
import "./card.css"
const API_URL = process.env.REACT_APP_API_URL
const Card = () => {
  const context = useContext(AccountContext);
  const { accountContext, setAccountContext, user, accessToken, navigate } = context
  const [cardInfo, setCardInfo] = useState()
useEffect(() => {
  accessToken && fetch(`${API_URL}/orders/activate`, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }})
    .then(response => response.json())
    .then(res => setCardInfo(res))
},[accessToken])

return (
    <div className="index">
    <div className="div-2">
      <div className="body">
        <div className="section">
          {cardInfo ? <div className="div-3">
            <img
              className="microsoft-fluentui"
              alt="Microsoft fluentui"
              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64f4e6be3ac93d9f81e22863/img/microsoft-fluentui-emoji-3d-party-popper-3d-1.svg"
            />
            <div className="frame-2">
              <div className="text-wrapper">Your Virtual Card</div>
              <p className="p">
                That's it! Take this card to buy your annual subscription and Jybe will bill you back monthly. Warning: this information will no longer be available once you leave this page
              </p>
            </div>
            <div className="jybe-virtual-card-wrapper">
              {cardInfo.img}
              {/* <img
                className="jybe-virtual-card"
                alt="Jybe virtual card"
                src={cardInfo.img}
              /> */}
            </div>
            <div>
              Expiry: {cardInfo.expiry}
              Cvv: {cardInfo.cvv}
            </div>
            {/* <div className="button-frame">
              <Button
                className="button-instance"
                icon="false"
                size="lg"
                state="default"
                text="Go to Dashbaord"
                type="outlined"
              />
              <Button
                className="button-2"
                icon="false"
                size="lg"
                state="default"
                text="Buy Subscriptions"
                type="primary"
              />
            </div> */}
          </div> 
          : 
          <div>
            <div>
              Your card is being created! Please hold
            </div>
            <img src="/loading.gif" />
          </div>  
            }
        </div>
          </div>
                <Footer />
            </div>
            <Navbar />
        </div>
)
}

export default Card;