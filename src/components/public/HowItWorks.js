import {Carousel} from "./Carousel.js"
import "../../css/style.css";
import { useState } from "react";
import { Navbar } from "../elements/Navbar.js";
import {Footer} from "../elements/Footer.js"
import { PaymentCalculator } from "./PaymentCalculator";

const HowItWorks = () => {
    const [selectedCarousel, setSelectedCarousel] = useState(1)
    return (
        <div className="index" style={{flexDirection:"column", marginTop:'14vh'}} >
            {/* <div style={{marginLeft:'3vw'}} >
            <Carousel props={selectedCarousel} />
            </div>
            <div className="frame-39" style={{margin: '10vh 5vw', width:'90vw'}} >
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
        <Footer/>
        <Navbar
          className="navbar-instance"
          logo="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-2.svg"
        /> */}
        <div className="section" style={{width:'100vw'}} >
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
          <PaymentCalculator/>
          <Footer/>
        <Navbar
          className="navbar-instance"
          logo="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-2.svg"
        />
        </div>
    )
}

export default HowItWorks