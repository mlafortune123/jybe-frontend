import NavBar from "./OldNavBar"

const Contact = () => {
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
    <NavBar/>
  </div>
  <div className="section">
    <div className="intro-header cc-subpage">
      <div className="intro-content">
        <div className="heading-jumbo">
          Contact Us
          <br />
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="w-layout-grid contact-form-grid">
        <div
          id="w-node-_3f61509a-fac7-b0d5-3763-509be705858e-839e432c"
          className="contact-form-wrap"
        >
          <div className="contact-form-heading-wrap">
            <h2 className="contact-heading">Contact us</h2>
            <div className="paragraph-light">
              Our team is always available to answer any inquiries you may have
              and provide you with the information you need to make an informed
              decision. You can contact us by filling out the form below or by
              sending us an email.{" "}
            </div>
          </div>
          <div className="contact-form w-form">
            <form
              data-name="Get In Touch Form"
              name="wf-form-Get-In-Touch-Form"
              id="email-form"
              method="get"
              className="get-in-touch-form"
              data-wf-page-id="64288ab507c9bb36839e432c"
              data-wf-element-id="3f61509a-fac7-b0d5-3763-509be7058595"
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="text-field cc-contact-field w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder="Enter your name"
                id="Name"
              />
              <label htmlFor="Email-2">Email Address</label>
              <input
                type="email"
                className="text-field cc-contact-field w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder="Enter your email"
                id="Email"
                required=""
              />
              <label htmlFor="Message">Message</label>
              <textarea
                id="Message"
                name="Message"
                placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                maxLength={5000}
                data-name="Message"
                className="text-field cc-textarea cc-contact-field w-input"
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="Submit"
                data-wait="Please wait..."
                className="button w-button"
              />
            </form>
            <div className="status-message cc-success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="status-message cc-error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div id="w-node-_3f61509a-fac7-b0d5-3763-509be70585a6-839e432c">
          <div className="details-wrap">
            <div className="label">OUR OFFICE</div>
            <div className="paragraph-light">
              St. John's, NL
              <br />
              Canada
              <br />
              A5A 459
            </div>
          </div>
          <div className="details-wrap">
            <div className="label">WORKING HOURS</div>
            <div className="paragraph-light">9AM - 5PM, Mon to Fri</div>
          </div>
          <div className="details-wrap">
            <div className="label">CONTACT</div>
            <a
              href="mailto:contact@business.com?subject=You've%20got%20mail!"
              className="contact-email-link"
            >
              contact@jybe.cs
            </a>
            <div className="paragraph-light">(855) 773-7771</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div
      className="map w-widget w-widget-map"
      data-widget-style="roadmap"
      data-widget-latlng=""
      data-enable-scroll="true"
      role=""
      title=""
      data-enable-touch="true"
      data-widget-zoom={12}
      data-widget-tooltip=""
    />
  </div>
  <div className="section cc-cta">
    <div className="container">
      <div className="cta-wrap">
        <div>
          <div className="cta-text">
            <div className="heading-jumbo-small">
              Grow your business.
              <br />
            </div>
            <div className="paragraph-bigger cc-bigger-light">
              Today is the day to build the business of your dreams. Share your
              mission with the world — and blow your customers away.
              <br />
            </div>
          </div>
          <a
            href="https://s3.amazonaws.com/app.jybe.ca/contact.html"
            aria-current="page"
            className="button cc-jumbo-button w-inline-block w--current"
          >
            <div>Start Now</div>
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

export default Contact