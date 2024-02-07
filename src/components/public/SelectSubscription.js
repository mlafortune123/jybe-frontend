import React, { useState, useRef, useEffect } from 'react';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { Button } from "../elements/Button.js";
import subs from "./subscriptions.json"
import { ConcreteComponentNode } from "../elements/ConcreteComponentNode.js";
import { useAuth0 } from '@auth0/auth0-react';
import toast, { Toaster } from 'react-hot-toast';
// import "./userinfo.css"
import "../../css/style.css";
import "./selectsubscription.css"
import "../../css/phonecss.css"
import ReactGA from 'react-ga4';

// Initialize react-ga with your tracking ID

const API_URL = process.env.REACT_APP_API_URL
const SelectSubscription = () => {
    const { loginWithRedirect } = useAuth0();
    const [selectedItem, setSelectedItem] = useState();
    const [merchant_name, setmerchant_name] = useState()
    const [cost, setCost] = useState()
    const [og_monthly_cost, setog_monthly_cost] = useState()
    // Create a ref for the div with class "select-subscription-div-3"
    const selectSubscriptionDivRef = useRef(null);
    const socialMediaPlatforms = ['LinkedIn', 'FB', 'Instagram', 'Twitter', 'Snapchat', 'TikTok'];
    const userAgent = navigator.userAgent.toString()

    // State to store the height of the target div
    const [targetDivHeight, setTargetDivHeight] = useState(0);

    useEffect(() => {
        if (socialMediaPlatforms.some(platform => userAgent.includes(platform))) toast.error("Our app is unusable in an embedded browser, please open your preferred browser (Google, Safari, etc) and go to jybe.ca")
        if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") {
            // ReactGA.event({
            //     category: 'User Interaction',
            //     action: 'Clicked Button',
            //     label: 'Homepage',
            //   });

            ReactGA.event('page_view', {
                page_title: window.location.pathname + window.location.search,
                page_location: window.location.pathname + window.location.search,
            });
        }
    }, [])

    useEffect(() => {
        if (selectSubscriptionDivRef.current) {
            // Get the height of the "select-subscription-div-3" div
            const height = selectSubscriptionDivRef.current.offsetHeight;
            // Update the state with the height
            setTargetDivHeight(height);
        }
    }, []);

    const clearNamePlaceHolder = () => {
        merchant_name == "Subscription Name" && setmerchant_name("")
    }

    const restoreNamePlaceHolder = () => {
        merchant_name == "" && setmerchant_name("Subscription Name")
    }

    const handleSubmit = (e) => {
        if (merchant_name == "Error") {
            toast.error("We don't like this merchant")
            return
        }
        e.preventDefault();
        if ((!merchant_name && !selectedItem)) {
            toast.error("Please select a merchant from the list, or put your subscription in the custom subscription field.");
            return;
        }
        else if (!cost) {
            toast.error("Please fill in the annual cost field.");
            return;
        }
        else {
            localStorage.setItem('cost', cost);
            localStorage.setItem('merchant_name', selectedItem ? selectedItem : merchant_name);
            og_monthly_cost != undefined && localStorage.setItem('og_monthly_cost', og_monthly_cost);
            socialMediaPlatforms.some(platform => userAgent.includes(platform)) ?
                toast.error("Our app is unusable in an embedded browser, please open your preferred browser (Google, Safari, etc) and go to jybe.ca") :
                loginWithRedirect({
                    authorizationParams: {
                        prompt: 'select_account'
                    },
                    openUrl: () => window.location.replace(`/select_subscription`)
                })
        }
    };

    const testingReset = () => {
        fetch(`${API_URL}/payments/delete/asasd`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(w => {
                fetch(`${API_URL}/orders/delete/asasd`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(we =>
                        fetch(`${API_URL}/users/delete/asasd`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                // 'Authorization': `Bearer ${accessToken}`
                            }
                        }))
                    .then(we2 => we2.status == 200 ? toast.success("reset complete") : toast.error("reset broke"))
            })
    }

    const handleMerchantChange = (e) => {
        setSelectedItem(e.target.value.toLowerCase())
        setmerchant_name(e.target.value)

    }

    return (
        <div className="select-subscription">
            <div className="select-subscription-div-2">
                <div className="select-subscription-body">
                    <div className="select-subscription-section">
                        <div className="select-subscription-div-3" ref={selectSubscriptionDivRef} >
                            <Steps selected={1} />
                            <Toaster
                                toastOptions={{
                                    className: '',
                                    style: {
                                        marginTop: '86px',
                                        padding: '16px'
                                    },
                                }}
                            />
                            <div className="select-subscription-form">
                                <div className="select-subscription-text-wrapper-3">Select Your Subscription</div>
                                <p className="select-subscription-almost-there-select">
                                    <span className="select-subscription-span">
                                        Almost there. First choose your subscription
                                        {/* Almost there. Select the subscription you need
                                        <br /> and find out how much you SAVE!{" "} */}
                                    </span>
                                    {/* <span className="select-subscription-text-wrapper-4">🎉</span> */}
                                </p>
                                <div className='select-subscription-inner-box'>
                                    <p className="select-subscription-just-add-your">
                                        <span className="select-subscription-text-wrapper-5">You can select from this list of subscriptions</span>
                                    </p>
                                    <div className="select-subscription-frame-6">
                                        <div className="select-subscription-frame-7">
                                            {subs.map((sub) =>
                                                <div className="select-subscription-logo-2">
                                                    <img src={sub.image} className="select-subscription-design-component-instance-node-2" />
                                                    <ConcreteComponentNode
                                                        rectangleClassName="select-subscription-toggle-checkmark"
                                                        stateDefaultLargerClassName="select-subscription-toggle-checkmark-instance"
                                                        stateProp="default-larger"
                                                        onClick={() => {
                                                            setmerchant_name(sub.name)
                                                            setSelectedItem(sub.name)
                                                        }}
                                                        isChecked={selectedItem == sub.name}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="select-subscription-just-add-your">
                                        <span className="select-subscription-text-wrapper-5">Or just </span>
                                        <span className="select-subscription-text-wrapper-4">add</span>
                                        <span className="select-subscription-text-wrapper-5"> your Subscription here in case it is not in the list:</span>
                                    </p>
                                    <div className="select-subscription-frame-5">
                                        <div className="select-subscription-field">
                                            <input
                                                type="text"
                                                id="cost"
                                                name="cost"
                                                className="select-subscription-text-wrapper-6"
                                                placeholder='Subscription Name'
                                                value={merchant_name}
                                                onChange={handleMerchantChange}
                                                onClick={clearNamePlaceHolder}
                                                onBlur={restoreNamePlaceHolder}
                                                style={{width:'100%'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="select-subscription-just-add-your">
                                    <span className="select-subscription-text-wrapper-5">Now enter the monthly and / or annual price of your subscription (including taxes!)</span>
                                </p>
                                <div className='select-subscription-inner-box' >
                                    <div className="select-subscription-field" style={{ width: "100%" }} >
                                        <input
                                            type="text"
                                            id="cost"
                                            name="cost"
                                            className="select-subscription-text-wrapper-6"
                                            placeholder="Monthly Subscription Cost"
                                            value={og_monthly_cost}
                                            onChange={e => { if (!isNaN(e.target.value)) setog_monthly_cost(e.target.value) }}
                                            style={{width:'100%'}}
                                        // onClick={clearOgCostPlaceHolder}
                                        // onBlur={restoreOgCostPlaceHolder}
                                        />
                                    </div>
                                    <div className="select-subscription-field" style={{ width: "100%" }}>
                                        <input
                                            type="text"
                                            id="cost"
                                            name="cost"
                                            className="select-subscription-text-wrapper-6"
                                            placeholder="Annual Subscription Cost"
                                            value={cost}
                                            onChange={e => { if (!isNaN(e.target.value)) setCost(e.target.value) }}
                                            style={{width:'100%'}}
                                        // onClick={clearCostPlaceHolder}
                                        // onBlur={restoreCostPlaceHolder}
                                        />
                                    </div>
                                    <div className='prices-container' >
                                        <div className='red-container' >
                                            <div className='prices' >
                                                {cost ? `Price: $${((cost / 12) * 1.15).toFixed(2)} per month` : 'Enter a annual price to see your monthly cost'}
                                            </div>
                                        </div>
                                        <div className='savings-container' >
                                            <div className='prices' >
                                                {(!isNaN(cost) && og_monthly_cost !== "" && og_monthly_cost !== null && !isNaN(og_monthly_cost) && og_monthly_cost !== 'NaN') ?
                                                    `You save: $${(parseFloat(og_monthly_cost) - (cost / 12 * 1.15)).toFixed(2)} per month` : 'Enter a monthly price to see monthly savings'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="select-subscription-div-5">
                                    {/* <img src="/back.png" /> */}
                                    {/* <Button
                                        className="select-subscription-button-instance"
                                        icon="left"
                                        size="lg"
                                        state="default"
                                        text="Back"
                                        type="secondary"
                                    /> */}
                                    {(API_URL == "http://localhost:3000" || API_URL == "https://testing-api.jybe.ca") && <Button
                                        className="user-info-button-instance thirty"
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="testingReset"
                                        type="primary"
                                        onClick={testingReset}
                                    />}
                                    <Button
                                        className={`select-subscription-button-instance thirty ${!cost || isNaN(cost) || parseInt(cost) < 100 ? "disabled" : ""}`}
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Continue"
                                        type="primary"
                                        onClick={handleSubmit}
                                        color={parseInt(cost) > 100 && "#9898f2"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='yellow-background' style={{ height: `${targetDivHeight + 50}px` }}>
                            <img className="select-subscription-img" src="/subimg.png" />
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
            <Navbar />
        </div>
    )

}
export default SelectSubscription