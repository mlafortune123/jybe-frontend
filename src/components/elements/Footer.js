import {Button} from "./Button.js"
import "./Footer.css"
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
    return (
        <footer className="footer">
        <div className="group-5">
          <img src="/footer.png"/>
          {/* <div className="overlap-4">
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
          </div> */}
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
              onClick={() => window.open("mailto:michaeltiller@jybe.ca")}
            />
          </div>
          <div className="div-relative-3">
            <div className="div-grid">
              <div className="div-wforest-full">
                <div className="nav">
                  {/* <div className="link-margin">
                    About
                  </div> */}
                  <div className="link-margin">
                    Start With Jybe
                  </div>
                  <div className="link-margin">
                    Sign In
                  </div>
                  <div onClick={() => window.open("mailto:michaeltiller@jybe.ca")} className="link">
                    Contact
                  </div>
                </div>
              </div>
              {/* <div className="div-wforest-full">
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
              </div> */}
              <div className="nav-wrapper">
                <div className="nav">
                  <div className="link-wrapper">
                    <div onClick={() => window.open("https://www.linkedin.com/company/jybefinancial/")} className="link">
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
                  <div className="terms-conditions-wrapper" onClick={() => window.open("https://app.jybe.ca/privacy.pdf")}>
                    <div className="text-wrapper-23">Terms &amp; Conditions</div>
                  </div>
                  <div className="link-4" onClick={() => window.open("https://app.jybe.ca/privacy.pdf")} >
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
    )
}