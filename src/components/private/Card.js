import React, { useState, useEffect, useContext } from 'react';
import { Button } from "../elements/Button";
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { AccountContext } from '../../ProtectedRoute';
import toast, { Toaster } from 'react-hot-toast';
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
      }
    })
      .then(response => {
        if (response.status == 401) window.location.reload()
        if (response.status === 500) toast.error("The requested service is currently unavailable at the moment.")
        return response.json()
      })
      .then(res => {
        if (res.error) {
          if (res.error == "Card may already exist") {
            fetch(`${API_URL}/orders/getcard`, {
              method: "GET",
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
              .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status === 500) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
              })
              .then(res => {
                if (res.error) toast.error(res.error)
                else setCardInfo(res)
              })
          }
          else toast.error(res.error)
        }
        else setCardInfo(res)
      })
  }, [accessToken])

  // const cardInfo = {
  //   img: '1234 1234 2134 1234',
  //   cvv: 420,
  //   expiry: '03/24',
  //   name: "Michael Lafortune"
  // }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success(`${text} copied`)
  };

  return (
    <div className="index">
      <div className="div-2">
        <div className="body">
          <div className="card-section">
            <Toaster
              toastOptions={{
                className: '',
                style: {
                  marginTop: '86px',
                  padding: '16px'
                },
              }}
            />
            {cardInfo ? <div className="card-div">
              <div className="frame-2">
                <div className='card-header-div'>
                  <img
                    className="microsoft-fluentui"
                    alt="Microsoft fluentui"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64f4e6be3ac93d9f81e22863/img/microsoft-fluentui-emoji-3d-party-popper-3d-1.svg"
                  />
                  <div className="card-text-wrapper">Your Virtual Card</div>
                  <img
                    className="microsoft-fluentui"
                    alt="Microsoft fluentui"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64f4e6be3ac93d9f81e22863/img/microsoft-fluentui-emoji-3d-party-popper-3d-1.svg"
                  />
                </div>
                <p className="p" style={{ margin: '16px' }} >
                  That's it! Take this card to buy your annual subscription and Jybe will bill you back monthly. Click on any information on the card to copy it
                  {/* Number: {cardInfo.img}
                  Expiry: {cardInfo.expiry}
                  CVV: {cardInfo.cvv} */}
                </p>
              </div>
              <div className="jybe-virtual-card-wrapper">
                <img
                  className="jybe-virtual-card"
                  alt="Jybe virtual card"
                  src="/card.png"
                />
                <div className='overlay card-img'onClick={() => copyToClipboard(cardInfo.img)} >
                  {cardInfo.img}
                </div>
                <div className='overlay expiry'onClick={() => copyToClipboard(cardInfo.expiry)} >
                  {cardInfo.expiry}
                </div>
                <div className='overlay name' onClick={() => copyToClipboard(cardInfo.name)}>
                  {cardInfo.name}
                </div>
                <div className='cvv' onClick={() => copyToClipboard(cardInfo.cvv)}>
                  {cardInfo.cvv}
                </div>
                <img
                  className="jybe-virtual-card"
                  alt="Jybe virtual card"
                  src="/cardback.png"
                />
              </div>
            </div>
              :
              <div className='card-loading-div' style={{ marginTop: '17vh' }} >
                <div style={{ textAlign: 'center', marginBottom: '20px' }} >
                  Your card is being created! Please hold
                </div>
                <img style={{ height: '73vh' }} src="/loading.gif" />
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