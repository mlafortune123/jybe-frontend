import React, { useState, useContext, useEffect } from 'react';
import { TextField } from '@mui/material';
import { AccountContext } from '../../ProtectedRoute';
import { Footer } from "../elements/Footer.js"
import { Navbar } from "../elements/Navbar.js";
import { Steps } from "../elements/Steps.js";
import { InputsText } from "../elements/InputsText.js";
import { CountryDropdown } from 'react-country-region-selector';
import { Button } from "../elements/Button";
import toast, { Toaster } from 'react-hot-toast';
import "./userinfo.css"
import "../../css/style.css";
import ReactGA from 'react-ga4';

// Initialize react-ga with your tracking ID


const API_URL = process.env.REACT_APP_API_URL
const UserInfo = () => {
    const context = useContext(AccountContext);
    const { accountContext, setAccountContext, user, accessToken, navigate } = context
    const [selectedProvince, setSelectedProvince] = useState('ON');
    const [consent, setConsent] = useState(false)
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
    const [formData, setFormData] = useState({});

    useEffect(() => {
            if (process.env.REACT_APP_API_URL == "https://api.jybe.ca") {
  ReactGA.event('page_view', {
    page_title: window.location.pathname + window.location.search,
    page_location: window.location.pathname + window.location.search,
  });
    }
      },[])

    const setGoodCredit = () => setFormData({
        firstName: 'Taylor',
        lastName: 'Nyon',
        address: '1066 Heenan Terr',
        zip: 'N2A4C9',
        phone: 18002672001,
        dob: '1976-03-13',
        country: 'Canada',
        city: 'Kitchener'
    })

    const setBadCredit = () => setFormData({
        firstName: 'Abe',
        lastName: 'Kasper',
        address: '382 Craftsman BLVD',
        zip: 'K7K7B4',
        phone: 6135464382,
        dob: '1975-01-17',
        country: 'Canada',
        city: 'Kingston'
    })

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
    //                 toast.error('You appear to already have an account, you will now be redirected to the MyAccount page.')
    //                 //navigate("/approved")
    //             }
    //         })
    // }, [accessToken])

    const handleChange = (name, newValue, type) => {
        typeof (newValue) == type && setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
    };

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
            toast.error(      
                <div>
                    <div>
                    We can only provide services to those with Canadian addresses at this time. Would you like to be notified when our service is available in your area?
                    </div>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}} >
                        <button onClick={() => handleNotifyClick(formData.country)}>Notify Me</button>
                    </div>
                </div>,
                {
            autoClose: false,
            closeOnClick: true,
            pauseOnHover: true,
            });
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
            toast.error("Please fill out all required fields.");
            return; // Stop further execution
        }
        if (!consent) {
            toast.error("Please consent to the transunion soft credit check")
            return;
        }
        setFormData({ ...formData })

        const cost = localStorage.getItem('cost');
        const merchant_name = localStorage.getItem('merchant_name');
        const og_monthly_cost = localStorage.getItem('og_monthly_cost');
        const body = {...formData, email: user.email, province: selectedProvince, cost, merchant_name }
        if (og_monthly_cost !== "undefined" && og_monthly_cost !== undefined && og_monthly_cost !== null && og_monthly_cost !== "null" ) {
            // If true, set body.og_monthly_cost to og_monthly_cost
            body.og_monthly_cost = og_monthly_cost;
          }
        fetch(`${API_URL}/orders/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                else if (response.status == 502) toast.error("The requested service is currently unavailable at the moment.")
                //if (response.status === 500 || response.status === 502) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(res => {
                if (res.error) {
                    if (res.error == "Unavailable") {
                        toast.error(      
                            <div>
                                <div>
                                Our services are currently unavailable at this time. Would you like to be notified when our service is available in your area?
                                </div>
                                <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}} >
                                    <button onClick={() => handleNotifyClick("Unavailable")}>Notify Me</button>
                                </div>
                            </div>,
                            {
                        autoClose: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        })
                    }
                    else toast.error(res.error)
                }
                else {
                    setAccountContext((prevContext) => ({
                        ...prevContext, user_id: res.user_id, order_id: res.order_id, merchant_id: res.merchant_id,
                        formData, province: selectedProvince.value, cost, merchant_name, og_monthly_cost
                    }))
                    // res.user_id ? navigate("/select_subscription") : navigate("/error")
                    res.approved ? navigate("/approved") : navigate("/denied")
                }
            })
    };

    const handleNotifyClick = async (country) => {
        // Assume this is your API endpoint for handling notifications
        try {
          const response = await fetch(`${API_URL}/subscribe`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body:JSON.stringify({
                email:user.email, country:country
            })
            // Additional options like headers, body, etc. can be added here
          });
    
          if (response.ok) {
            toast.success("You will be notified when our service is available.");
          } else {
            toast.error("Failed to subscribe for notifications. Please try again later.");
          }
        } catch (error) {
          console.error("An error occurred while processing the API request:", error);
          toast.error("An error occurred. Please try again later.");
        }
      };

    return (
        <div className="user-info">
            <div className="div-2">
                <div className="userinfo-body">
                    <div className="user-info-section">
                        <div className="div-3">
                            <Steps selected={2} />
                            <Toaster
                                toastOptions={{
                                    className: '',
                                    style: {
                                        marginTop: '86px',
                                        padding: '16px'
                                    },
                                }}
                            />
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
                                        type="string"
                                    />
                                    <InputsText
                                        name="lastName"
                                        label="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={emptyFields.includes("lastName") && "red-outline"}
                                        type="string"
                                    />
                                    <TextField
                                        className={emptyFields.includes("dob") ? "design-component-instance-node-2 red-outline" : "design-component-instance-node-2"}
                                        label="Date of Birth"
                                        fullWidth
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={(e) => handleChange("dob", e.target.value, 'string')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    {/* <InputsText
                                        className={emptyFields.includes("phone") && "red-outline"}
                                        name="phone"
                                        label={18002672001}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="number"
                                    /> */}
                                    <div className={`inputs-text design-component-instance-node-2`}>
                                        <div className={`frame-2 default ${emptyFields.includes("phone") && "red-outline"}`}>
                                            <div className="password-2">
                                                <input
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange("phone", parseInt(e.target.value), "number")}
                                                    placeholder={18002672001}
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <InputsText
                                        className={emptyFields.includes("address") && "red-outline"}
                                        name="address"
                                        label="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        type="string"
                                    />
                                    <InputsText
                                        className={emptyFields.includes("city") && "red-outline"}
                                        name="city"
                                        label="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        type="string"
                                    />
                                    <InputsText
                                        className={emptyFields.includes("zip") && "red-outline"}
                                        name="zip"
                                        label="Zip Code"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        type="string"
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
                                                onChange={(e) => handleChange("country", e, "string")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {(API_URL == "http://localhost:3000" || API_URL == "https://testing-api.jybe.ca") &&
                                    <div style={{
                                        "width": "100%",
                                        "display": "flex",
                                        "justifyContent": "space-between"
                                    }} >
                                        <Button
                                            className="user-info-button-instance thirty"
                                            icon="right"
                                            size="lg"
                                            state="default"
                                            text="Good credit"
                                            type="primary"
                                            onClick={setGoodCredit}
                                        />
                                        <Button
                                            className="user-info-button-instance thirty"
                                            icon="right"
                                            size="lg"
                                            state="default"
                                            text="Bad credit"
                                            type="primary"
                                            onClick={setBadCredit}
                                        />
                                    </div>
                                    }
                                <div className="button-wrapper" style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }} >
                                    <div className='conscon' >
                                        <input id="check" type="checkbox" checked={consent} onChange={() => setConsent((consent) => !consent)} className="checkbox-input" />
                                        <p style={{ marginLeft: '5px' }} >I consent</p>
                                    </div>
                                    {/* <div className="consent-container">
                                        <label htmlFor="check" className="checkbox-label">I consent</label>
                                        <input id="check" type="checkbox" checked={consent} onChange={() => setConsent((consent) => !consent)}  className="checkbox-input" />
                                    </div> */}
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
                                <p class="consent-text">I consent to Jybe sharing my data with and obtaining my credit history and credit score from TransUnion of Canada Inc. in order for Jybe to assess if credit will be granted. This will not affect my credit score. My consent is valid starting today and for as long as I use Jybes services.</p>
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