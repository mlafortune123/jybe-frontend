import React from "react"
import { Button } from "../elements/Button.js";
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import "./denied.css"
const Denied = () => {
    return (
        <div className="container">
          <div className="section">
            <div className="form-wrapper">
              <div className="denied-form">
                <img
                  className="no-internet"
                  alt="No internet"
                  src="/sadelephant.png"
                />
                <p className="oh-no-sorry-you-do">
                  <span className="text-wrapper">Oh no! Sorry you do not qualify for this purchase!</span>
                </p>
                {/* <p className="p">
                  Please confirm your personal information is correct or try again with a smaller order.
                </p> */}
                <div className="button-wrapper">
                  <Button
                    className="button-instance"
                    icon="right"
                    size="lg"
                    state="default"
                    text="Go Back to Main Page"
                    type="primary"
                    onClick={() => window.location.href=window.location.origin}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        <Navbar />
        </div>
    )
}

export default Denied