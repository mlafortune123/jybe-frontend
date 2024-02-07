import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from '../../ProtectedRoute';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { Button } from "../elements/Button";
import "./approved.css"
import subs from "../public/subscriptions.json"
import toast, { Toaster } from 'react-hot-toast';
import ReactGA from 'react-ga4';
import { InputsText } from "../elements/InputsText.js";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

// Initialize react-ga with your tracking ID

// const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
const API_URL = process.env.REACT_APP_API_URL
// const stripePromise = loadStripe(STRIPE_KEY)

const Approved = () => {
    const [checkoutUrl, setCheckoutUrl] = useState()
    const context = useContext(AccountContext);
    const { accountContext, user, accessToken, refreshToken, refreshTheClock } = context
    const [selectedSub, setSelectedSub] = useState("")
    const [monthlySavings, setMonthlySavings] = useState()
    const [newAmount, setNewAmount] = useState();
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") {
            ReactGA.event('page_view', {
                page_title: window.location.pathname + window.location.search,
                page_location: window.location.pathname + window.location.search,
            });
        }
    }, [])

    useEffect(() => {
        localStorage.clear();
        // Iterate through the subs array
        for (const sub of subs) {
            if (accountContext?.merchant_name === sub.name || accountContext?.inactiveOrder?.merchant_name == sub.name || accountContext?.abandonedOrder?.merchant_name == sub.name) {
                // If there's a match, set the selected sub to the image

                setSelectedSub(sub.image);
                return; // Exit the loop if a match is found
            }
        }
        // If no match is found, set the selected sub to the default image
        setSelectedSub("/genericsub.png");
    }, [accountContext?.merchant_name, accountContext?.inactiveOrder, accountContext?.abandonedOrder]);

    useEffect(() => {
        let MonthlySavings
        if (accountContext?.og_monthly_cost || accountContext?.inactiveOrder?.og_monthly_cost)
            MonthlySavings = (
                (accountContext?.merchant_name || accountContext.inactiveOrder?.merchant_name) && !isNaN(parseFloat(accountContext.cost))
            ) ? (
                (parseFloat(accountContext.og_monthly_cost) - (parseFloat(accountContext.cost) / 12 * 1.15)).toFixed(2)
            ) : (
                (parseFloat(accountContext.inactiveOrder.og_monthly_cost) - (parseFloat(accountContext.inactiveOrder.amount) / 12 * 1.15)).toFixed(2)
            );
        setMonthlySavings(MonthlySavings)
    }, [accountContext?.og_monthly_cost, accountContext?.inactiveOrder?.og_monthly_cost, refreshToken])

    useEffect(() => {
        //need to filer for inactive / abandoned orders
        if (accountContext && !checkoutUrl && (accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name) && accessToken && selectedSub) {
            setCheckoutUrl("...")
            fetch(`${API_URL}/stripe/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    merchant_name: accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name,
                    merchant_id: accountContext.merchant_id || accountContext.inactiveOrder?.merchant_id,
                    amount: accountContext.cost || accountContext.inactiveOrder?.amount,
                    email: user.email,
                    user_id: accountContext.user_id || accountContext.inactiveOrder?.user_id,
                    order_id: accountContext.order_id || accountContext.inactiveOrder?.order_id,
                    origin: window.location.origin,
                    image: `${window.location.origin}${selectedSub}`
                })
            })
                .then(response => {
                    if (response.status == 401) window.location.reload()
                    if (response.status === 500 || response.status === 502) toast.error("The requested service is currently unavailable at the moment.")
                    return response.json()
                })
                .then(res => {
                    setCheckoutUrl(res.url)
                })
        }
    }, [accountContext, accountContext?.user, selectedSub, refreshToken])

    const handleChange = (name, newValue, type) => {
        console.log(name, newValue, type)
        setNewAmount(newValue)
    }

    const cancelOrder = () => {
        fetch(`${API_URL}/orders/cancel`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_id: accountContext.order_id || accountContext.inactiveOrder?.order_id
            })
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status === 500 || response.status === 502) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(res => {
                if (res.error) toast.error(res.error)
                else {
                    setCheckoutUrl('')
                    toast.success(res.msg)
                    refreshTheClock()
                  
                      const timeoutId = setTimeout(navigate("/"), 2000); // Delay of 2000 milliseconds (2 seconds)
                  
                      // Cleanup the timeout to avoid memory leaks
                      return () => clearTimeout(timeoutId);
                    //timeout go to another page
                }
            })
    }

    const changeOrder = () => {
        fetch(`${API_URL}/orders/change`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newAmount: parseFloat(newAmount),
                order_id: accountContext.order_id || accountContext.inactiveOrder?.order_id
            })
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status === 500 || response.status === 502) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(res => {
                if (res.error) toast.error(res.error)
                else {
                    toast.success(res.msg)
                    window.location.reload()
                }
            })
    }

    return (
        <div className="approved-index">
            <div className="approved-div-2">
                <div className="approved-body">
                    <div className="approved-section">
                        <div className="approved-div-3">
                            <Toaster
                                toastOptions={{
                                    //className: '',
                                    style: {
                                        marginTop: '186px',
                                        padding: '16px'
                                    },
                                }}
                            />
                            <Steps selected={4} />
                            <div className="approved-form">
                                {!open && <img
                                    className="approved-vector-2"
                                    alt="Vector"
                                    src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64efff49cf00ae380e5cb8d6/img/vector.svg"
                                />}
                                {!open && <div className="approved-text-wrapper-3">You’re approved!</div>}
                                {!open && <p className="approved-p">Please see the details of your card payments for your subscription below.</p>}
                                {accountContext && (accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name) &&
                                !open ?
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
                                                    (accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                        ((accountContext.cost / 12 * 1.15).toFixed(2)) :
                                                        ((accountContext.inactiveOrder.amount / 12 * 1.15).toFixed(2))
                                                }
                                            </div>
                                            <div className="approved-text-wrapper-5">/ month</div>
                                        </div>
                                        {monthlySavings && monthlySavings > 0 && (
                                            <div className="approved-frame-7">
                                                <div className="approved-text-wrapper-7">You Save</div>
                                                <div className="approved-text-wrapper-7">
                                                    ${
                                                        monthlySavings
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
                                                    ${((accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                        ((accountContext.cost) * 0.15).toFixed(2) :
                                                        (accountContext.inactiveOrder.amount * 0.15).toFixed(2)
                                                    )}
                                                </div>
                                            </div>
                                            <div className="approved-frame-11">
                                                <div className="approved-text-wrapper-8">TOTAL</div>
                                                <div className="approved-text-wrapper-9">
                                                    ${((accountContext.merchant_name || accountContext.inactiveOrder?.merchant_name) && (!isNaN(accountContext.cost)) ?
                                                        ((accountContext.cost) * 1.15).toFixed(2) :
                                                        (accountContext.inactiveOrder.amount * 1.15).toFixed(2)
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div> : 
                                    <div
                                    style={{
                                        padding: '16px',
                                        color: '#713200',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent:'center',
                                        background: '#fff',
                                        color: '#363636',
                                        lineHeight: '1.3',
                                        willChange: 'transform',
                                        maxWidth: '60%',
                                        gap:'10px',
                                        marginBottom: '16px'
                                    }}
                                >
                                    <InputsText
                                        type="number"
                                        name="New Amount"
                                        label="New Amount"
                                        value={newAmount}
                                        onChange={handleChange}
                                    />
                                    <Button 
                                        className={`approved-button-instance yellow thirty`}
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Modify"
                                        type="primary"
                                        onClick={() => {
                                            changeOrder()
                                            setOpen(!open)
                                        }}
                                    />
                                </div>    }
                                {(checkoutUrl || checkoutUrl !== '...') && <div className="approved-div-5">
                                    <Button
                                        className={`approved-button-instance red thirty`}
                                        icon="left"
                                        size="lg"
                                        state="default"
                                        text="Cancel"
                                        type="primary"
                                        onClick={cancelOrder}
                                    />
                                    <Button
                                        className={`approved-button-instance ${open? 'black' : 'yellow'} thirty`}
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text={open ? 'Cancel' : 'Modify'}
                                        type="primary"
                                        onClick={() => setOpen(!open)}
                                    />
                                    <Button
                                        className={`approved-button-instance thirty`}
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Continue"
                                        type="primary"
                                        onClick={() => checkoutUrl && window.location.replace(checkoutUrl)}
                                    />
                                </div>}
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