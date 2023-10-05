import React, { useState, useContext } from 'react';
import { AccountContext } from '../../ProtectedRoute';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { Button } from "../elements/Button";
import subs from "../public/subscriptions.json"
import { ConcreteComponentNode } from "../elements/ConcreteComponentNode";
import "./userinfo.css"
import "../../css/style.css";
import "./selectsubscription.css"

const API_URL = process.env.REACT_APP_API_URL
const SelectSubscription = () => {
    const context = useContext(AccountContext);
    const { accountContext, setAccountContext, user, accessToken, navigate } = context
    const [selectedItem, setSelectedItem] = useState();
    const [merchantName, setMerchantName] = useState()
    const [cost, setCost] = useState()
    const [ogMonthlyCost, setOgMonthlyCost] = useState()

    const clearCostPlaceHolder = () => {
        cost == "Annual Subscription Cost" && setCost("")
    }

    const restoreCostPlaceHolder = () => {
        cost == "" && setCost("Annual Subscription Cost")
    }

    const clearOgCostPlaceHolder = () => {
        ogMonthlyCost == "Monthly Subscription Cost" && setOgMonthlyCost("")
    }

    const restoreOgCostPlaceHolder = () => {
        ogMonthlyCost == "" && setOgMonthlyCost("Monthly Subscription Cost")
    }

    const clearNamePlaceHolder = () => {
        merchantName == "Subscription Name" && setMerchantName("")
    }

    const restoreNamePlaceHolder = () => {
        merchantName == "" && setMerchantName("Subscription Name")
    }

    const handleSubmit = (e) => {
        const requiredFields = [
            "cost",
            "merchantName"
        ];
        if (merchantName == "Error") {
            window.alert("We don't like this merchant")
            return
        }
        e.preventDefault();
        if ((!merchantName && !selectedItem)) {
            window.alert("Please select a merchant from the list, or put your subscription in the custom subscription field.");
            return;
        }
        else if (!cost) {
            window.alert("Please fill in the annual cost field.");
            return;
        }
        else {
            fetch(`${API_URL}/orders/select`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    // formData: accountContext.formData,
                    // province: accountContext.province,
                    cost,
                    og_monthly_cost: ogMonthlyCost,
                    merchant_name: selectedItem ? selectedItem.name : merchantName
                })
            })
                .then(response => {
                    if (response.status == 401) window.location.reload()
                    return response.json()
                })
                .then(res => {
                    if (res.error) {
                        window.alert(res.error)
                    }
                    else {
                        //setAccountContext((prevContext) => ({ ...prevContext, order_id: res.order_id, merchant_id: res.merchant_id, cost, }))
                        setAccountContext((prevContext) => ({ ...prevContext, order_id: res.order_id, cost, merchantName : selectedItem ? selectedItem : merchantName, og_monthly_cost: ogMonthlyCost, merchant_id : res.merchant_id }))
                        navigate("/select_subscription")

                        //res.approved ? navigate("/approved") : navigate("/denied")
                    }
                })
        }
    };

    const testingReset = () => {
        fetch(`${API_URL}/orders/delete/asasd`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(we =>     
            fetch(`${API_URL}/users/delete/asasd`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }))
        .then(we2 => window.alert("reset complete"))
    }

const handleMerchantChange = (e) => {
    setSelectedItem(e.target.value.toLowerCase())
    setMerchantName(e.target.value)

}

    return (
        <div className="select-subscription">
            <div className="select-subscription-div-2">
                <div className="select-subscription-body">
                    <div className="select-subscription-section">
                        <div className="select-subscription-div-3">
                            <Steps selected={1} />
                            <div className="select-subscription-form">
                                <div className="select-subscription-text-wrapper-3">Select Your Subscription</div>
                                <p className="select-subscription-almost-there-select">
                                    <span className="select-subscription-span">
                                        Almost there. Select all the subscriptions you need
                                        <br /> and find out how much you SAVE!{" "}
                                    </span>
                                    <span className="select-subscription-text-wrapper-4">🎉</span>
                                </p>
                                <p className="select-subscription-just-add-your">
                                    <span className="select-subscription-text-wrapper-5">Just </span>
                                    <span className="select-subscription-text-wrapper-4">add</span>
                                    <span className="select-subscription-text-wrapper-5"> Your Subscription here in case it is not in the list:</span>
                                </p>
                                <div className="select-subscription-frame-5">
                                    <div className="select-subscription-field">
                                        <input
                                            type="text"
                                            id="cost"
                                            name="cost"
                                            className="select-subscription-text-wrapper-6"
                                            placeholder='Subscription Name'
                                            value={merchantName}
                                            onChange={handleMerchantChange}
                                            onClick={clearNamePlaceHolder}
                                            onBlur={restoreNamePlaceHolder}
                                        />
                                    </div>
                                </div>
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
                                                        setMerchantName("")
                                                        setSelectedItem(sub.name)
                                                    }}
                                                    isChecked={selectedItem == sub.name}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {/* <div className="select-subscription-rectangle-wrapper">
                                        <div className="select-subscription-rectangle-2" />
                                    </div> */}
                                </div>
                                {/* <div className="select-subscription-field">
                                    <div className="select-subscription-text-wrapper-6">Annual Subscription Cost</div>
                                </div> */}
                                <div className="select-subscription-field" style={{ width: "100%" }} >
                                    <input
                                        type="text"
                                        id="cost"
                                        name="cost"
                                        className="select-subscription-text-wrapper-6"
                                        placeholder="Monthly Cost"
                                        value={ogMonthlyCost}
                                        onChange={e => setOgMonthlyCost(e.target.value)}
                                        onClick={clearOgCostPlaceHolder}
                                        onBlur={restoreOgCostPlaceHolder}
                                    />
                                </div>
                                <div className="select-subscription-field" style={{ width: "100%" }}>
                                    <input
                                        type="text"
                                        id="cost"
                                        name="cost"
                                        className="select-subscription-text-wrapper-6"
                                        placeholder="Annual Cost"
                                        value={cost}
                                        onChange={e => setCost(e.target.value)}
                                        onClick={clearCostPlaceHolder}
                                        onBlur={restoreCostPlaceHolder}
                                    />
                                </div>
                                {/* <InputsText
                                    className="select-subscription-field select-subscription-text-wrapper-6"
                                    name="cost"
                                    label="Annual Subscription Cost"
                                    value={cost}
                                    onChange={e => setCost(e.target.value)}
                                /> */}
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
                                    {(API_URL == "http://localhost:3000" || API_URL == "https://api.jybe.ca") && <Button
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
                        <img className="select-subscription-img" src="/subimg.png" />
                    </div>
                    <Footer />
                </div>
                <Navbar />
            </div>
        </div>
    )

}
export default SelectSubscription