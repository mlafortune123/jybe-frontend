import React from "react";
import { Button } from "../elements/Button";
import { ConcreteComponentNode } from "../elements/ConcreteComponentNode";
import { Navbar } from "../elements/Navbar.js";
import Melatonin from "../images/melatonin.png"
// import { Cone } from "../../elements/Cone";
// import { Cube } from "../../elements/Cube";
// import { CubeWrapper } from "../../elements/CubeWrapper";
// import { Cylinder } from "../../elements/Cylinder";
// import { DivWrapper } from "../../elements/DivWrapper";
// import { Facebook } from "../../elements/Facebook";
// import { FlatCylinder } from "../../elements/FlatCylinder";
// import { Helix } from "../../elements/Helix";
// import { LinkedIn } from "../../elements/LinkedIn";
// import { Adobe } from "../../elements/Adobe";
// import { Amazon } from "../../elements/Amazon";
// import { Autodesk } from "../../elements/Autodesk";
// import { Pinterest } from "../../elements/Pinterest";
// import { Pyramid } from "../../elements/Pyramid";
// import { Reddit2Octdenoiserbeauty002 } from "../../elements/Reddit2Octdenoiserbeauty002";
// import { Spotify } from "../../elements/Spotify";
// import { SpotifyWrapper } from "../../elements/SpotifyWrapper";
// import { Telegram } from "../../elements/Telegram";
// import { Twitter } from "../../elements/Twitter";
// import { Vimeo } from "../../elements/Vimeo";
// import { VimeoWrapper } from "../../elements/VimeoWrapper";
// import { Vkoctdenoiserbeauty } from "../../elements/Vkoctdenoiserbeauty";
// import { Whatsapp } from "../../elements/Whatsapp";
// import { YouTube } from "../../elements/YouTube";
// import { Youtube } from "../../elements/Youtube";
// import { Zoom } from "../../elements/Zoom";
// import { ToggleCheckmark } from "../../icons/ToggleCheckmark";
// import { ToggleCheckmark1 } from "../../icons/ToggleCheckmark1";
// import { ToggleCheckmark2 } from "../../icons/ToggleCheckmark2";
// import { ToggleCheckmark3 } from "../../icons/ToggleCheckmark3";
import "./style.css";

