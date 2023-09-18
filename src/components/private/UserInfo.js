import React, { useState, useEffect, useContext } from 'react';
import { TextField } from '@mui/material';
import TopBar from "../TopBar";
import Select from 'react-select';
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { InputsText } from "../elements/InputsText.js";
import { SelectField } from "../elements/SelectField.js";
import { CountryDropdown } from 'react-country-region-selector';
import { Button } from "../elements/Button";
import "./userinfo.css"
import "../../css/style.css";

const API_URL = process.env.REACT_APP_API_URL
const UserInfo = () => {
    const context = useContext(AccountContext);
    const { accountContext, setAccountContext, user, accessToken, navigate } = context
    const [selectedProvince, setSelectedProvince] = useState('ON');
    const [emptyFields, setEmptyFields] = useState([]);
    const provinceOptions = [
        { value: 'AB', label: 'Alberta' },
        { value: 'BC', label: 'British Columbia' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'NL', label: 'Newfoundland and Labrador' },
        { value: 'NS', label: 'Nova Scotia' },
        { value: 'NT', label: 'Northwest Territories' },
        { value: 'NU', label: 'Nunavut' },
        { value: 'ON', label: 'Ontario' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'QC', label: 'Quebec' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'YT', label: 'Yukon' }
    ];
    const [formData, setFormData] = useState({
        firstName: 'Taylor',
        lastName: 'Nyon',
        address: '1066 Heenan Terr',
        zip: 'N2A4C9',
        phone: '1231231234',
        dob: '1976-03-13',
        country: 'Canada',
        city: 'Kitchener'
    });

    // useEffect(() => {
    //     accessToken && fetch(`${API_URL}/users/get`, {
    //         method: "GET",
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(res => {
    //             if (res[0]) {
    //                 setAccountContext({ user: res[0] })
    //                 window.alert('You appear to already have an account, you will now be redirected to the MyAccount page.')
    //                 //navigate("/approved")
    //             }
    //         })
    // }, [accessToken])

    const handleChange = (name, newValue) => {
        console.log(name, newValue)
        setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
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
}

    const handleSubmit = (e) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "address",
            "zip",
            "phone",
            "dob",
            "country",
            "city"
          ];
        if (formData.country != "Canada") {
            window.alert("We can only provide services to those with Canadian addresses at this time")
            return
        }
        e.preventDefault();
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.address ||
            !formData.zip ||
            !formData.phone ||
            !formData.dob ||
            !formData.country ||
            !formData.city
        ) {
            const missingFields = requiredFields.filter((field) => !formData[field]);
            setEmptyFields(missingFields);
            window.alert("Please fill out all required fields.");
            return; // Stop further execution
        }
        setFormData({ ...formData })
        fetch(`${API_URL}/users/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ ...formData, 'email': user.email, province: selectedProvince.value })
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
                    setAccountContext((prevContext) => ({ ...prevContext, user_id: res.user_id, formData, province: selectedProvince.value }))
                    res.user_id ? navigate("/select_subscription") : navigate("/error")
                }
            })
    };


    return (
        <div className="user-info">
            <div className="div-2">
                <div className="userinfo-body">
                    <div className="user-info-section">
                        <div className="div-3">
                            <Steps selected={1} />
                            <div className="form">
                                <div className="text-wrapper-6">Account Details</div>
                                <p className="p">
                                    Just a few additional details to get you started and make sure your account gets approved as fast as
                                    possible.
                                </p>
                                <div className="frame-6">
                                    <InputsText
                                        name="firstName"
                                        label="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={emptyFields.includes("firstName") && "red-outline"}
                                    />
                                    <InputsText
                                        name="lastName"
                                        label="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={emptyFields.includes("lastName") && "red-outline"}
                                    />
                                    <TextField
                                        className={emptyFields.includes("dob") ? "design-component-instance-node-2 red-outline" : "design-component-instance-node-2"}
                                        label="Date of Birth"
                                        fullWidth
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={(e) => handleChange("dob", e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <InputsText
                                        className={emptyFields.includes("phone") && "red-outline"}
                                        name="phone"
                                        label="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <InputsText
                                        className={emptyFields.includes("address") && "red-outline"}
                                        name="address"
                                        label="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                    <InputsText
                                        className={emptyFields.includes("city") && "red-outline"}
                                        name="city"
                                        label="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    <InputsText
                                        className={emptyFields.includes("zip") && "red-outline"}
                                        name="zip"
                                        label="Zip Code"
                                        value={formData.zip}
                                        onChange={handleChange}
                                    />
                                    <div className={`${emptyFields.includes("province") && "red-outline"} select-field design-component-instance-node-2`}>
                                        <div className={`field property-1-default`}>
                                            <select
                                                style={{ border: "None" }}
                                                className="design-component-instance-node-2"
                                                onChange={(e) => setSelectedProvince(e.target.value)}
                                                value={selectedProvince}
                                                name="province"
                                            >
                                                {provinceOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`select-field design-component-instance-node-2`}>
                                        <div className={`field property-1-default`}>
                                            <CountryDropdown
                                                value={formData.country}
                                                style={{ border: "None" }}
                                                className={emptyFields.includes("country") ? "design-component-instance-node-2 red-outline" : "design-component-instance-node-2"}
                                                onChange={(e) => handleChange("country", e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="button-wrapper">
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
                                        className="user-info-button-instance thirty"
                                        icon="right"
                                        size="lg"
                                        state="default"
                                        text="Continue"
                                        type="primary"
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                        <img
                            className="img-2"
                            alt="Img"
                            src="https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/img.png"
                        />
                    </div>
                    <Footer />
                </div>
                <Navbar />
            </div>
        </div>
    )
}

export default UserInfo;