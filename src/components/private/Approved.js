import React, { useState, useEffect, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import TopBar from "../TopBar";
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
const API_URL = process.env.REACT_APP_API_URL
const stripePromise = loadStripe(STRIPE_KEY)

const Approved = () => {
    const [checkoutUrl, setCheckoutUrl] = useState()
    const context = useContext(AccountContext);
    const {accountContext, setAccountContext, user, accessToken, navigate } = context
    console.log(accountContext)


    useEffect(() => {
        accessToken && fetch(`${API_URL}/stripe/create`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body:JSON.stringify({merchant_name : 'netflix', merchant_id : '70563657-c036-47e5-9248-1bc9bd7c95d8', amount : accountContext.cost, email : user.email, user_id : accountContext.user_id})
        })
        .then(response => response.json())
        .then(res => setCheckoutUrl(res.url))
    },[accessToken])

    return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
        <TopBar/>
        <Grid item xs={10}>
            <h2 style={{textAlign:'center'}} >You're Approved! Please see the terms of your subscription below</h2>
        </Grid> 
        <Grid style={{display:'flex'}} >
            <div className="button">
                ${((accountContext.cost / 12) *1.15).toFixed(2)} / month
            </div>
            <p class="blue-text" >
                for 12 months
            </p>
            <div className="button">
                You save ${((accountContext.cost / 12) *0.05).toFixed(2)} / month
            </div>
        </Grid>
        {checkoutUrl && (
        <button onClick={() => window.location.replace(checkoutUrl)} width="100px" height="50px">stripe checkout</button>
      )}
    </Grid>
    )
}

export default Approved