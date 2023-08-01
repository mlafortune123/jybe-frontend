import React from "react";
import TopBar from "../TopBar";


const About = () => {
    console.log('about what bro')
return (
<div>
    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="navigation w-nav">
            <TopBar/>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
    <div class="section cc-home-wrap">
        <div class="intro-header cc-subpage">
            <div class="intro-content">
                <div class="heading-jumbo">About Us<br/></div>
            </div>
        </div>
        <div class="container">
            <div class="motto-wrap">
                <div class="heading-jumbo-small">Changing the digital landscape with affordable payment solutions.</div>
            </div>
            <div class="divider"></div>
            <div class="about-story-wrap">
                <p class="paragraph-light">Welcome to Jybe! We are a team of passionate individuals who believe that
                    digital content should be accessible to everyone, regardless of their financial
                    situation.<br/>‍<br/>&nbsp;Our journey began when we noticed the increasing costs associated with
                    digital subscriptions and products. We realized that many people were struggling to keep up with
                    these costs and were missing out on the amazing content available online.&nbsp;<br/>‍<br/>That's when
                    we decided to create Jybe - a BNPL service specifically tailored for digital subscriptions and
                    products. Our goal was to provide a flexible and affordable payment solution that would help people
                    access the digital world with ease.&nbsp;<br/>‍<br/>At Jybe, we are committed to responsible lending
                    and transparency. We believe in providing our customers with a fair and accessible payment option
                    that empowers them to manage their finances effectively. Our team works tirelessly to ensure that
                    our service is easy to use, and our customer support is always available to answer any questions you
                    may have.&nbsp;<br/><br/>We are proud to have helped countless individuals access the digital world
                    more affordably, and we are committed to continuing to innovate and improve our service to meet the
                    needs of our customers.&nbsp;Thank you for choosing Jybe. We are honoured to be a part of your
                    digital journey.</p>
            </div>
            <div class="divider"></div>
        </div>
    </div>
    <div class="section">
        <div class="container"></div>
    </div>
    <div class="section cc-cta">
        <div class="container">
            <div class="cta-wrap">
                <div>
                    <div class="cta-text">
                        <div style={{paddingBottom:'20px'}} class="heading-jumbo-small">Experience the benifits of Jybe</div>
                        <div style={{paddingBottom:'20px'}} class="paragraph-bigger cc-bigger-light">Sign up today to begin unlocking the potential of
                            your subscriptions.<br/></div>
                    </div>
                    <div class="flex-center" >
                        <a href="https://www.jybe.ca/contact" class="button cc-jumbo-button w-inline-block">
                            <div>Start Jybing</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default About