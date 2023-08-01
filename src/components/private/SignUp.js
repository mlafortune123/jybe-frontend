import React, { useState, useEffect, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import TopBar from "../TopBar";
import FlinksConnect from "../private/FlinksConnect";
import { AccountContext } from '../../ProtectedRoute';
const API_URL = process.env.REACT_APP_API_URL
const SignUpForm = () => {
    const context = useContext(AccountContext);
    const {accountContext, setAccountContext, user, accessToken, navigate } = context
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        zip: '',
        phone: '',
        dob: '',
        country: '',
        city: '',
        cost: 99,
        merchant_url:'',
        merchant_name:'',
        email: user.email
    });

    useEffect(() => {
        console.log(accessToken)
        accessToken && fetch(`${API_URL}/users/get`, {
            method : "GET",
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(res => {
            if (res[0]) {
                setAccountContext({user:res[0]})
                window.alert('You appear to already have an account, you will now be redirected to the MyAccount page.')
                //navigate("/approved")
            }
        })
    },[accessToken])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({...formData, 'email':user.email})
    fetch(`${API_URL}/users/create`, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({formData})
    })
    .then(response => response.json())
    .then(res => {
        if (res.error) {
            window.alert(res.error)
        }
        else {
            setAccountContext((prevContext) => ({...prevContext ,user_id: res.user_id, order_id : res.user_id, cost: formData.cost}))
            res.approved ? navigate("/approved") : navigate("/denied")
        }
    })
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   address: '',
    //   zipCode: '',
    //   phone: '',
    // });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
        <TopBar/>
        <Grid item xs={10} md={10} lg={10}>
            Your subscription is less than 5 minutes away! 
            We need to do a soft asset check through TransUnion to make sure this subscription is the right choice for the both of us.
            But don't worry, we don't save any of your information.
        </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                fullWidth
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Zip Code"
                fullWidth
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                fullWidth
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                fullWidth
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <h2>Subscription info</h2>
            <Grid item xs={12}>
              <TextField
                label="Subscription name"
                fullWidth
                name="merchant_name"
                value={formData.merchant_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subscription website"
                fullWidth
                name="merchant_url"
                value={formData.merchant_url}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Annual cost"
                fullWidth
                name="cost"
                value={formData.cost}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <p>
                By clicking below I consent to Jybe sharing my data with and obtaining my credit history
                and credit score from TransUnion of Canada Inc. in order for Jybe tp assess if credit will be
                granted. This will not affect my credit score. My consent is valid starting today and for as long
                as I use Jybes services.
              </p>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;