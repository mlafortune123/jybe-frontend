import React, { useState, useEffect, useContext } from 'react';
import TopBar from "../TopBar";
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { Button } from "../elements/Button";
import "./approved.css"
const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
const API_URL = process.env.REACT_APP_API_URL
const stripePromise = loadStripe(STRIPE_KEY)

const Approved = () => {
    const [checkoutUrl, setCheckoutUrl] = useState()
    const context = useContext(AccountContext);
    const { accountContext, setAccountContext, user, accessToken, navigate } = context
    console.log(accountContext)


    useEffect(() => {
        accessToken && fetch(`${API_URL}/stripe/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ merchant_name: 'netflix', merchant_id: '70563657-c036-47e5-9248-1bc9bd7c95d8', amount: accountContext.cost, email: user.email, user_id: accountContext.user_id, order_id:accountContext.order_id })
        })
            .then(response => response.json())
            .then(res => setCheckoutUrl(res.url))
    }, [accessToken])

    return (
        <div className="approved-index">
            <div className="approved-div-2">
                <div className="approved-body">
                    <div className="approved-section">
                        <div className="approved-div-3">
                            <Steps selected={4} />
                            <div className="approved-form">
                                <img
                                    className="approved-vector-2"
                                    alt="Vector"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64efff49cf00ae380e5cb8d6/img/vector.svg"
                                />
                                <div className="approved-text-wrapper-3">You’re approved!</div>
                                <p className="approved-p">Please see the details of your card payments for your subscription below.</p>
                                {accountContext ? <div className="approved-frame-5">
                                    <img
                                        className="approved-fill"
                                        alt="Fill"
                                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64efdb6cc9b892e896e63841/img/fill-14.svg"
                                    />
                                    <div className="approved-frame-6">
                                        <div className="approved-text-wrapper-4">${((accountContext.cost/12) * 1.15).toFixed(2)} </div>
                                        <div className="approved-text-wrapper-5">/ month</div>
                                        <div className="approved-div-wrapper">
                                            <div className="approved-text-wrapper-6">For 12 months</div>
                                        </div>
                                    </div>
                                    <div className="approved-frame-7">
                                        <div className="approved-text-wrapper-7">You Save</div>
                                        <div className="approved-text-wrapper-7">${(((accountContext.cost/12) * 1.15) - accountContext.og_monthly_cost).toFixed(2) }</div>
                                        <div className="approved-text-wrapper-5">/ month</div>
                                    </div>
                                    <div className="approved-frame-8">
                                        <div className="approved-frame-9">
                                            <div className="approved-text-wrapper-8">APR</div>
                                            <div className="approved-text-wrapper-9">15%</div>
                                        </div>
                                        <div className="approved-frame-10">
                                            <div className="approved-text-wrapper-8">INTEREST</div>
                                            <div className="approved-text-wrapper-9">${accountContext.cost*0.15}  </div>
                                        </div>
                                        <div className="approved-frame-11">
                                            <div className="approved-text-wrapper-8">TOTAL</div>
                                            <div className="approved-text-wrapper-9">${(accountContext.cost * 1.15).toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div> : <div>context error </div> }
                                <div className="approved-div-5">
                                    <img src="/back.png" />
                                    <Button
                                        className="approved-button-instance thirty"
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Continue"
                                        type="primary"
                                    />
                                </div>
                            </div>
                        </div>
                        <img src="/thumbsup.png" className='approved-img-2' />
                    </div>
                </div>
                <Footer />
            </div>
            <Navbar />
        </div>
    )
}

export default Approved