const Home = () => {
  return (
    <div className="index">
      <div className="div-2">
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <p className="text-wrapper">Unlock Your Digital World With Jybe</p>
                  <p className="p">BNPL (Buy now, pay later) for digital subscriptions</p>
                </div>
                <Button
                  className="button-instance"
                  icon="false"
                  size="lg"
                  state="default"
                  text="Start Jybing"
                  type="primary"
                />
              </div>
              <div className="img-3">
                <img
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
                  className=""
                  alt="woman happy with savings"
                  src={Melatonin}
                />
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
          {/* <div className="div-3">
            <div className="calculator">
              <div className="frame-8">
                <p className="text-wrapper-2">Calculate Your Savings With Jybe</p>
                <p className="text-wrapper-3">
                  Select Company and hit calculate button to see Jybe savings magic for you.
                </p>
              </div>
              <div className="frame-7">
                <div className="frame-9">
                  <div className="brand-list">
                    <div className="text-wrapper-4">Select Company</div>
                    <div className="frame-10">
                      <div className="frame-11">
                        <div className="logo-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="114" height="32" viewBox="0 0 114 32" fill="none">
                            <path d="M107.903 15.4955L114 31.7388C112.203 31.4802 110.406 31.1567 108.577 30.8662L105.142 21.8898L101.612 30.1243C99.8791 29.8337 98.1772 29.7359 96.4444 29.5102L102.639 15.3018L97.022 0.738831H102.222L105.367 8.87552L108.737 0.738831H114L107.903 15.4955ZM92.9145 0.738831H88.1966V28.8971C89.7368 28.994 91.3415 29.0579 92.9145 29.2516V0.738831ZM84.1198 28.5736C79.8197 28.2831 75.5187 28.0255 71.1223 27.9276V0.738831H75.9355V23.3426C78.6963 23.4075 81.4562 23.6331 84.1198 23.762V28.5736ZM65.9867 11.7501V16.5938H59.408V27.6051H54.6574V0.738831H68.1372V5.58249H59.408V11.7501H65.9867ZM46.5694 5.58249V27.8637C44.9647 27.8637 43.3282 27.8637 41.7552 27.9276V5.58249H36.7803V0.738831H51.576V5.58249H46.5694ZM31.5812 16.8514C29.4634 16.8514 26.9595 16.8514 25.1623 16.9493V24.1503C27.9867 23.9557 30.811 23.73 33.6672 23.6331V28.2831L20.3482 29.3494V0.738831H33.6672V5.58249H25.1623V12.1046C27.024 12.1046 29.8802 12.0078 31.5812 12.0078V16.8514ZM4.9104 14.1395V31.0599C3.17766 31.2546 1.63648 31.4802 0 31.7388V0.738831H4.58984L10.8479 18.3381V0.738831H15.6621V29.7359C13.9611 30.0274 12.2283 30.1243 10.3984 30.3819L4.9104 14.1395Z" fill="#F11313"/>
                          </svg>
                          <svg
                            className={`toggle-checkmark`}
                            fill="none"
                            height="25"
                            viewBox="0 0 24 25"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect className="rect" fill="#1A4AB1" height="20" rx="10" width="20" x="2" y="2.23883" />
                            <path
                              className="path"
                              clipRule="evenodd"
                              d="M16.7074 9.03162C16.8949 9.21914 17.0002 9.47345 17.0002 9.73862C17.0002 10.0038 16.8949 10.2581 16.7074 10.4456L11.7074 15.4456C11.5199 15.6331 11.2656 15.7384 11.0004 15.7384C10.7352 15.7384 10.4809 15.6331 10.2934 15.4456L7.29341 12.4456C7.11125 12.257 7.01045 12.0044 7.01273 11.7422C7.01501 11.48 7.12018 11.2292 7.30559 11.0438C7.491 10.8584 7.74181 10.7532 8.00401 10.7509C8.2662 10.7487 8.5188 10.8495 8.70741 11.0316L11.0004 13.3246L15.2934 9.03162C15.4809 8.84415 15.7352 8.73883 16.0004 8.73883C16.2656 8.73883 16.5199 8.84415 16.7074 9.03162Z"
                              fill="white"
                              fillRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="logo-2">
                          <Amazon
                            amazon="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/amazon.svg"
                            className="design-component-instance-node-2"
                          />
                          <img className={`amazon design-component-instance-node-2`} alt="Amazon" src={amazon} />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                        <div className="logo-2">
                          <Spotify
                            className="design-component-instance-node-2"
                            spotify="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify.svg"
                          />
                          <ToggleCheckmark1 className="toggle-checkmark" />
                        </div>
                        <div className="logo-2">
                          <Adobe
                            adobe="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/adobe.svg"
                            className="adobe-instance"
                          />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                        <div className="logo-2">
                          <img
                            className="disney-logo"
                            alt="Disney logo"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/disney--logo-1.svg"
                          />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                        <div className="logo-2">
                          <Zoom
                            className="zoom-instance"
                            zoom="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/zoom.svg"
                          />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                        <div className="logo-2">
                          <YouTube
                            className="you-tube-instance"
                            youTube="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/youtube@2x.png"
                          />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                        <div className="logo-2">
                          <Vimeo
                            className="vimeo-instance"
                            vimeo="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/youtube@2x.png"
                          />
                          <ConcreteComponentNode
                            rectangleClassName="toggle-checkmark-2"
                            stateDefaultLargerClassName="toggle-checkmark-instance"
                            stateProp="default-larger"
                          />
                        </div>
                      </div>
                      <div className="rectangle-wrapper">
                        <div className="rectangle-2" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-12">
                    <div className="frame-13">
                      <div className="frame-14">
                        <div className="text-wrapper-5">Without Jybe</div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-5">With</div>
                        <img
                          className="logo-3"
                          alt="Logo"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo@2x.png"
                        />
                      </div>
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <img
                          className="fill-2"
                          alt="Fill"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/fill-14-1.svg"
                        />
                        <div className="text-wrapper-6">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$10</div>
                        </div>
                      </div>
                      <img
                        className="frame-18"
                        alt="Frame"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/frame-15.svg"
                      />
                      <div className="frame-16">
                        <div className="text-wrapper-7">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$8.3</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <Spotify
                          className="spotify-instance"
                          spotify="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-1.svg"
                        />
                        <div className="text-wrapper-6">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$120</div>
                        </div>
                      </div>
                      <img
                        className="frame-19"
                        alt="Frame"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/frame-15.svg"
                      />
                      <div className="frame-16">
                        <div className="text-wrapper-7">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$100</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-15">
                      <div className="frame-16">
                        <img
                          className="disney-logo"
                          alt="Disney logo"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/disney--logo-1-1.svg"
                        />
                        <div className="text-wrapper-6">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$140</div>
                        </div>
                      </div>
                      <img
                        className="frame-19"
                        alt="Frame"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/frame-15.svg"
                      />
                      <div className="frame-16">
                        <div className="text-wrapper-7">Yearly Subscription</div>
                        <div className="frame-17">
                          <div className="text-wrapper-5">$126</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <Button
                    className="button-instance"
                    icon="false"
                    size="lg"
                    state="default"
                    text="Calculate"
                    type="primary"
                  />
                </div>
                <div className="frame-20">
                  <div className="text-wrapper-8">You’ll save with Jybe</div>
                  <div className="frame-21">
                    <div className="frame-22">
                      <p className="div-4">
                        <span className="span">$30</span>
                        <span className="text-wrapper-9"> Monthly</span>
                      </p>
                    </div>
                    <div className="text-wrapper-10">&amp;</div>
                    <div className="frame-22">
                      <p className="div-4">
                        <span className="span">$360</span>
                        <span className="text-wrapper-9"> Yearly</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img
                  className="pyramid-2"
                  alt="Pyramid"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1@2x.png"
                />
                <img
                  className="mask-group-7"
                  alt="Mask group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group@2x.png"
                />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap">
                <img
                  className="pyramid-3"
                  alt="Pyramid"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1-1@2x.png"
                />
                <img
                  className="mask-group-8"
                  alt="Mask group"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-1@2x.png"
                />
              </div>
            </div>
            <Pyramid
              className="pyramid-instance"
              maskGroup="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-2.png"
              maskGroupClassName="pyramid-2-instance"
            />
          </div> */}
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
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-4@2x.png"
                        className="img cube-3" 
                      />
                    </div>
                    {/* <FlatCylinder className="flat-cylinder-2" /> */}
                    <div className={`flat-cylinder flat-cylinder-2`}>
                      <div className="overlap-group">
                        <img
                          className="img-2"
                          alt="Flat cylinder"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/flat-cylinder-02-1@2x.png"
                        />
                        <img
                          className="mask-group-2"
                          alt="Mask group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-6@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <Cylinder className="cylinder-2" /> */}
                  <div className={`cylinder cylinder-2`}>
                    <img
                      className="mask-group-3"
                      alt="Mask group"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-5@2x.png"
                    />
                  </div>
                </div>
                <div className="heading">
                  <p className="text-wrapper">One Platform, to Track All Your Subscriptions</p>
                  <p className="p">
                    Manage all of your subscriptions, track payments and monitor your savings on one simple platform.
                  </p>
                  <Button
                    className="button-instance"
                    icon="false"
                    size="lg"
                    state="default"
                    text="Start Jybing"
                    type="primary"
                  />
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="div-5">
                <div className="heading">
                  <div className="text-wrapper">Benefits For Subscription Business</div>
                  <p className="p">
                    Offering Jybe at your business&#39;s check out you offer your customers ultimate payment
                    flexibility, increasing your overall subscribers as the percentage of customers picking long-term
                    commitments that pay upfront.
                  </p>
                </div>
                <div className="img-4">
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
                          <div className="logo-4">
                            <img
                              className="spotify design-component-instance-node-3"
                              src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-2.svg"
                            />
                            <div className="text-wrapper-14">$173</div>
                          </div>
                          <div className="frame-31">
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
                          <div className="button-2">
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
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-7@2x.png"
                        />
                      </div>
                      {/* <Helix className="helix-instance" /> */}
                      <div className={`helix helix-instance`}>
                        <img
                          className="mask-group-5"
                          alt="Mask group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-9@2x.png"
                        />
                      </div>
                    </div>
                    {/* <CubeWrapper className="cube-1" /> */}
                    <div className={`cube-wrapper cube-1`}>
                      <div className="div">
                        <img
                          className="cube-2"
                          alt="Cube"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/cube-02-1@2x.png"
                        />
                        <img
                          className="mask-group-6"
                          alt="Mask group"
                          src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-8@2x.png"
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
                  <div className="text-wrapper-2">How Jybe works</div>
                </div>
                <div className="frame-37">
                  <div className="frame-38">
                    <div className="logo-5">
                      {/* <Amazon
                        amazon="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/amazon-2.svg"
                        className="design-component-instance-node-2"
                      /> */}
                      <img className={`amazon design-component-instance-node-2`} alt="Amazon" src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/amazon-2.svg" />;
                      <ConcreteComponentNode
                        rectangleClassName="toggle-checkmark-2"
                        stateDefaultLargerClassName="toggle-checkmark-instance"
                        stateProp="default-larger"
                      />
                    </div>
                    <div className="logo-6">
                      {/* <Spotify
                        className="design-component-instance-node-2"
                        spotify="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-4.svg"
                      /> */}
                      <img
                        className="spotify design-component-instance-node-2"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/spotify-4.svg"
                      />
                      <ConcreteComponentNode
                        rectangleClassName="toggle-checkmark-2"
                        stateDefaultLargerClassName="toggle-checkmark-instance"
                        stateProp="default-larger"
                      />
                    </div>
                    <div className="logo-7">
                      {/* <Adobe
                        adobe="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/adobe-2.svg"
                        className="adobe-instance"
                      /> */}
                      <img className={`adobe adobe-instance`} alt="Adobe" src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/adobe-2.svg" />;
                      <ConcreteComponentNode
                        rectangleClassName="toggle-checkmark-2"
                        stateDefaultLargerClassName="toggle-checkmark-instance"
                        stateProp="default-larger"
                      />
                    </div>
                    <div className="logo-8">
                      <img
                        className="disney-logo-2"
                        alt="Disney logo"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/disney--logo-1-2.svg"
                      />
                      <ConcreteComponentNode
                        rectangleClassName="toggle-checkmark-2"
                        stateDefaultLargerClassName="toggle-checkmark-instance"
                        stateProp="default-larger"
                      />
                    </div>
                    <div className="logo-9">
                      <img
                        className="fill"
                        alt="Fill"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/fill-14-3.svg"
                      />
                      <div className="button-3">
                        <div className="text-3">Selected</div>
                        {/* <ToggleCheckmark3 className="icon-instance-node" /> */}
                        <svg
                          className={`toggle-checkmark-3 icon-instance-node`}
                          fill="none"
                          height="17"
                          viewBox="0 0 16 17"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect className="rect" fill="white" height="13.3333" rx="6.66667" width="13.3333" x="1.33301" y="1.57202" />
                          <path
                            className="path"
                            clipRule="evenodd"
                            d="M11.1379 6.10071C11.2629 6.22573 11.3331 6.39527 11.3331 6.57204C11.3331 6.74882 11.2629 6.91836 11.1379 7.04338L7.80461 10.3767C7.67959 10.5017 7.51006 10.5719 7.33328 10.5719C7.1565 10.5719 6.98696 10.5017 6.86195 10.3767L4.86195 8.37671C4.74051 8.25097 4.67331 8.08257 4.67483 7.90777C4.67635 7.73298 4.74646 7.56577 4.87007 7.44216C4.99367 7.31856 5.16088 7.24845 5.33568 7.24693C5.51048 7.24541 5.67888 7.3126 5.80461 7.43404L7.33328 8.96271L10.1953 6.10071C10.3203 5.97573 10.4898 5.90552 10.6666 5.90552C10.8434 5.90552 11.0129 5.97573 11.1379 6.10071Z"
                            fill="#1A4AB1"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <Twitter className="twitter-instance" />
                  <Youtube className="youtube-instance" />
                  <Whatsapp className="whatsapp-instance" />
                  <Pinterest className="ptoctdenoiserbeauty" />
                  <VimeoWrapper className="vimeo-2" />
                  <Facebook className="facebook-instance" />
                  <LinkedIn className="linked-in-instance" />
                  <Telegram className="telegram-instance" />
                  <SpotifyWrapper className="spotify-2" />
                  <DivWrapper className="zoomoctdenoiserbeauty-002" />
                  <Vkoctdenoiserbeauty className="vk2octdenoiserbeauty-002" />
                  <Reddit2Octdenoiserbeauty002 className="reddit2octdenoiserbeauty-002-instance" /> */}
                </div>
                <div className="frame-39">
                  <img
                    className="card-3"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card.png"
                  />
                  <img
                    className="card-4"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card-2.png"
                  />
                  <img
                    className="card-4"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card-3.png"
                  />
                  <img
                    className="card-4"
                    alt="Card"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/card-4.png"
                  />
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
          <footer className="footer">
            <div className="group-5">
              <div className="overlap-4">
                <div className="pyramid-4">
                  <div className="overlap-group-5">
                    <img
                      className="pyramid-5"
                      alt="Pyramid"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1-3.png"
                    />
                    <img
                      className="mask-group-10"
                      alt="Mask group"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-10.png"
                    />
                  </div>
                </div>
                <div className="pyramid-6">
                  <div className="overlap-5">
                    <img
                      className="pyramid-7"
                      alt="Pyramid"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1-4.png"
                    />
                    <img
                      className="mask-group-11"
                      alt="Mask group"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-11.png"
                    />
                  </div>
                </div>
                <div className="pyramid-8">
                  <div className="overlap-6">
                    <img
                      className="pyramid-9"
                      alt="Pyramid"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1-5.png"
                    />
                    <img
                      className="mask-group-12"
                      alt="Mask group"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-12.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-relative">
              <div className="div-relative-2">
                <div className="div-6">
                  <div className="text-wrapper-22">Save On Subscriptions</div>
                  <p className="text-wrapper-3">
                    Jybe is a BNPL service that helps consumer access their digital subscriptions for the cheapest
                    possible monthly price!
                  </p>
                </div>
                <Button
                  className="button-instance"
                  icon="false"
                  size="lg"
                  state="default"
                  text="Contact Us"
                  type="primary"
                />
              </div>
              <div className="div-relative-3">
                <div className="div-grid">
                  <div className="div-wforest-full">
                    <div className="nav">
                      <div className="link-margin">
                        <div className="text-wrapper-23">About</div>
                      </div>
                      <div className="link-start-with-wrapper">
                        <div className="text-wrapper-23">Start With Jybe</div>
                      </div>
                      <div className="link-sign-in-wrapper">
                        <div className="text-wrapper-23">Sign In</div>
                      </div>
                      <div className="link-contact-wrapper">
                        <div className="text-wrapper-23">Contact</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-wforest-full">
                    <div className="nav">
                      <div className="link-pricing-wrapper">
                        <div className="text-wrapper-23">Pricing</div>
                      </div>
                      <div className="link-blog-wrapper">
                        <div className="text-wrapper-23">Blog</div>
                      </div>
                      <div className="link-glossary-wrapper">
                        <div className="text-wrapper-23">Glossary</div>
                      </div>
                      <div className="link-careers-wrapper">
                        <div className="text-wrapper-23">Careers</div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-wrapper">
                    <div className="nav">
                      <div className="link-wrapper">
                        <div className="link">
                          <img
                            className="SVG"
                            alt="Svg"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/svg.svg"
                          />
                          <div className="text-wrapper-23">LinkedIn</div>
                        </div>
                      </div>
                      <div className="link-margin-2">
                        <div className="link-2">
                          <img
                            className="SVG"
                            alt="Svg"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/svg-1.svg"
                          />
                          <div className="text-wrapper-23">Twitter</div>
                        </div>
                      </div>
                      <div className="link-margin-2">
                        <div className="link-3">
                          <img
                            className="SVG"
                            alt="Svg"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/svg-2.svg"
                          />
                          <div className="text-wrapper-23">Instagram</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-wforest-full-2">
                    <div className="nav-2">
                      <div className="terms-conditions-wrapper">
                        <div className="text-wrapper-23">Terms &amp; Conditions</div>
                      </div>
                      <div className="link-4">
                        <div className="text-wrapper-23">Privacy Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-7">
                  <img
                    className="logo-10"
                    alt="Logo"
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-1@2x.png"
                  />
                  <div className="p-t">
                    <div className="text-wrapper-24">© 2023 jybe, Inc</div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
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
