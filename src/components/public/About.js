import React from "react";
import Navbar from "./NavBar.js";


const About = () => {
return (
<>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navigation w-nav"
  >
    <Navbar/>
  </div>
  <div className="section cc-home-wrap">
    <div className="intro-header cc-subpage">
      <div className="intro-content">
        <div className="heading-jumbo">
          About Us
          <br />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="motto-wrap">
        <div className="heading-jumbo-small">
          Changing the digital landscape with affordable payment solutions.
        </div>
      </div>
      <div className="divider" />
      <div className="about-story-wrap">
        <p className="paragraph-light">
          Welcome to Jybe! We are a team of passionate individuals who believe
          that digital content should be accessible to everyone, regardless of
          their financial situation.
          <br />‍<br />
          &nbsp;Our journey began when we noticed the increasing costs
          associated with digital subscriptions and products. We realized that
          many people were struggling to keep up with these costs and were
          missing out on the amazing content available online.&nbsp;
          <br />‍<br />
          That's when we decided to create Jybe - a BNPL service specifically
          tailored for digital subscriptions and products. Our goal was to
          provide a flexible and affordable payment solution that would help
          people access the digital world with ease.&nbsp;
          <br />‍<br />
          At Jybe, we are committed to responsible lending and transparency. We
          believe in providing our customers with a fair and accessible payment
          option that empowers them to manage their finances effectively. Our
          team works tirelessly to ensure that our service is easy to use, and
          our customer support is always available to answer any questions you
          may have.&nbsp;
          <br />
          <br />
          We are proud to have helped countless individuals access the digital
          world more affordably, and we are committed to continuing to innovate
          and improve our service to meet the needs of our customers.&nbsp;Thank
          you for choosing Jybe. We are honoured to be a part of your digital
          journey.
        </p>
      </div>
      <div className="divider" />
    </div>
  </div>
  <div className="section">
    <div className="container" />
  </div>
  <div className="section cc-cta">
    <div className="container">
      <div className="cta-wrap">
        <div>
          <div className="cta-text">
            <div className="heading-jumbo-small">
              Experience the benifits of Jybe
              <br />
            </div>
            <div className="paragraph-bigger cc-bigger-light">
              Sign up today to begin unlocking the potential of your
              subscriptions.
              <br />
            </div>
          </div>
          <a
            href="https://s3.amazonaws.com/app.jybe.ca/contact.html"
            className="button cc-jumbo-button w-inline-block"
            style={{margin:'auto'}}
          >
            <div>Start Jybing</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="div-block-3">
    <a
      href="https://uploads-ssl.webflow.com/6424ac30892aff6926961be1/64c1f940fb7255f4c70ac5bf_Jybe%20Financial%20Inc.%20-%20Privacy%20Policy%20Jul%2020%2023.pdf"
      target="_blank"
      className="w-inline-block"
    >
      Privacy Policy
    </a>
  </div>
</>

)
}
export default About