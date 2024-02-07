import React, {useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "../elements/Button";
import { Navbar } from "../elements/Navbar.js";
import {Carousel} from "./Carousel.js"
import "../../css/style.css";
import "../../css/phonecss.css";
import "../../css/laptopcss.css";
import { PaymentCalculator } from "./PaymentCalculator";
import {Footer} from "../elements/Footer.js"
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import ReactGA from 'react-ga4';

// Initialize react-ga with your tracking ID

const Home = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [selectedCarousel, setSelectedCarousel] = useState(1)
  const socialMediaPlatforms = ['LinkedIn', 'FB', 'Instagram', 'Twitter', 'Snapchat', 'TikTok'];
  const userAgent = navigator.userAgent.toString()

  useEffect(() => {
        if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") {
  ReactGA.event('page_view', {
    page_title: window.location.pathname + window.location.search,
    page_location: window.location.pathname + window.location.search,
  });
    }
    if (socialMediaPlatforms.some(platform => userAgent.includes(platform))) toast.error("Our app is unusable in an embedded browser, please open your preferred browser (Google, Safari, etc) and go to jybe.ca")
  },[])

  return (
    <div className="index">
      <div className="div-2">
      <Toaster
              toastOptions={{
                className: '',
                style: {
                  marginTop: '86px',
                  padding: '16px'
                },
              }}
            />
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <p className="text-wrapper">Unlock Your Digital World With Jybe</p>
                  <p className="p">We purchase you a cheaper annual subscription outright, and you enjoy the lower monthly cost</p>
                </div>
                <Button
                  className="button-instance onehunna"
                  icon="false"
                  size="lg"
                  state="default"
                  text="Start Jybing"
                  type="primary"
                  onClick={() => 
                    socialMediaPlatforms.some(platform => userAgent.includes(platform)) ? 
                    toast.error("Our app is unusable in an embedded browser, please open your preferred browser (Google, Safari, etc) and go to jybe.ca") :
                    loginWithRedirect({
                      openUrl: () => window.location.replace("/userinfo"),
                      authorizationParams : {
                        prompt: 'select_account'
                      }
                    })
                  }
                />
              </div>
              <div className="img-3">
                <img 
                  src="/savingswoman.png"
                  className="savings-woman"
                />
              </div>
            </div>
            <div className="group">
              <div className="overlap-group-2">
                <img
                  className="polygon"
                  alt="Polygon"
                  //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-1.svg"
                  src="/yellow-triangle.png"
                />
                <img
                  className="polygon-2"
                  alt="Polygon"
                  //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-2.svg"
                  src="/red-triangle.png"
                />
                <img
                  className="polygon-3"
                  alt="Polygon"
                  //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-3.svg"
                  src="/blue-triangle.png"
                />
              </div>
            </div>
            <img
              className="group-2"
              alt="Group"
              //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/group-3@2x.png"
                src="Group-3.png"
            />
          </div>
          <PaymentCalculator/>
          <div className="frame-23">
            <div className="text-wrapper-2">Streamline your Digital Subscriptions</div>
            <div className="div-3">
              <div className="div-5">
                <div className="heading">
                  <div className="sub-header">Cheaper Subscriptions, Every Month</div>
                  <p className="p">
                    Forget expensive services - Pay for your annual subscriptions with the jybe card and enjoy the
                    cheaper monthly payments.
                  </p>
                </div>
                <img src="/streamline.png" className="img-4"/>
              </div>
            </div>
            <div className="div-3">
              <div className="div-50">
                <img className="img-4" src="oneplatform.png"   />
                <div className="heading-70">
                  <p className="sub-header">One Platform, to Track All Your Subscriptions</p>
                  <p style={{width:"30vw"}} className="p">
                    Manage all of your subscriptions, track payments and monitor your savings on one simple platform.
                  </p>
                  <Button
                    className="button-instance seventy"
                    icon="false"
                    size="lg"
                    state="default"
                    text="Start Jybing"
                    type="primary"
                    onClick={() => 
                      socialMediaPlatforms.some(platform => userAgent.includes(platform)) ? 
                      toast.error("Our app is unusable in an embedded browser, please open your preferred browser (Google, Safari, etc) and go to jybe.ca") :
                      loginWithRedirect({
                        openUrl: () => window.location.replace("/userinfo"),
                        authorizationParams : {
                          prompt: 'select_account'
                        }
                      })
                  }
                  />
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-5">
                <div className="heading">
                  <div className="sub-header">Benefits For Subscription Businesses</div>
                  <p className="p">
                    Offering Jybe at your business&#39;s check out you offer your customers ultimate payment
                    flexibility, increasing your overall subscribers as the percentage of customers picking long-term
                    commitments that pay upfront.
                  </p>
                </div>
                <img className="img-4" src="/benifits.png"/>
              </div>
            </div>
          </div>
          {/* <div className="div-3" > */}
          <div className="section">
            <div className="div-8">
              <div className="frame-36">
                <div className="heading-2">
                  <div style={{marginTop:"0px"}} className="text-wrapper-2">How Jybe works</div>
                </div>
                <Carousel props={selectedCarousel} />
                <div className="frame-39">
                  <div onClick={() => setSelectedCarousel(1)} className="carousel-card" style={{outline: selectedCarousel === 1 &&"2px solid #1A4AB1"}} >
                      <div className="carousel-header">Pick a subscription</div>
                      <div className="carousel-paragraph">Find your favorite subscription that offers an annual subscription at a discounted price.</div>
                  </div>
                  <div onClick={() => setSelectedCarousel(2)} className="carousel-card" style={{outline: selectedCarousel === 2 &&"2px solid #1A4AB1"}} >
                      <div className="carousel-header">Create Virtual Card</div>
                      <div className="carousel-paragraph">Enter the price of that discounted subscription and Jybe will issue you a virtual card for that amount.</div>
                  </div>
                  <div onClick={() => setSelectedCarousel(3)}className="carousel-card" style={{outline: selectedCarousel === 3 &&"2px solid #1A4AB1"}}>
                      <div className="carousel-header">Pay with Jybe</div>
                      <div className="carousel-paragraph">Take your Jybe Card to the checkout of your subscription and let Jybe pay it for you!</div>
                  </div>
                  <div onClick={() => setSelectedCarousel(4)} className="carousel-card" style={{outline: selectedCarousel === 4 &&"2px solid #1A4AB1"}}>
                      <div className="carousel-header">Enjoy Monthly Payments</div>
                      <div className="carousel-paragraph">You'll pay Jybe back in convenient cheaper monthly payments.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="div-3">
            <div className="frame-40">
              <div className="state">
                <div className="text-wrapper-20">Over 20%</div>
                <div className="text-wrapper-21">Savings for digital subscriptions</div>
              </div>
              <div className="state-2">
                <div className="text-wrapper-20">Save $892.00</div>
                <p className="text-wrapper-21">
                  The average American switching to jybe will save $74/month or $892/year
                </p>
              </div>
              <div className="state-3">
                <div className="text-wrapper-20">Over 20%</div>
                <p className="text-wrapper-21">Increase in total subscriptions for subscription business</p>
              </div>
              <div className="state-4">
                <div className="text-wrapper-20">Over 20%</div>
                <p className="text-wrapper-21">Increase of subscribers opting for long-term commitments</p>
              </div>
            </div>
          </div>
        <Footer/>
        </div>
        <Navbar
          className="navbar-instance"
          logo="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-2.svg"
        />
      </div>
    </div>
  )
};

export default Home;
