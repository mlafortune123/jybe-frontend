import React from "react";
import { Button } from "../elements/Button";
import "./MyAccount.css";
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";

const MyAccount = () => {
  return (
    <div className="ma-index">
      <div className="ma-overlap-wrapper">
        <div className="overlap">
          {/* <div className="overlap-group">
            <div className="rectangle" />
            <div className="group">
              <div className="div">
                <div className="text-wrapper">My Cards</div>
                <img
                  className="img"
                  alt="Wallet"
                  src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/wallet-2.svg"
                />
              </div>
              <div className="group-2">
                <div className="text-wrapper">Get Help</div>
                <img
                  className="img"
                  alt="Chat"
                  src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/chat-4.svg"
                />
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="img"
                    alt="Home"
                    src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/home-5.svg"
                  />
                  <div className="text-wrapper-2">Home</div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper">Subscriptions</div>
                <img
                  className="img"
                  alt="Calendar"
                  src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/calendar-1.svg"
                />
              </div>
            </div>
            <div className="frame">
              <div className="frame-2">
                <img
                  className="image"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-4@2x.png"
                />
                <p className="you-ve-saved-to">
                  <span className="span">You’ve saved </span>
                  <span className="text-wrapper-3">$167</span>
                  <span className="span"> to date</span>
                </p>
              </div>
              <div className="frame-wrapper">
                <div className="frame-3">
                  <img
                    className="image-2"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-3.png"
                  />
                  <p className="you-ve-saved">
                    <span className="text-wrapper-4">You’ve saved </span>
                    <span className="text-wrapper-3">$567</span>
                    <span className="text-wrapper-4"> Yearly</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group-4">
              <img
                className="logo"
                alt="Logo"
                src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/logo@2x.png"
              />
              <div className="frame-4">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/vector.svg"
                />
                <div className="text-wrapper-5">Michael!</div>
              </div>
              <Button
                className="button-instance"
                icon="false"
                size="lg"
                state="default"
                text="Apply For More"
                type="primary"
              />
            </div>
          </div> */}
          <div className="frame-5">
            <div className="frame-6">
              <div className="group-5">
                <p className="hi-michael-you-save">
                  <span className="text-wrapper-6">Hi,</span>
                  <span className="text-wrapper-7">&nbsp;</span>
                  <span className="text-wrapper-8">Michael! You save </span>
                </p>
                <div className="group-6">
                  <div className="overlap-2">
                    <div className="text-2">
                      <div className="text-wrapper-9">$587</div>
                      <div className="text-wrapper-10">Each Year</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="overlap-3">
                        <div className="rectangle-3" />
                        <img
                          className="mask-group"
                          alt="Mask group"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="overlap-group-3">
                      <div className="save-products">
                        <div className="text-3">
                          <div className="text-wrapper-9">$267</div>
                          <div className="text-wrapper-10">Each Month</div>
                        </div>
                        <div className="rectangle-4" />
                      </div>
                      <img
                        className="mask-group-2"
                        alt="Mask group"
                        src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-8">
                {/* <div className="frame-7">
                  <div className="frame-8">
                    <div className="group-9">
                      <div className="frame-9">
                        <div className="text-wrapper-11">January</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9.svg"
                        />
                        <div className="group-10">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-2@2x.png"
                          />
                          <div className="group-12">
                            <div className="overlap-group-5">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">3 Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-4"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/ellipse-219@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">February</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-13">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">March</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-13">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">April</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-14">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-5@2x.png"
                          />
                          <div className="group-12">
                            <div className="overlap-group-5">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">3 Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-4"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="image-5"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/ellipse-219@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-8">
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">May</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-13">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">June</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-13">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">July</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-10">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                          <div className="group-12">
                            <div className="overlap-group-5">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">3 Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-4"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="ellipse"
                            alt="Ellipse"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/ellipse-219@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">August</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-15">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-6"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-9@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-8">
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">September</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-13">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">October</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-16">
                          <div className="group-11">
                            <div className="overlap-group-4">
                              <div className="text-wrapper-12">$9.99</div>
                              <div className="text-wrapper-13">Monthly</div>
                            </div>
                          </div>
                          <img
                            className="image-3"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="image-7"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                          <img
                            className="img-2"
                            alt="Mask group"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-5@2x.png"
                          />
                          <div className="group-17">
                            <div className="group-18">
                              <div className="overlap-group-5">
                                <div className="text-wrapper-12">$9.99</div>
                                <div className="text-wrapper-13">3 Monthly</div>
                              </div>
                            </div>
                            <img
                              className="img-2"
                              alt="Ellipse"
                              src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/ellipse-219@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">November</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-19">
                          <div className="group-20">
                            <div className="group-11">
                              <div className="overlap-group-4">
                                <div className="text-wrapper-12">$9.99</div>
                                <div className="text-wrapper-13">Monthly</div>
                              </div>
                            </div>
                            <img
                              className="img-2"
                              alt="Mask group"
                              src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-5@2x.png"
                            />
                          </div>
                          <img
                            className="image-8"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-9">
                      <div className="frame-10">
                        <div className="text-wrapper-11">December</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/line-9-1.svg"
                        />
                        <div className="group-19">
                          <div className="group-20">
                            <div className="group-11">
                              <div className="overlap-group-4">
                                <div className="text-wrapper-12">$9.99</div>
                                <div className="text-wrapper-13">Monthly</div>
                              </div>
                            </div>
                            <img
                              className="img-2"
                              alt="Mask group"
                              src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/mask-group-5@2x.png"
                            />
                          </div>
                          <img
                            className="image-8"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/image-8.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="group-21">
              <div className="frame-11">
                <div className="text-wrapper-14">Your Subscriptions</div>
                <div className="frame-12">
                  <img
                    className="frame-13"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/frame-1597885311.svg"
                  />
                  <div className="frame-14">
                    <div className="text-wrapper-15">Plan</div>
                    <div className="frame-15">
                      <div className="text-wrapper-16">Monthly</div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Charges</div>
                    <div className="frame-16">
                      <div className="text-wrapper-17">$9.99</div>
                      <div className="text-wrapper-18">/ month</div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Next Payment</div>
                    <div className="frame-15">
                      <div className="text-wrapper-16">21st Oct</div>
                    </div>
                  </div>
                </div>
                <div className="frame-12">
                  <img
                    className="frame-13"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/64e3ab5e179fd75deb1ba6bd/releases/65433144d453a105b1df3015/img/frame-1597885310.svg"
                  />
                  <div className="frame-14">
                    <div className="text-wrapper-15">Plan</div>
                    <div className="frame-15">
                      <div className="text-wrapper-16">3 Monthly</div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Charges</div>
                    <div className="frame-16">
                      <div className="text-wrapper-17">$13.99</div>
                      <div className="text-wrapper-18">/ month</div>
                    </div>
                  </div>
                  <div className="frame-14">
                    <div className="text-wrapper-15">Next Payment</div>
                    <div className="frame-15">
                      <div className="text-wrapper-16">25th Oct</div>
                    </div>
                  </div>
                </div>
                <Button
                  className="design-component-instance-node"
                  icon="false"
                  size="lg"
                  state="default"
                  text="Add New Subscription"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default MyAccount