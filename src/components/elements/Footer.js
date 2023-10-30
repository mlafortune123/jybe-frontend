import { Button } from "./Button.js"
import "./Footer.css"
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="group-5">
        <img src="/footer.png" />
      </div>
      <div className="div-relative">
        <div className="div-relative-2">
          <div className="div-6">
            <div className="text-wrapper-22">Save On Subscriptions</div>
            <p className="text-wrapper-3">
              Jybe is a BNPL service that helps consumers access their digital subscriptions for the cheapest
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
        <div className="div-3-holder-holder" >
          <div className="div-3-holder" >
            <div className="div-relative-3">
              <div className="div-grid">
                <div className="nav-grid">
                  {/* <div className="pointer">
                    About
                  </div> */}
                  <div className="pointer">
                    Start With Jybe
                  </div>
                  <div className="pointer">
                    Sign In
                  </div>
                  <div onClick={() => window.open("mailto:michaeltiller@jybe.ca")} className="link">
                    Contact
                  </div>
                </div>
                <div className="nav-grid">
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
                  <div className="pointer-2">
                    <div className="link-2">
                      <img
                        className="SVG"
                        alt="Svg"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/svg-1.svg"
                      />
                      <div className="text-wrapper-23">Twitter</div>
                    </div>
                  </div>
                  <div className="pointer-2">
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
                <div className="nav-grid">
                  <div className="pointer" onClick={() => window.open("https://app.jybe.ca/privacy.pdf")}>Terms &amp; Conditions</div>
                  <div className="pointer" onClick={() => window.open("https://app.jybe.ca/privacy.pdf")}>Privacy Policy</div>
                  <div className="pointer" onClick={() => window.open(`tel:${8009609943}`, '_blank')} >Customer Support:<br /> 1-800-960-9943</div>
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
        </div>
      </div>
    </footer>
  )
}