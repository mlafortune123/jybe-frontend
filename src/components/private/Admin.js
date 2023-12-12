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

const API_URL = process.env.REACT_APP_API_URL
const Admin = () => {
    const context = useContext(AccountContext);
    const { user, accessToken, navigate } = context
    const [adminInfo, setAdminInfo] = useState()
    const [amount, setAmount] = useState(100)
    const [frozen, setFrozen] = useState()
    const [reserves, setReserves] = useState()
    const [resetTheClock, setResetTheClock] = useState()

    useEffect(() => {
        if (!user.email.includes("@jybe.ca")) {
            navigate("/")
        }
        accessToken && fetch(`${API_URL}/adminget`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status == 403) navigate("/")
                if (response.status === 500) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(async res => {
                if (res.error) {
                    toast.error(res.error)
                }
                else {
                    const updatedInfo = await Promise.all(res.res.map(calculateMonthsDifference));

                    // Now you can set the state after all calculations are done
                    setAdminInfo(updatedInfo);
                }
            })

        accessToken && fetch(`${API_URL}/checkReserves`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (response.status == 401) window.location.reload()
                if (response.status == 403) navigate("/")
                if (response.status === 500) toast.error("The requested service is currently unavailable at the moment.")
                return response.json()
            })
            .then(res => {
                if (res.error) {
                    toast.error(res.error)
                }
                else {
                    setReserves(res.res.reserves)
                    setFrozen(res.res.frozen)
                }
            })
    }, [accessToken, resetTheClock])

    const freeze = () => {
        fetch(`${API_URL}/freeze`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) toast.error(res.error)
                else toast.success(res.res)
                setResetTheClock(clock => !clock)
            })
    }

    const addTo = () => {
        const num = parseInt(amount)
        num != NaN ? fetch(`${API_URL}/addToReserves`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ amount : num })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) toast.error(res.error)
                else toast.success(res.res)
                setResetTheClock(clock => !clock)
            })
            :
            toast.error("Please input a real number")
    }

    const removeFrom = () => {
        const num = parseInt(amount)
        num != NaN ? fetch(`${API_URL}/removeFromReserves`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ amount : num })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) toast.error(res.error)
                else toast.success(res.res)
                setResetTheClock(clock => !clock)
            })
            :
            toast.error("Please input a real number")
    }

// const prepareAdminInfo = (info) => {

//     info.map((item) => {
//         const itemDate = new Date(item.created_at); // Assuming item.created_at is a date string

//         // Calculate the date one year from the given date
//         const oneYearLater = new Date(itemDate);
//         oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

//         // Calculate the difference in months

//         const monthsDifference = (oneYearLater.getFullYear() - currentDate.getFullYear()) * 12 + (oneYearLater.getMonth() - currentDate.getMonth());
//         item.monthsDifference = monthsDifference

//         const currentDate = new Date();
//         itemDate.setMonth(currentDate.getMonth());
//         itemDate.setFullYear(currentDate.getFullYear());
//         item.itemDate = itemDate
//             })
//     .then(done => setAdminInfo(info))
// }

const calculateMonthsDifference = async (item) => {
    const itemDate = new Date(item.created_at);
    const oneYearLater = new Date(itemDate);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const currentDate = new Date();
    const monthsDifference = (oneYearLater.getFullYear() - currentDate.getFullYear()) * 12 + (oneYearLater.getMonth() - currentDate.getMonth());
    itemDate.setMonth(currentDate.getMonth());
    itemDate.setFullYear(currentDate.getFullYear());
    return { ...item, monthsDifference, itemDate: itemDate.toISOString().slice(0, 10)};
  };

    return (
        adminInfo ?
        <div style={{ marginTop: "20vh" }} >
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        marginTop: '86px',
                        padding: '16px'
                    },
                }}
            />
            <h1 style={{textAlign:'center', padding:"10px"}}>Admin actions</h1>
            <div style={{display:'flex', justifyContent: "space-around"}} >
                <p style={{alignSelf:"center"}} >Reserves: ${reserves}</p>
                <Button
                    className={`approved-button-instance twenty`}
                    icon="right"
                    size="lg"
                    state="default"
                    text={frozen ? "Unfreeze" : "Freeze"}
                    type="primary"
                    onClick={freeze}
                />
                <TextField
                    className={"design-component-instance-node-2 twenty"}
                    label="Amount"
                    fullWidth
                    type="text"
                    name="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Button
                    className={`approved-button-instance twenty`}
                    icon="right"
                    size="lg"
                    state="default"
                    text="Add To Reserves"
                    type="primary"
                    onClick={addTo}
                />
                <Button
                    className={`approved-button-instance twenty`}
                    icon="right"
                    size="lg"
                    state="default"
                    text="Remove from"
                    type="primary"
                    onClick={removeFrom}
                />
            </div>
            <h1 style={{textAlign:'center', padding:"10px"}}>Orders table</h1>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>User ID</th>
                        <th>Payment Date</th>
                        <th>Subscription Service</th>
                        <th>Passed TU</th>
                        <th>Interest Rate (%)</th>
                        <th>Subscription Balance</th>
                        <th>Loan Balance</th>
                        <th>Loan Progress</th>
                        <th>Current Balance</th>
                        <th>Total Payment</th>
                        <th>Monthly Payment</th>
                        <th>Loan Terms</th>
                        <th>Loan Status</th>
                        {/* <th>Created At</th>
                        <th>Months Remaining</th>
                        <th>Email</th>
                        <th>Borrowed Amount</th>
                        <th>Total Sub Payments</th>
                        <th>Amount Paid</th>
                        <th>Original Monthly</th>
                        <th>Monthly Payment</th>
                        <th>Status</th> */}
                    </tr>
                </thead>
                {adminInfo ? <tbody>
                    {adminInfo.map((item, index) => (
                        <tr key={index}>
                            <td className="td">{item.order_id}</td>
                            <td className="td">{item.user_id}</td>
                            <td className="td">{item.itemDate}</td>
                            <td className="td">{item.merchant_name} </td>
                            <td className="td">{item.passed.toString()}</td>
                            <td className="td">0.{item.markup}</td>
                            <td className="td">${item.amount}</td>
                            <td className="td">${(item.amount * ((100 + item.markup)/100)).toFixed(2)}</td>
                            <td className='td'>{12 - item.monthsDifference} </td>
                            <td className='td'>${(item.amount * ((100 + item.markup)/100)).toFixed(2) - item.amount_paid}</td>
                            <td className="td">${((item.amount * ((100 + item.markup)/100))/12).toFixed(2)}</td>
                            <td className="td">${item.og_monthly_cost}</td>
                            <td className="td">12</td>
                            <td className='td'>{item.status}</td>
                            {/* <td className="td">{new Date(item.created_at).toLocaleDateString('en-CA')}</td>
                            <td className='td' >{item.monthsDifference} </td>
                            <td className="td">{item.email}</td>
                            <td className="td">${item.amount}</td>
                            <td className="td">${(item.amount * ((100 + item.markup)/100)).toFixed(2)}</td>
                            <td className="td">${item.amount_paid}</td>
                            <td className="td">${item.og_monthly_cost}</td>
                            <td className="td">${((item.amount * ((100 + item.markup)/100))/12).toFixed(2)}</td>
                            <td className="td">{item.status}</td> */}
                        </tr>
                    ))}
                </tbody>
                    :
                    <div>
                        Database empty
                    </div>
                }
            </table>
            <Navbar />
        </div> :
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    {/* You can add a link to your homepage or any other relevant page here */}
    <a href="/">Go to Home</a>
  </div>
    )

}

export default Admin