import React, {useState} from "react";
import { Button } from "../elements/Button";
import { Navbar } from "../elements/Navbar.js";
import Melatonin from "../images/melatonin.png"
import {Carousel} from "./Carousel.js"
import "../../css/style.css";
import { PaymentCalculator } from "./PaymentCalculator";
import {Footer} from "../elements/Footer.js"
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [selectedCarousel, setSelectedCarousel] = useState(1)

  return (
    <div className="index">
      <div className="div-2">
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
                  onClick={() => loginWithRedirect({openUrl: () => window.location.replace("/userinfo")})}
                />
              </div>
              <div className="img-3">
                <img 
                  style={{height:"100%"}}
                  src="/savingswoman.png"
                />
                {/* <img
                  className="card"
                  alt="Card"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card-1@2x.png"
                />
                <img
                  className="star"
                  alt="Star"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/star-3.svg"
                />
                <img
                  className="star-2"
                  alt="Star"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/star-4.svg"
                />
                <img
                  className="card-2"
                  alt="Card"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card-2-1@2x.png"
                />
                <img
                  className="report"
                  alt="Report"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/report-1@2x.png"
                />
                <img 
                  style={{width:"100%"}}
                  className="woman"
                  alt="woman happy with savings"
                  src={Melatonin}
                /> */}
              </div>
            </div>
            <div className="group">
              <div className="overlap-group-2">
                <img
                  className="polygon"
                  alt="Polygon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-1.svg"
                />
                <img
                  className="polygon-2"
                  alt="Polygon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-2.svg"
                />
                <img
                  className="polygon-3"
                  alt="Polygon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/polygon-3.svg"
                />
              </div>
            </div>
            <img
              className="group-2"
              alt="Group"
              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/group-3@2x.png"
            />
          </div>
          <PaymentCalculator/>
          <div className="frame-23">
            <div className="text-wrapper-2">Streamline your Digital Subscriptions</div>
            <div className="div-3">
              <div className="div-5">
                <div className="heading">
                  <div className="text-wrapper">Cheaper Subscriptions, Every Month</div>
                  <p className="p">
                    Forget expensive services - Pay for your annual subscriptions with the jybe card and enjoy the
                    cheaper monthly payments.
                  </p>
                </div>
                <div className="img-4">
                  <div className="overlap-group-4">
                    <div className="dl-beatsnoop" />
                    <img
                      className="price-tag"
                      alt="Price tag"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/price-tag-2-1@2x.png"
                    />
                    <img
                      className="group-3"
                      alt="Group"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/group@2x.png"
                    />
                    <img
                      className="union"
                      alt="Union"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/union.svg"
                    />
                    <div className="group-4" />
                    <img
                      className="test"
                      alt="Test"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/test@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-5">
                <div className="img-4">
                  <div className="overlap-2">
                    <div className="overlap-2">
                      <img
                        className="union-2"
                        alt="Union"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/union-1.svg"
                      />
                      <div className="frame-24">
                        <div className="text-wrapper-11">All Subscriptions</div>
                        <div className="frame-25">
                          <div className="text-wrapper-12">Company</div>
                          <div className="text-wrapper-13">Yearly Subscription</div>
                        </div>
                        <div className="frame-26">
                          <div className="logo-4">
                            <img
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/amazon-1.svg"
                              className="design-component-instance-node-3"
                            />
                            <div className="text-wrapper-14">$240</div>
                          </div>
                          <div className="logo-4">
                            <img
                              className="design-component-instance-node-3"
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-2.svg"
                            />
                            <div className="text-wrapper-14">$173</div>
                          </div>
                          <div className="logo-4">
                            <img
                              className="fill-3"
                              alt="Fill"
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/fill-14-2.svg"
                            />
                            <div className="text-wrapper-14">$157</div>
                          </div>
                          <div className="logo-4">
                            <img
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/adobe-1.svg"
                              className="adobe-2"
                            />
                            <div className="text-wrapper-14">$400</div>
                          </div>
                          <div className="logo-4">
                            <img
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/autodesk-1.svg"
                              className="autodesk-instance"
                            />
                            <div className="text-wrapper-14">$386</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-27">
                        <img
                          className="clip-path-group"
                          alt="Clip path group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/clip-path-group@2x.png"
                        />
                        <div className="text-wrapper-15">Saved On Subscriptions</div>
                        <div className="div-6">
                          <div className="frame-wrapper">
                            <div className="frame-28">
                              <div className="text-wrapper-10">+$1200</div>
                              <div className="text-wrapper-16">/Year</div>
                              <img
                                className="check-mark"
                                alt="Check mark"
                                src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/check-mark.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="frame-29">
                          <div className="text-wrapper-17">With Jybe</div>
                        </div>
                      </div>
                      <img 
                        src="/cube.png"
                        //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-4@2x.png"
                        className="img cube-3" 
                      />
                    </div>
                    {/* <FlatCylinder className="flat-cylinder-2" /> */}
                    <div className={`flat-cylinder flat-cylinder-2`}>
                      <div className="overlap-group">
                        <img
                          className="img-2"
                          alt="Flat cylinder"
                          src="/coin.png"
                          //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/flat-cylinder-02-1@2x.png"
                        />
                        {/* <img
                          className="mask-group-2"
                          alt="Mask group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-6@2x.png"
                        /> */}
                      </div>
                    </div>
                  </div>
                  {/* <Cylinder className="cylinder-2" /> */}
                  <div className={`cylinder cylinder-2`}>
                    <img
                      className="mask-group-3"
                      alt="Mask group"
                      src="/cylinder.png"
                      //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-5@2x.png"
                    />
                  </div>
                </div>
                <div style={{left:"15vw", gap: "8vh"}} className="heading">
                  <p style={{width:"30vw", fontSize:"3.6vw"}} className="text-wrapper">One Platform, to Track All Your Subscriptions</p>
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
                    onClick={() => loginWithRedirect({openUrl: () => window.location.replace("/userinfo")})}
                  />
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-5">
                <div className="heading">
                  <div style={{maxWidth:"40vw"}} className="text-wrapper">Benefits For Subscription Businesses</div>
                  <p className="p">
                    Offering Jybe at your business&#39;s check out you offer your customers ultimate payment
                    flexibility, increasing your overall subscribers as the percentage of customers picking long-term
                    commitments that pay upfront.
                  </p>
                </div>
                <div style={{height:"40vw"}} className="img-4">
                  <div className="overlap-group-4">
                    <div className="overlap-3">
                      <div className="dl-beatsnoop-2" />
                      <div className="frame-30">
                        <img
                          className="mask-group-9"
                          alt="Mask group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-14@2x.png"
                        />
                        <div className="div-7">
                          {/* <Spotify
                            className="design-component-instance-node-2"
                            spotify="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-3.svg"
                          /> */}
                          <div className="logo-4" style={{padding:"12px 0px"}} >
                            <img
                              className="spotify design-component-instance-node-3"
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-2.svg"
                            />
                          </div>
                          <div style={{left:"-5vw"}} className="frame-31">
                            <div className="text-wrapper-18">$22</div>
                            <div className="text-wrapper-19">/month</div>
                          </div>
                        </div>
                        <div className="frame-32">
                          <div className="rectangle-3" />
                        </div>
                        <div className="frame-33">
                          <div className="frame-34">
                            <div className="rectangle-4" />
                          </div>
                          <div className="frame-34">
                            <div className="rectangle-4" />
                          </div>
                        </div>
                        <div className="frame-35">
                          <div style={{backgroundColor:"#FF5874;"}} className="button-2">
                            <div className="text-2">Pay Now</div>
                            {/* <ToggleCheckmark2 className="icon-instance-node" /> */}
                            <svg
                              className={`toggle-checkmark-2 icon-instance-node`}
                              fill="none"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect className="rect" fill="white" height="13.3333" rx="6.66667" width="13.3333" x="1.33301" y="1.33325" />
                              <path
                                className="path"
                                clipRule="evenodd"
                                d="M11.1379 5.86194C11.2629 5.98696 11.3331 6.1565 11.3331 6.33327C11.3331 6.51005 11.2629 6.67959 11.1379 6.80461L7.80461 10.1379C7.67959 10.2629 7.51006 10.3331 7.33328 10.3331C7.1565 10.3331 6.98696 10.2629 6.86195 10.1379L4.86195 8.13794C4.74051 8.0122 4.67331 7.8438 4.67483 7.66901C4.67635 7.49421 4.74646 7.327 4.87007 7.20339C4.99367 7.07979 5.16088 7.00968 5.33568 7.00816C5.51048 7.00664 5.67888 7.07383 5.80461 7.19527L7.33328 8.72394L10.1953 5.86194C10.3203 5.73696 10.4898 5.66675 10.6666 5.66675C10.8434 5.66675 11.0129 5.73696 11.1379 5.86194Z"
                                fill="#1A4AB1"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <img
                        className="union"
                        alt="Union"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/union-2.svg"
                      />
                      <img
                        className="element"
                        alt="Element"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/81f54d3826-1.png"
                      />
                      {/* <Cone className="cone-instance" /> */}
                      <div className={`cone cone-instance`}>
                        <img
                          className="mask-group-4"
                          alt="Mask group"
                          src="yellowcone.png"
                          //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-7@2x.png"
                        />
                      </div>
                      {/* <Helix className="helix-instance" /> */}
                      <div className={`helix helix-instance`}>
                        <img
                          className="mask-group-5"
                          alt="Mask group"
                          src="/helix.png"
                          //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-9@2x.png"
                        />
                      </div>
                    </div>
                    {/* <CubeWrapper className="cube-1" /> */}
                    <div className={`cube-wrapper cube-1`}>
                      <div className="div">
                        {/* <img
                          className="cube-2"
                          alt="Cube"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/cube-02-1@2x.png"
                        /> */}
                        <img
                          className="mask-group-6"
                          alt="Mask group"
                          src="/bluecube.png"
                          //src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-8@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
