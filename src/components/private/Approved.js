import React, { useState, useEffect, useContext } from 'react';
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { Button } from "../elements/Button";
import "./approved.css"
import subs from "../public/subscriptions.json"
import toast, { Toaster } from 'react-hot-toast';
const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
const API_URL = process.env.REACT_APP_API_URL
const stripePromise = loadStripe(STRIPE_KEY)

const Approved = () => {
    const [checkoutUrl, setCheckoutUrl] = useState()
    const context = useContext(AccountContext);
    const { accountContext, setAccountContext, user, accessToken, navigate } = context
    const [selectedSub, setSelectedSub] = useState("")
    // console.log(accountContext)

    useEffect(() => {
        // Iterate through the subs array
        for (const sub of subs) {
            if (accountContext.merchantName === sub.name || accountContext.user?.merchant_name == sub.name) {
                // If there's a match, set the selected sub to the image
                console.log(accountContext.user?.merchant_name)
                setSelectedSub(sub.image);
                return; // Exit the loop if a match is found
            }
        }

        // If no match is found, set the selected sub to the default image
        setSelectedSub("/genericsub.png");
    }, [accountContext.merchantName]);

    useEffect(() => {

        (accountContext.merchantName || accountContext.user?.merchant_name) && accessToken && fetch(`${API_URL}/stripe/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                merchant_name: accountContext.merchantName || accountContext.user?.merchant_name,
                merchant_id: accountContext.merchant_id || accountContext.user?.merchant_id,
                amount: accountContext.cost || accountContext.user?.amount ,
                email: user.email,
                user_id: accountContext.user_id || accountContext.user?.user_id,
                order_id: accountContext.order_id || accountContext.user?.order_id,
                origin: window.location.origin
            })
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status === 500) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(res => setCheckoutUrl(res.url))
            console.log(accountContext.user)
    }, [accountContext, accountContext.user])

    return (
        <div className="approved-index">
            <div className="approved-div-2">
                <div className="approved-body">
                    <div className="approved-section">
                        <div className="approved-div-3">
                            <Toaster
                                toastOptions={{
                                    className: '',
                                    style: {
                                        marginTop: '86px',
                                        padding: '16px'
                                    },
                                }}
                            />
                            <Steps selected={4} />
                            <div className="approved-form">
                                <img
                                    className="approved-vector-2"
                                    alt="Vector"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64efff49cf00ae380e5cb8d6/img/vector.svg"
                                />
                                <div className="approved-text-wrapper-3">You’re approved!</div>
                                <p className="approved-p">Please see the details of your card payments for your subscription below.</p>
                                {(accountContext.merchantName || accountContext.user?.merchant_name) ?
                                    <div className="approved-frame-5">
                                        <img
                                            className="approved-fill"
                                            alt="Fill"
                                            src={selectedSub}
                                        />
                                        <div className="approved-frame-6">
                                            <div>12 monthly payments of</div>
                                            <div className="approved-text-wrapper-4">$
                                                {
                                                    (accountContext.merchantName || accountContext.user?.merchant_name) && (!isNaN(accountContext.cost)) ? 
                                                    ((accountContext.cost / 12 * 1.15).toFixed(2)) : 
                                                    ((accountContext.user.amount / 12 * 1.15).toFixed(2))  
                                                }
                                            </div>
                                            <div className="approved-text-wrapper-5">/ month</div>
                                            {/* <div className="approved-div-wrapper">
                                            <div className="approved-text-wrapper-6">For 12 months</div>
                                        </div> */}
                                        </div>
                                        {(accountContext.merchantName || accountContext.user?.merchant_name) && (!isNaN(accountContext.cost)) && (
                                                <div className="approved-frame-7">
                                                    <div className="approved-text-wrapper-7">You Save</div>
                                                    <div className="approved-text-wrapper-7">
                                                        {
                                                            (accountContext.merchantName || accountContext.user?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                            (parseFloat(accountContext.ogMonthlyCost) - (accountContext.cost / 12 * 1.15)).toFixed(2) :
                                                            (parseFloat(accountContext.user.og_monthly_cost) - (accountContext.user.amount / 12 * 1.15)).toFixed(2)
                                                        }
                                                    </div>
                                                    <div className="approved-text-wrapper-5">/ month</div>
                                                </div>
                                            )}
                                        <div className="approved-frame-8">
                                            <div className="approved-frame-9">
                                                <div className="approved-text-wrapper-8">APR</div>
                                                <div className="approved-text-wrapper-9">15%</div>
                                            </div>
                                            <div className="approved-frame-10">
                                                <div className="approved-text-wrapper-8">INTEREST</div>
                                                <div className="approved-text-wrapper-9">
                                                    ${((accountContext.merchantName || accountContext.user?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                        ((accountContext.cost) * 0.15).toFixed(2) : 
                                                        (accountContext.user.amount * 0.15).toFixed(2)
                                                    )}
                                                </div>
                                            </div>
                                            <div className="approved-frame-11">
                                                <div className="approved-text-wrapper-8">TOTAL</div>
                                                <div className="approved-text-wrapper-9">
                                                    ${((accountContext.merchantName || accountContext.user?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                        ((accountContext.cost) * 1.15).toFixed(2) : 
                                                        (accountContext.user.amount * 1.15).toFixed(2)
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div> : <div>context error </div>}
                                <div className="approved-div-5">
                                    {/* <img src="/back.png" /> */}
                                    <Button
                                        className={`approved-button-instance thirty ${!checkoutUrl && 'disabled'} `}
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Continue"
                                        type="primary"
                                        onClick={() => checkoutUrl && window.location.replace(checkoutUrl)}
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