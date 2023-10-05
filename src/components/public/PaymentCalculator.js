import React, {useState} from "react";
import { Checkmark } from "../elements/Checkmark";
import { ConcreteComponentNode } from "../elements/ConcreteComponentNode";
import subs from "./subscriptions.json"

export const PaymentCalculator = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToSelected = (newItem) => {
        console.log(selectedItems)
        selectedItems.includes(newItem) ? 
        setSelectedItems((prevSelectedItems) => prevSelectedItems.filter(item => item !== newItem))
        :
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, newItem]);
      };

    return (
        <div className="div-3">
            <div className="calculator">
                <div className="frame-8">
                    <p className="text-wrapper-2">Calculate Your Savings With Jybe</p>
                    <p className="text-wrapper-3">
                        Select all your subscriptions to see Jybe's savings for you.
                    </p>
                </div>
                <div className="frame-7">
                    <div className="frame-9">
                        <div className="brand-list">
                            <div className="text-wrapper-4">Select Company</div>
                            <div className="frame-10">
                                <div className="frame-11">
                                    {subs.map((sub) =>
                                        <div className="logo-2">
                                            <img src={sub.image} className="design-component-instance-node-2" />
                                            <ConcreteComponentNode
                                            rectangleClassName="toggle-checkmark-2"
                                            stateDefaultLargerClassName="toggle-checkmark-instance"
                                            stateProp="default-larger"
                                            onClick={() => addToSelected(sub)}
                                            isChecked={selectedItems.includes(sub)}
                                            />  
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="frame-12">
                            <div className="frame-13">
                                <div className="frame-14">
                                    <div className="text-wrapper-5">Without Jybe</div>
                                </div>
                                <div className="frame-14">
                                    <div className="text-wrapper-5">With</div>
                                    <img
                                        className="logo-3"
                                        alt="Logo"
                                        src="/logo.svg"
                                    />
                                </div>
                            </div>
                            {
                                selectedItems.map((item => 
                                    <div className="frame-15">
                                    <div className="frame-16">
                                        <img
                                            className="fill-2"
                                            alt="Fill"
                                            src={item.image}
                                        />
                                        <div className="text-wrapper-6">Yearly Subscription</div>
                                        <div className="frame-17">
                                            <div className="text-wrapper-5">${(item.price * 12).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    <img
                                        className="frame-18"
                                        alt="Frame"
                                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/frame-15.svg"
                                    />
                                    <div className="frame-16">
                                        <div className="text-wrapper-7">Yearly Subscription</div>
                                        <div className="frame-17">
                                            <div className="text-wrapper-5">${((item.price * 12) * 0.85).toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        <div className="frame-20">
                            <div className="text-wrapper-8">You'll save with Jybe</div>
                            {selectedItems.length > 0 &&<div className="frame-21">
                                <div className="frame-22">
                                    <p className="div-4">
                                        <span className="span">
                                        ${
                                            selectedItems.length > 1 ? 
                                            selectedItems.reduce((total, item) => total + (item.price * 0.15), 0).toFixed(2)
                                            :
                                            (selectedItems[0].price * 0.15).toFixed(2)
                                        }
                                        </span>
                                        <span className="text-wrapper-9">&nbsp;Monthly</span>
                                    </p>
                                </div>
                                <div className="text-wrapper-10">&amp;</div>
                                <div className="frame-22">
                                    <p className="div-4">
                                        <span className="span">
                                        ${
                                                selectedItems.length > 1 ? 
                                                selectedItems.reduce((total, item) => total + (item.price * 12 * 0.15), 0).toFixed(2)
                                                :
                                                (selectedItems[0].price * 12 * 0.15).toFixed(2)
                                            }
                                        </span>
                                        <span className="text-wrapper-9">&nbsp;Yearly</span>
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img
                        className="pyramid-3"
                        alt="Pyramid"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/pyramid-02-1-1@2x.png"
                    />
                    <img
                        className="mask-group-8"
                        alt="Mask group"
                        src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/mask-group-1@2x.png"
                    />
                </div>
            </div>
        </div>
    )
}